export type Product = {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    oldPrice?: number;
    brandId: string;
    categoryId: string;
    images: string[];
    sold:number;
    rating?:number;
    status?: boolean;
    variants?:string[];
};