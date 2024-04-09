import express from "express";
import { loginUser, logoutUser, signUpUSer } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signUpUSer);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

export default router;