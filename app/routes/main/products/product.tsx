import type { Route } from "./+types/product";
import ProductPage from "~/pages/main/products/product/product";

export function meta( {}: Route.MetaArgs){
    return[
        { title: "Sản phẩm" },
        { name: "description", content: "Khám phá các thiết bị gaming chất lượng cao tại cửa hàng Yejara!" },
    ];
}

export default function Products() {
    return <ProductPage />;
}