import express from "express";
import { metaDataController } from "./metaData.controller";
import { verifyAdmin, verifyToken } from "../../middlewares/auth";

const router = express.Router();

router.get("/", verifyToken, verifyAdmin, metaDataController.getDashboardMetaData);

export const metaDataRoutes = router;