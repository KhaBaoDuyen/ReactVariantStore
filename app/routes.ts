import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/san-pham", "routes/product.tsx"),
  route("/san-pham/:slug", "routes/productDetail.tsx"),
  route("/bai-viet", "routes/blog.tsx"),
  route("/bai-viet/:slug", "routes/blogDetail.tsx"),
  route("/he-thong-cua-hang", "routes/storeMap.tsx"),
] satisfies RouteConfig;
