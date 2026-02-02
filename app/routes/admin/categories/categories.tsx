 import { Route } from ".react-router/types/app/+types/root"
import CategoriesPage from "~/pages/admin/categories/categogy"

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Quản lí danh mục" },
        { name: " description", content: "Trang quản lý danh mục" }
    ]
}

export default function Categories() {
    return <CategoriesPage />
}