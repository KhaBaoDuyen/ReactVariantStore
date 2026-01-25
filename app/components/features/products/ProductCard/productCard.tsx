import { Link } from "react-router";
import { formatCompact } from "~/utils/formatCompact";
import { formatVND } from "~/utils/formatVND";
import type { productProp } from "./productCard.type";

import { StarRating } from "~/components/UI/StarRating/StarRating";

export const ProductCard = ({
	name,
	slug,
	image,
	price,
	salePrice,
	rating = 0,
	sold = 5,
}: productProp) => {
	const hasSale = salePrice && salePrice < price;

	const discountPercent = hasSale
		? Math.round(((price - salePrice!) / price) * 100)
		: 0;

	return (
		<>
			<Link
				to={slug}
				className="relative flex-shrink-0 w-[210px] bg-white shadow-md border-1 h-fit border-gray-100 rounded-xl group hover:shadow-2xl overflow-hidden"
			>
				{salePrice && (
					<div className="absolute right-0 m-1 px-3 w-fit text-sm text-white p-1 bg-danger rounded-md">
						<p className="">{discountPercent}%</p>
					</div>
				)}

				<div className="w-full lg:h-[12rem] h-[9rem] overflow-hidden rounded-2xl">
					<img
						src={`/assets/images/products/${image}`}
						alt={`Ảnh sản phẩm ${image}`}
						className="w-full group-hover:scale-125 transition-transform duration-500
                        ease-out"
					/>
				</div>
				<div className="flex flex-col gap-1 p-3 group-hover:bg-blue-950 transition-colors duration-300 ease-in-out">
					<h1 className="line-clamp-2 group-hover:text-white transition-colors duration-300 ease-in-out">
						{name}
					</h1>
					<span className="lg:flex justify-between items-center">
						{salePrice ? (
							<>
								<p className="text-accent-700 font-semibold">
									{formatVND(salePrice)}
								</p>
								<p className="text-muted line-through text-sm">
									{formatVND(price)}
								</p>
							</>
						) : (
							<p className="text-accent-700 font-semibold">
								{formatVND(price)}
							</p>
						)}
					</span>
					<span className="lg:flex px-1 justify-between items-center">
						<StarRating value={rating} />
						<div className="flex gap-1 lg:text-[12px] text-[10px]">
							<p className="text-muted uppercase"> ĐÃ BÁN</p>
							<p className="text-muted">{formatCompact(sold)}</p>
						</div>
					</span>
				</div>
			</Link>
		</>
	);
};
