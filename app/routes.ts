import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/san-pham", "routes/product.tsx"),
  route("/bai-viet", "routes/blog.tsx"),
] satisfies RouteConfig;
