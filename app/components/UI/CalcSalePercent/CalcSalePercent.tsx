import { calcSalePercent } from "~/utils/caltSaleProduct";
import type { SaleProductProps } from "./CalcSalePercent.type";
export default function CalcSalePercent({
	price,
	salePrice,
	bgColor = true,
}: SaleProductProps) {
	return (
		<div
			className={`mx-1 w-fit ${bgColor === true ? "bg-danger text-white  px-2 py-1" : "bg-none"} rounded-md`}
		>
			<p className="">-{calcSalePercent(price, salePrice)}%</p>
		</div>
	);
}
