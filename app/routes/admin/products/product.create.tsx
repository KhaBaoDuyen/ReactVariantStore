import ProductCreatePage from "~/pages/admin/products/product.create";
import { Route } from "./+types/productCreate";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Thêm sản phẩm" },
        { name: "description", content: "Trang thêm sản phẩm của cửa hàng" }
    ]
}

export default function ProductCreate() {
    return < ProductCreatePage />
}