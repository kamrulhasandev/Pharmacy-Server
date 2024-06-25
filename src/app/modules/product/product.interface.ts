import { Date, Types } from "mongoose";

export interface TProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Types.ObjectId;
  brand: string;
  dosageForm: string;
  strength: string;
  stock: number;
  image?: string;
  expirationDate: string;
  usageInstructions?: string;
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
}
