import { BRAND_DATA } from "~/data/brands.data";

const brand = structuredClone(BRAND_DATA);

export async function getBrand() {
	try {
		return brand;
	} catch (error) {
		console.log("Error get Brand =>", error);
		throw new Error("Error getting brand data");
	}
}
