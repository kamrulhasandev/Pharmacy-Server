import express from "express";
import { salesController } from "./sales.controller";
import validateRequest from "../../middlewares/validateRequest";
import saleValidation from "./sales.validation";
import { verifyToken } from "../../middlewares/auth";

const router = express.Router();

router.get("/", verifyToken, salesController.getSales);

router.get("/user/:userId", salesController.getSpecficUserSales);

router.post(
  "/add-sale",
  verifyToken,
  validateRequest(saleValidation),
  salesController.addSales
);

export const salesRoutes = router;
