import LoginPage from "~/pages/auth/login/login";
import { Route } from "../../+types/root";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Đăng nhập" },
        { name: "description", content: "Đăng nhập vào tài khoản của bạn để trải nghiệm mua sắm tuyệt vời tại cửa hàng gaming của chúng tôi." },
    ];
}

export default function Login() {
    return <LoginPage />;
}