import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import router from "./src/routes/index.js";
import cors from "cors";
import dbConnect from "./src/DB/dbConnect.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(router);
app.use(express.static(path.resolve("./public")));

// handling sockets

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("new client connected ", socket.id);

  socket.on("sendMessage", (message) => {
    console.log(`a new user message:  : ${message}`);

    io.emit("receiveMessage", message);
  });

  socket.on("disconnected", () => {
    console.log(`Client disconencted: ${socket.id}`);
  });
});

app.get("/", (req, res) => {
  console.log("the / api is hit ");

  // res.json({ message: "you have come to the right point !" })
  res.sendFile(path);
});
httpServer.listen(PORT, () => {
  dbConnect();
  console.log(
    "this is from the server of basic websocket server run by abdul hannan !"
  );
});
