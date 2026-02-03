import CategopryEditPage from "~/pages/admin/categories/category.edit"
import { Route } from "./+types/category.edit"

export function meta({}: Route.MetaArgs){
    return[
        {title:"Sửa danh mục"},
        {name:" description", content: "Trang chỉnh sửa danh mục"}
    ]
}

export default function CategopryEdit(){
    return <CategopryEditPage/>
}