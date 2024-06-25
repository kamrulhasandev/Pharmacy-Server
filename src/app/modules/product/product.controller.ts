import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { productServices } from "./product.services";

const createProduct = catchAsync(async (req: any, res: any) => {
  const product = req.body;
  const result = await productServices.createProduct(product);
  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Product added successfully",
    data: result,
  });
});

const getAllProducts = catchAsync(async (req: any, res: any) => {
  const result = await productServices.getAllProducts();
  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Products fetched successfully",
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req: any, res: any) => {
  const id = req.params.id;
  const result = await productServices.getSingleProduct(id);
  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Product fetched successfully",
    data: result,
  });
});

const editProduct = catchAsync(async (req: any, res: any) => {
  const id = req.params.id;
  const product = req.body;
  const result = await productServices.editProduct(id, product);
  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Product updated successfully",
    data: result,
  });
});

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  editProduct,
};
