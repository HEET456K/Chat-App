import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: '.env' });
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";
import path from "path";


const port = process.env.PORT || 5000;
const __dirname = path.resolve();

// console.log(process.env);
// console.log(process.env.PORT);
// app.get("/", (req, res) => {
//     res.send("HELLOW WORLD!!")
// })
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(port, () => {
    connectToMongoDB();
    // console.log(`MongoDB URI: ${process.env.MONGO_DB_URI}`);

    console.log(`server running on the port port ${port}`);
});