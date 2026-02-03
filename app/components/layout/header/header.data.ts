import { BRAND_DATA } from "~/data/brands.data";
import { CATEGOGY_DATA } from "~/data/categories.data";
import type { HeaderGroup } from "./header.type";

export const HeaderData: HeaderGroup[] = [
	{
		title: "Trang chủ",
		path: "/",
	},
	{
		title: "Sản phẩm",
		path: "/san-pham",
		categories: CATEGOGY_DATA.map((c) => ({
			name: c.title,
			path: `/san-pham/${c.slug}`,
		})),
		brands: BRAND_DATA.map((b) => ({
			name: b.name,
			path: `/thuong-hieu/${b.slug}`,
			image: b.image,
		})),
		popularSearches: [
			{ name: "Bàn phím Akko 3068", path: "/tim-kiem/akko-3068" },
			{ name: "Chuột Logitech G Pro X", path: "/tim-kiem/g-pro-x" },
			{ name: "Màn hình Dell UltraSharp", path: "/tim-kiem/dell-ultrasharp" },
			{ name: "Keycap PBT xuyên led", path: "/tim-kiem/keycap" },
			{ name: "Bàn di chuột cỡ XL", path: "/tim-kiem/pad-xl" },
		],
	},
	{
		title: "Hệ thống cửa hàng",
		path: "/he-thong-cua-hang",
	},
	{
		title: "Bài viết",
		path: "/bai-viet",
	},
	{
		title: "Liên hệ",
		path: "/lien-he",
	},
];
