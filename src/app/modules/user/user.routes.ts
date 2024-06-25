import express from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import userValidation from "./user.validation";

const router = express.Router();

router.get("/get-admin/:email", userController.getAdmin);

router.post(
  "/save-user",
  validateRequest(userValidation),
  userController.saveUser
);

export const userRoutes = router;
