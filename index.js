import express from "express"
import { createServer } from "http";
import { Server } from "socket.io";
import router from "./src/routes/index.js";
import cors from "cors"
import dbConnect from "./src/DB/dbConnect.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

const httpServer = createServer(app)
app.use(cors("*"));
app.use(router)
const io = new Server(httpServer, {
    cors: {
        origin: "*",
    }
})

io.on("connection", (socket) => {
    console.log("new client connected ")

    socket.on("sendMessage", (message) => {
        console.log(`message : ${message}`);

        io.emit("recieve message ", message)

    })
    socket.on("disconnected", () => {

        console.log(`Client disconencted: ${socket.id}`);
        
    })
})

app.get("/", (req, res) => {
    console.log("the / api is hit ")

    res.json({ message: "you have come to the right point !" })


})
httpServer.listen(PORT, () => {
    dbConnect()
    console.log("this is from the server of basic websocket server run by abdul hannan !")
})