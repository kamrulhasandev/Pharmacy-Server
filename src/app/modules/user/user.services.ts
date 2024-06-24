import { User } from "./user.model";

const saveUser = async (user: any) => {
  const result = await User.create(user);
  return result;
};

export const userServices = { saveUser };
