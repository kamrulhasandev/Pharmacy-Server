import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { reviewServices } from "./review.services";

const addReview = catchAsync(async (req: any, res: any) => {
  const review = req.body;
  const result = await reviewServices.addReview(review);
  res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Review added successfully",
    data: result,
  });
});

export const reviewController = { addReview };
