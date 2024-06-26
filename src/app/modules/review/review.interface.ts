import { Types } from "mongoose";

export interface TReview {
  id: string;
  product: Types.ObjectId;
  user: Types.ObjectId;
  rating: number;
  comment: string;
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
}
