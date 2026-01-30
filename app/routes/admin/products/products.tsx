import ProductPage from "~/pages/admin/products/product";
import { Route } from ".react-router/types/app/+types/root";

export function meta({}: Route.MetaArgs){
   return [
       {title: "Quản lí sản phẩm"},
       {name: "description", content: "Trang quản lí sản phẩm của cửa hàng."}
   ]
}

export default function Products() {
    return <ProductPage />;
}