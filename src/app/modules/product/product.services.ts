import mongoose from "mongoose";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (product: TProduct) => {
  const newProduct = await Product.create(product);
  return newProduct;
};

const getAllProducts = async () => {
  const session = await mongoose.startSession();
  let products;

  try {
    session.startTransaction();

    products = await Product.aggregate([
      {
        $lookup: {
          from: 'reviews',
          localField: '_id',
          foreignField: 'product',
          as: 'reviews'
        }
      },
      {
        $lookup: {
          from: 'users',
          localField: 'reviews.user',
          foreignField: '_id',
          as: 'userDetails'
        }
      },
      {
        $addFields: {
          reviews: {
            $map: {
              input: "$reviews",
              as: "review",
              in: {
                $mergeObjects: [
                  "$$review",
                  {
                    userDetails: {
                      $arrayElemAt: [
                        {
                          $filter: {
                            input: "$userDetails",
                            as: "user",
                            cond: { $eq: ["$$user._id", "$$review.user"] }
                          }
                        },
                        0
                      ]
                    }
                  }
                ]
              }
            }
          }
        }
      },
      {
        $lookup: {
          from: 'categories',
          localField: 'category',
          foreignField: '_id',
          as: 'categoryDetails'
        }
      },
      {
        $unwind: {
          path: '$categoryDetails',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $project: {
          userDetails: 0
        }
      }
    ]);

    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }

  return products;
};



const getSingleProduct = async (id: string) => {
  const product = await Product.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(id) }
    },
    {
      $lookup: {
        from: 'reviews',
        localField: '_id',
        foreignField: 'product',
        as: 'reviews'
      }
    },
    {
      $lookup: {
        from: 'users',
        localField: 'reviews.user',
        foreignField: '_id',
        as: 'userDetails'
      }
    },
    {
      $addFields: {
        reviews: {
          $map: {
            input: "$reviews",
            as: "review",
            in: {
              $mergeObjects: [
                "$$review",
                {
                  userDetails: {
                    $arrayElemAt: [
                      {
                        $filter: {
                          input: "$userDetails",
                          as: "user",
                          cond: { $eq: ["$$user._id", "$$review.user"] }
                        }
                      },
                      0
                    ]
                  }
                }
              ]
            }
          }
        }
      }
    },
    {
      $lookup: {
        from: 'categories',
        localField: 'category',
        foreignField: '_id',
        as: 'categoryDetails'
      }
    },
    {
      $unwind: {
        path: '$categoryDetails',
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $project: {
        userDetails: 0
      }
    }
  ]);

  return product.length ? product[0] : null;
};


const editProduct = async (id: string, product: TProduct) => {
  const updatedProduct = await Product.findByIdAndUpdate(id, product, {
    new: true,
  });
  return updatedProduct;
};

const deleteProduct = async (id: string) => {
  const deletedProduct = await Product.findByIdAndDelete(id);
  return deletedProduct;
};

export const productServices = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  editProduct,
  deleteProduct,
};
