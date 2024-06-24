import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (product: TProduct) => {
  const newProduct = await Product.create(product);
  return newProduct;
};

const getAllProducts = async () => {
  const products = await Product.find().populate("category");
  return products;
};

const getSingleProduct = async (id: string) => {
  const product = await Product.findById(id).populate("category");
  return product;
};

export const productServices = {
  createProduct,
  getAllProducts,
  getSingleProduct,
};
