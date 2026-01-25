import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/main/home.tsx"),
	route("/san-pham", "routes/main/products/product.tsx"),
	route("/san-pham/:slug", "routes/main/products/productDetail.tsx"),
	route("/bai-viet", "routes/main/blogs/blog.tsx"),
	route("/bai-viet/:slug", "routes/main/blogs/blogDetail.tsx"),
	route("/he-thong-cua-hang", "routes/main/storeMap.tsx"),
	route("/lien-he", "routes/main/contact.tsx"),
	route("/gio-hang-cua-toi", "routes/main/carts/cart.tsx"),
	route("/dang-nhap", "routes/auth/login.tsx"),
	route("/dang-ky", "routes/auth/resgister.tsx"),
] satisfies RouteConfig;
