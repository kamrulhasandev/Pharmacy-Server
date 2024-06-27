import mongoose from "mongoose";
import { Sale } from "./sales.model";
import { Product } from "../product/product.model";

const addSales = async (sales: any) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { product, quantity } = sales;

    const updatedProduct = await Product.findOneAndUpdate(
      { _id: product },
      { $inc: { stock: -quantity } },
      { new: true, session }
    );

    if (!updatedProduct) {
      throw new Error("Product not found or insufficient stock");
    }

    const newSales = await Sale.create([sales], { session });

    await session.commitTransaction();
    session.endSession();

    return newSales;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

const getSales = async (date: any) => {
  let sales;

  try {
    if (date === "all") {
      sales = await Sale.find()
        .populate("product", "name image ")
        .populate("user", "email");
    } else {
      let queryDate;
      if (date) {
        queryDate = new Date(date);
        if (isNaN(queryDate.getTime())) {
          throw new Error("Invalid date format");
        }
      } else {
        queryDate = new Date();
      }

      queryDate.setUTCHours(0, 0, 0, 0);
      const nextDay = new Date(queryDate);
      nextDay.setUTCDate(queryDate.getUTCDate() + 1);

      console.log("Query Date:", queryDate.toLocaleDateString());
      console.log("Next Day:", nextDay.toLocaleDateString());

      sales = await Sale.find({
        createdAt: {
          $gte: queryDate.toLocaleDateString(),
          $lt: nextDay.toLocaleDateString(),
        },
      })
        .populate("product", "name image")
        .populate("user", "email");

      console.log("Found sales:", sales);
    }

    return sales;
  } catch (error: any) {
    console.error("Error fetching sales:", error.message);
    throw error; 
  }
};


export const salesServices = { addSales, getSales };
