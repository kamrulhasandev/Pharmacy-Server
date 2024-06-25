import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    dosageForm: {
      type: String,
      required: true,
    },
    strength: {
      type: String,
      required: true,
    },
    
    stock: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    expirationDate: {
      type: String,
      required: true,
    },    
    usageInstructions: {
      type: String,
      optional: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

export const Product = model<TProduct>("Product", productSchema);
