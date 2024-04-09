import mongoose from "mongoose";
// const dotenv = require('dotenv');
// dotenv.config();
import dotenv from "dotenv";
dotenv.config();
const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

export default connectMongoDB;
