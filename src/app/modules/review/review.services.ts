import { Review } from "./review.model";

const addReview = async (review: any) => {
  const newReview = await Review.create(review);
  return newReview;
};



export const reviewServices = { addReview }