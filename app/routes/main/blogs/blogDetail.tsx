import BlogDetailPage from "~/pages/main/blogs/blogDetail/blogDetail";
import type { Route } from "./+types/product";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Bài viết " },
		{
			name: "description",
			content: "Khám phá các tin tức công nghệ tại Yejara!",
		},
	];
}

export default function BlogDetail() {
	return <BlogDetailPage />;
}
