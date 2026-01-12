import RegisterPage from "~/pages/auth/resgister/resgister";
import { Route } from "../../+types/root";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Đăng ký" },
        { name: "description", content: "Tạo tài khoản mới để trải nghiệm mua sắm tuyệt vời tại cửa hàng gaming của chúng tôi." },
    ];
}

export default function Register() {
    return <RegisterPage />;
}