import BlogPage from "~/pages/main/blogs/blog/blog";
import type { Route } from "./+types/product";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Bài viết" },
		{
			name: "description",
			content: "Khám phá các tin tức công nghệ tại Yejara!",
		},
	];
}

export default function Blogs() {
	return <BlogPage />;
}
