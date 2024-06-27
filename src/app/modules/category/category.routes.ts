import express from "express";
import { categoryController } from "./category.controller";
import validateRequest from "../../middlewares/validateRequest";
import categoryValidation from "./category.validation";
import { verifyAdmin, verifyToken } from "../../middlewares/auth";

const router = express.Router();

router.get("/", categoryController.getAllCategories);

router.get("/:id", categoryController.getSingleCategory);

router.post(
  "/create-category",
  verifyToken, verifyAdmin,
  validateRequest(categoryValidation),
  categoryController.createCategory
);

export const categoryRoutes = router;
