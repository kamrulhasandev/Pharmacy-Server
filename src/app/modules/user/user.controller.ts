import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { userServices } from "./user.services";
import { Request, Response } from "express";

const saveUser = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;
  const result = await userServices.saveUser(user);
  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "User added successfully",
    data: result,
  });
});

const getAdmin = catchAsync(async (req: Request, res: Response) => {
  const email = req.params.email;
  const result = await userServices.getAdmin(email);
  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Admins fetched successfully",
    data: result,
  });
});

export const userController = { saveUser, getAdmin };
