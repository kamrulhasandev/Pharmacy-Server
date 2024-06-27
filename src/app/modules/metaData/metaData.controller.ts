import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { metaDataServices } from "./metaData.services";

const getDashboardMetaData = catchAsync(async (req: any, res: any) => {
  const result = await metaDataServices.getDashboardMetaData();
  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Dashboard meta data fetched successfully",
    data: result,
  });
});


export const metaDataController = { getDashboardMetaData }