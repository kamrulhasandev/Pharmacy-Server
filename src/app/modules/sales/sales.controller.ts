import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { salesServices } from "./sales.services";

const addSales = catchAsync(async (req: any, res: any) => {
  const sales = req.body;
  const result = await salesServices.addSales(sales);
  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Sales added successfully",
    data: result,
  });
});

const getSales = catchAsync(async (req: any, res: any) => {
  const date = req.query.date;
  const result = await salesServices.getSales(date);
  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Sales fetched successfully",
    data: result,
  });
});

export const salesController = { addSales, getSales };
