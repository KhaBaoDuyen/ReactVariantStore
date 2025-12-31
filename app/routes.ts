import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/san-pham", "routes/product.tsx"),
] satisfies RouteConfig;
