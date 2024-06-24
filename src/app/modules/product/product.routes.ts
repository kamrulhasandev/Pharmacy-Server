import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { productController } from "./product.controller";
import productValidation from "./product.validation";

const router = express.Router();

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getSingleProduct);

router.post(
  "/create-product",
  validateRequest(productValidation),
  productController.createProduct
);

export const productRoutes = router;
