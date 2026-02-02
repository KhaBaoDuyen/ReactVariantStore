import { index } from '@react-router/dev/routes';
import { PRODUCTS_DATA } from "~/data/products.data";

let products = structuredClone(PRODUCTS_DATA);

export async function getProducts() {
    try {
        return products;
    } catch (error) {
        console.log("Error products data:", error);
        throw new Error("Error getting products data");
    }
}

export async function productDetail(slug: string) {
    try {
       const product = await products.find( p=> p.slug === slug);

       if(!product){
        throw new Error("Product detail not found");
       }
       return product;
    } catch (error) {
        console.log("Product Edit error", error);
        throw new Error("Product Edit error server")
    }

}