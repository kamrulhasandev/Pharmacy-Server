import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategory = async (category: TCategory) => {
  const result = await Category.create(category);
  return result;
};

const getAllCategories = async () => {
  const result = await Category.find();
  return result;
};

const getSingleCategory = async (id: string) => {
  const result = await Category.findById(id);
  return result;
};

export const categoryServices = {
  createCategory,
  getAllCategories,
  getSingleCategory,
};
