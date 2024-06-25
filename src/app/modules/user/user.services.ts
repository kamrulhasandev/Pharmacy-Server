import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "./user.model";

const saveUser = async (user: any) => {
  const existingUser = await User.findOne({ email: user.email });

  if (existingUser) {
    throw new AppError(httpStatus.OK, "User already exists");
  }

  const result = await User.create(user);
  return result;
};

const getAdmin = async (email: string) => {
  const user = await User.findOne({ email });
  let admin = false;
  if (user) {
    admin = user.role === "admin";
  }
  return { admin };
};

export const userServices = { saveUser, getAdmin };
