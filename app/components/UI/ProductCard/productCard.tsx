import { Link } from "react-router";
import { productProp } from "./productCard.type";
import { formatCompact } from "~/utils/formatCompact";
import { formatVND } from "~/utils/formatVND";

import { StarRating } from "../StarRating/StarRating";

export const ProductCard = ({
    name,
    slug,
    image,
    price,
    salePrice,
    rating = 0,
    sold = 5
}: productProp) => {
    return (
        <>
            <Link to={slug} className=" shadow-md border-1 border-gray-100 rounded-md group hover:shadow-2xl overflow-hidden">
                <div className="w-full lg:h-[12rem] h-[10rem] overflow-hidden rounded-2xl">
                    <img src={`/assets/images/products/${image}`} alt={`Ảnh sản phẩm ${image}`}
                        className="w-full group-hover:scale-125 transition-transform duration-500
                        ease-out" />
                </div>
                <div className="flex flex-col gap-1 p-3 group-hover:bg-blue-950 transition-colors duration-300 ease-in-out">
                    <h1 className="line-clamp-2 group-hover:text-white transition-colors duration-300 ease-in-out">{name}</h1>
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
                    <span className="flex justify-between items-center">
                        <StarRating value={rating} />
                        <div className="flex gap-1 lg:text-[12px] text-[10px]">
                            <p className="text-muted uppercase"> ĐÃ BÁN</p>
                            <p className="text-muted">{formatCompact(sold)}</p>
                        </div>
                    </span>
                </div>
            </Link>
        </>
    )
}