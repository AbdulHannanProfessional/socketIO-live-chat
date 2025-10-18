import express from "express"
import authRoutes from "./authRoutes.js"
import chatRoutes from "./chatRoute.js"


const router = express.Router()


router.use("/api/auth", authRoutes)
router.use("/api/chat", chatRoutes)

export default router