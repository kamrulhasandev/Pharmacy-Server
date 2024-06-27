import { Types } from "mongoose";

export interface TSales {
  id: string;
  product: Types.ObjectId;
  user: Types.ObjectId;
  quantity: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}
