import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
