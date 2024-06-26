import express from "express";
import { reviewController } from "./review.controller";

const router = express.Router();

router.post("/add-review", reviewController.addReview);

export const reviewRoutes = router;
