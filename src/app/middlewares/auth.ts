import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import httpStatus from "http-status";
import config from "../config";
import catchAsync from "../utils/catchAsync";
import AppError from "../errors/AppError";
import { User } from "../modules/user/user.model";

interface CustomRequest extends Request {
  user?: JwtPayload;
}

const verifyToken = catchAsync(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader);

    if (!authHeader) {
      return next(new AppError(httpStatus.UNAUTHORIZED, "UNAUTHORIZED User."));
    }

    const token = authHeader;

    jwt.verify(token, config.jwt_secret as string, (err, decoded) => {
      if (err) {
        return next(
          new AppError(httpStatus.UNAUTHORIZED, "UNAUTHORIZED User.")
        );
      }

      if (!decoded || typeof decoded === "string") {
        return next(
          new AppError(httpStatus.UNAUTHORIZED, "UNAUTHORIZED User.")
        );
      }

      req.user = decoded as JwtPayload;
      next();
    });
  }
);

const verifyAdmin = catchAsync(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new AppError(httpStatus.UNAUTHORIZED, "UNAUTHORIZED User."));
    }

    const email = req.user.email;
    const user = await User.findOne({ email });

    if (!user || user.role !== "admin") {
      return next(
        new AppError(
          httpStatus.FORBIDDEN,
          "You do not have the necessary permissions."
        )
      );
    }

    next();
  }
);

export { verifyToken, verifyAdmin };
