 import CategoryCreatePage from "~/pages/admin/categories/category.create";
import { Route } from "./+types/category.create";

export function meta({}: Route.MetaArgs){
    return[
        {title:"Thêm danh mục"},
        {name: "description"}
    ]
}

export default function CategoryCreate(){
    return <CategoryCreatePage/>
}