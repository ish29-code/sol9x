import express from "express";
import {
    signup,
    login,
    verifyEmail,
    forgotPassword,
    resetPassword,
    changePassword,
} from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/verify/:token", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset/:token", resetPassword);
router.post("/change-password", authMiddleware, changePassword);

export default router;
