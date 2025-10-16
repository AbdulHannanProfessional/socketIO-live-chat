import express from "express"
const router = express.Router()

import authRoutes from "./authRoutes.js"

router.use("/api/auth", authRoutes)

export default router