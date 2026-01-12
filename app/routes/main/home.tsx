import HomePage from "~/pages/main/home/home";
import { Route } from "../../+types/root";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Trang chủ" },
		{ name: "description", content: "Chào mừng đến với cửa hàng thiết bị gaming!" },
	];
}

export default function Home() {
	return <HomePage />;
}
