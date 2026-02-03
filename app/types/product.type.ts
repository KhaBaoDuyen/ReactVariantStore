import type { Images } from "~/types/images.type";
import type { Brand } from "./brands.type";
import type { Category } from "./categories.type";
import type { Variant } from "./variant.type";

export type Product = {
	id: string;
	name: string;
	slug: string;
	description: string;
	price: number;
	salePrice?: number;
	brandId: number;
	brand: Brand;
	categoryId: number;
	category: Category;
	images: Images[];
	sold?: number;
	rating?: number;
	status?: boolean;
	variants?: Variant[];
};
