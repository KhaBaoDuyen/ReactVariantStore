import ProductEditPage from "~/pages/admin/products/product.edit";
import { Route } from "./+types/productCreate";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: " Chỉnh sửa sản phẩm" },
        { name: "description", content: "Trang chỉnh sửa sản phẩm của cửa hàng" }
    ]
}

export default function ProductCreate() {
    return < ProductEditPage />
}