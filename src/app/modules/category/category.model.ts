import { TCategory } from "./category.interface";
import { Schema, model } from "mongoose";

const categorySchema = new Schema<TCategory>(
  {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    description: {
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

export const Category = model<TCategory>("Category", categorySchema);
