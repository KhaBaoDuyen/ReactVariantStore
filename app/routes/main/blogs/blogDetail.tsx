import type { Route } from "./+types/product";
import BlogDetailPage from "~/pages/main/blogs/blogDetail/blogDetail";

export function meta( {}: Route.MetaArgs){
    return[
        { title: "Bài viết " },
        { name: "description", content: "Khám phá các tin tức công nghệ tại Yejara!" },
    ];
}

export default function BlogDetail() {
    return <BlogDetailPage />;
}