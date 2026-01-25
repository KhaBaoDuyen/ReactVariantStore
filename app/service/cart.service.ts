import { DATA_CART } from "~/data/cart.data";

const cart = structuredClone(DATA_CART);

export async function getCart() {
	try {
		return cart;
	} catch (error) {
		console.log("Error cart data:", error);
		throw new Error("Error getting cart data");
	}
}
