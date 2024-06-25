import jwt from "jsonwebtoken";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import config from "./app/config";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.post("/api/jwt", async (req: Request, res: Response) => {
  const user = req.body;
  if (!user || !user.email) {
    return res.status(400).json({
      success: false,
      message: "User information (email) is required",
    });
  }

  try {
    const token = jwt.sign({ email: user.email }, config.jwt_secret as string, {
      expiresIn: "1h",
    });
    res.status(200).json({
      success: true,
      message: "Token generated successfully",
      token,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error generating token",
      error: error.message,
    });
  }
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
