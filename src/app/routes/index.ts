import { Router } from "express";
import { userRoutes } from "../modules/user/user.routes";
import { categoryRoutes } from "../modules/category/category.routes";
import { productRoutes } from "../modules/product/product.routes";
import { reviewRoutes } from "../modules/review/review.routes";
import { salesRoutes } from "../modules/sales/sales.routes";
import { metaDataRoutes } from "../modules/metaData/metaData.routes";

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
  {
    path: "/review",
    route: reviewRoutes,
  },
  {
    path: "/sales",
    route: salesRoutes,
  },
  {
    path: "/meta-data",
    route: metaDataRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
