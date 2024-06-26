import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { productController } from "./product.controller";
import { productValidationSchema } from "./product.validation";
import { verifyAdmin, verifyToken } from "../../middlewares/auth";

const router = express.Router();

router.get("/",  productController.getAllProducts);

router.get("/:id", productController.getSingleProduct);

router.put(
  "/edit-product/:id",
  validateRequest(productValidationSchema.editProductValidation),
  productController.editProduct
);

router.post(
  "/create-product",
  validateRequest(productValidationSchema.productValidation),
  productController.createProduct
);

router.delete("/delete-product/:id", productController.deleteProduct);

export const productRoutes = router;
