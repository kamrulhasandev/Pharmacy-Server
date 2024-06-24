export interface TUser {
  id: string;
  username: string;
  email: string;
  role: "admin" | "user";
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
}
