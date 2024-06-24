import { Request, Response } from "express";
import { categoryServices } from "./category.services";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const category = req.body;
  const result = await categoryServices.createCategory(category);
  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Category added successfully",
    data: result,
  });
});

const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const result = await categoryServices.getAllCategories();
  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Categories fetched successfully",
    data: result,
  });
});

const getSingleCategory = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await categoryServices.getSingleCategory(id);
  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Category fetched successfully",
    data: result,
  });
});

export const categoryController = {
  createCategory,
  getAllCategories,
  getSingleCategory,
};
