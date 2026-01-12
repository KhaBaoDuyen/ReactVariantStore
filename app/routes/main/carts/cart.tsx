import CartPage from "~/pages/main/cart/cart";
import { Route } from "../../../+types/root";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Giỏ hàng" },
        { name: "description", content: "Xem và quản lý các sản phẩm trong giỏ hàng của bạn." },
    ];
}

export default function Cart() {
    return <CartPage />;
}