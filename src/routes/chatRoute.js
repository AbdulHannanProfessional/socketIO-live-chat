import express from 'express';
import {getAllMessages,  createMessages} from "../controllers/chatController.js"

const router = express.Router()

router.get("/", getAllMessages)
router.post("/", createMessages)

export default router;