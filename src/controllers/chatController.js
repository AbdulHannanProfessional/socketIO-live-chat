const messages = []

export const getAllMessages = (req,res) => {
    res.json(messages)
}

export const createMessages = (req, res ) => {
    const {user, text} = req.body
    if(!user || !text) return res.status(400).json({message: "Missing fields"})

    const message = {user, text, timestamp: new Date()}
    message.push(message)

    req.io.emit("receivedMessage", message)
    res.status(201).json(message)
}

