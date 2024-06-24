export interface TUser {
  id: string;
  email: string;
  role: "admin" | "user";
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
}
