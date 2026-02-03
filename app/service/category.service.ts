import { CATEGOGY_DATA } from "~/data/categories.data";

const cat = structuredClone(CATEGOGY_DATA);

export async function getCategory() {
	try {
		return cat;
	} catch (error) {
		console.log("Error getCategory", error);
		throw new Error(" Error getCategory");
	}
}
