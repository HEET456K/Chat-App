import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: '../.env' });
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();

const port = process.env.PORT || 5000;

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


app.listen(port, () => {
    connectMongoDB();
    // console.log(`MongoDB URI: ${process.env.MONGO_DB_URI}`);

    console.log(`server running on the port port ${port}`);
});