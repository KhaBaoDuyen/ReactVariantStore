import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	// ===== CLIENT LAYOUT =====
	route("/", "layouts/ClientLayout.tsx", [
		index("routes/main/home.tsx"),
		route("san-pham", "routes/main/products/product.tsx"),
		route("san-pham/:slug", "routes/main/products/productDetail.tsx"),
		route("bai-viet", "routes/main/blogs/blog.tsx"),
		route("bai-viet/:slug", "routes/main/blogs/blogDetail.tsx"),
		route("he-thong-cua-hang", "routes/main/storeMap.tsx"),
		route("lien-he", "routes/main/contact.tsx"),
		route("gio-hang-cua-toi", "routes/main/carts/cart.tsx"),
		route("buyer/auth", "routes/auth/auth.tsx"),
	]),

	// ===== ADMIN LAYOUT =====
	route("/admin", "layouts/AdminLayout.tsx", [
		index("routes/admin/dashboard.tsx"),

		route("products", "routes/admin/products/product.list.tsx"),
		route("products/create", "routes/admin/products/product.create.tsx"),
		route("products/:slug/edit", "routes/admin/products/product.edit.tsx"),

		route("/admin/categories", "routes/admin/categories/category.list.tsx"),
		route(
			"/admin/categories/create",
			"routes/admin/categories/category.create.tsx",
		),
		route(
			"/admin/categories/:slug/edit",
			"routes/admin/categories/category.edit.tsx",
		),

		// route("/admin/blogs", "routes/admin/blogs/blogs.tsx"),
		// route("/admin/blogs/create", "routes/admin/blogs/blogCreate.tsx"),
		// route("/admin/blogs/:slug/edit", "routes/admin/blogs/blogEdit.tsx"),

		// route("/admin/orders", "routes/admin/orders/orders.tsx"),
		// route("/admin/orders/:slug/edit", "routes/admin/orders/orderDetail.tsx"),

		// route("/admin/users", "routes/admin/users/users.tsx"),
		// route("/admin/users/create", "routes/admin/users/usersCreate.tsx"),
		// route("/admin/users/:slug/edit", "routes/admin/users/usersEdit.tsx"),

		// route("/admin/brands", "routes/admin/brands/brands.tsx"),
		// route("/admin/brands/create", "routes/admin/brands/brandCreate.tsx"),
		// route("/admin/brands/:slug/edit", "routes/admin/brands/brandEdit.tsx"),

		// route("/admin/stores", "routes/admin/storeLocators/storeLocators.tsx"),
		// route("/admin/stores/create", "routes/admin/storeLocators/storeLocatorCreate.tsx"),
		// route("/admin/stores/:slug/edit", "routes/admin/storeLocators/storeLocatorEdit.tsx"),
	]),
] satisfies RouteConfig;
