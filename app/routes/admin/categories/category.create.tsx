import CategoriesPage from "~/pages/admin/categories/category.list";
import { Route } from "./+types/category.create";

export function meta({}: Route.MetaArgs){
    return[
        {title:"Thêm danh mục"},
        {name: "description"}
    ]
}

export default function Categories(){
    return <CategoriesPage/>
}