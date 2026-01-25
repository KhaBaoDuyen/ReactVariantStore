import ProductDetailPage from "~/pages/main/products/productDetail/productDetail";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Sản phẩmm chi tiết" },
		{ name: "description", content: "Xem chi tiết sản phẩm" },
	];
}

export default function ProductDetail() {
	return <ProductDetailPage />;
}
