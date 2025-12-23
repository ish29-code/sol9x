import express from "express";
import {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent,
    updateMyProfile,
} from "../controllers/studentController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, roleMiddleware("admin"), getStudents);
router.post("/", authMiddleware, roleMiddleware("admin"), addStudent);
router.put("/:id", authMiddleware, roleMiddleware("admin"), updateStudent);
router.delete("/:id", authMiddleware, roleMiddleware("admin"), deleteStudent);

router.put("/me/profile", authMiddleware, updateMyProfile);

export default router;
