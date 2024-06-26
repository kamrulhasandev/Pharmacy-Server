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
