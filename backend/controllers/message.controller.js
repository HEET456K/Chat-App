import conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let Conversation = await conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!Conversation) {
            Conversation = await conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if (newMessage) {
            Conversation.messages.push(newMessage._id);
        }

        // SOCKET.IO FUNCTIONALITY

        // await Conversation.save();
        // await newMessage.save();

        // this will run in parellel
        await Promise.all([Conversation.save(), newMessage.save()]);

        return res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in Send Message Controller: ", error.message);
        res.status(500).json({ error: "Internal server Error" });
    }
};

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const Conversation = await conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages"); //  NOT REFERENCE BUT ACTUAL MESSAGES

        if (!Conversation) return res.status(200).json([]);

        const messages = Conversation.messages;

        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in get Messages Controller: ", error.message);
        res.status(500).json({ error: "Internal server Error" });
    }
}