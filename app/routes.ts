import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/san-pham", "routes/product.tsx"),
  route("/san-pham/:slug", "routes/productDetail.tsx"),
  route("/bai-viet", "routes/blog.tsx"),
  route("/bai-viet/:slug", "routes/blogDetail.tsx"),
  route("/he-thong-cua-hang", "routes/storeMap.tsx"),
  route("/lien-he", "routes/contact.tsx"),
  route("/gio-hang-cua-toi", "routes/cart/cart.tsx"),
  route("/dang-nhap", "routes/auth/login.tsx"),
  route("/dang-ky", "routes/auth/resgister.tsx"),
] satisfies RouteConfig;
