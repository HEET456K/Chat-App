import bcrypt from 'bcryptjs';
import User from "../models/user.model.js";
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signUpUSer = async (req, res) => {
    try {
        const { fullName, userName, password,
            confirmPassword, gender } = req.body;

        if (password != confirmPassword) {
            return res.status(400).json({ eroor: "Password don't match" })
        }

        const user = await User.findOne({ userName });
        console.log(user);
        if (user) {
            return res.status(400).json({ error: "UserName already exites." })
        }

        //  HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // profile pic
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password: hashPassword,
            gender,
            profilePic: gender === "Male" ? boyProfilePic : girlProfilePic
        });

        if (newUser) {
            // Generate JWT Token
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({ error: "Invalid user Data" });
        }
    } catch (error) {
        console.log("Error in Signup Controller ", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}
export const loginUser = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            res.status(400).json({ error: "Invalid userName or Password" });
        }
        generateTokenAndSetCookie(user._id, res);

        res.status(201).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePic: user.profilePic
        })

    } catch (error) {
        console.log("Error in Login Controller ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
export const logoutUser = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged Out Successfully." })
    } catch (error) {
        console.log("Error in LogOut Controller ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}