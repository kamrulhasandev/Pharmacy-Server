import { startSession } from "mongoose";
import { Category } from "../category/category.model";
import { Product } from "../product/product.model";
import { User } from "../user/user.model";
import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Sale } from "../sales/sales.model";

const getDashboardMetaData = async () => {
  let session;
  try {
    session = await startSession();
    session.startTransaction();

    const totalUsers = await User.countDocuments({}, { session });
    const totalProducts = await Product.countDocuments({}, { session });
    const totalCategories = await Category.countDocuments({}, { session });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const totalSaleAmount = await Sale.aggregate([
      {
        $match: {
          createdAt: { $gte: today },
        },
      },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$price" },
        },
      },
    ]).session(session);

    const totalSaleCount = await Sale.countDocuments({
      createdAt: { $gte: today },
    }).session(session);

    await session.commitTransaction();
    session.endSession();

    const result = {
      totalUsers,
      totalProducts,
      totalCategories,
      totalSaleAmount:
        totalSaleAmount.length > 0 ? totalSaleAmount[0].totalAmount : 0,
      totalSaleCount,
    };
    return result;
  } catch (error) {
    if (session) {
      await session.abortTransaction();
      session.endSession();
    }
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Something went wrong"
    );
  }
};



export const metaDataServices = { getDashboardMetaData };
