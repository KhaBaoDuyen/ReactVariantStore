import ProductEditPage from "~/pages/admin/products/product.edit";
import type { Route } from ".react-router/types/app/+types/root";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: " Chỉnh sửa sản phẩm" },
		{ name: "description", content: "Trang chỉnh sửa sản phẩm của cửa hàng" },
	];
}

export default function ProductCreate() {
	return <ProductEditPage />;
}
