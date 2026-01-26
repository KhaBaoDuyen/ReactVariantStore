import AuthPage from "~/pages/auth/auth";
import { Route } from "../../+types/root";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Tài khoản" },
        { name: "description", content: "TRang tài khoản người dùng" },
    ];
}

export default function Auth() {
    return <AuthPage />;
}