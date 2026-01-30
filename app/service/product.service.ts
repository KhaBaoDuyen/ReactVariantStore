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