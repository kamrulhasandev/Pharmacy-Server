import { Router } from "express";
import { userRoutes } from "../modules/user/user.routes";
import { categoryRoutes } from "../modules/category/category.routes";
import { productRoutes } from "../modules/product/product.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/category",
    route: categoryRoutes,
  },
  {
    path: "/product",
    route: productRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
