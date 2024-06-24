import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/save-user", userController.saveUser);

export const userRoutes = router;
