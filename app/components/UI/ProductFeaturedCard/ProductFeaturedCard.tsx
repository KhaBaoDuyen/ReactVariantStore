import type { ProductFeaturedItem } from "./ProductFeaturedCard.type";
import { Link } from "react-router";

//UTILS
import { formatVND } from "~/utils/formatCurrency";
import { formatCompact } from "~/utils/formatNumber";

export const ProductFeaturedCard = ({
    name,
    image,
    price,
    priceReduced = 0,
    description,
    sold
}: ProductFeaturedItem) => {
    return (
        <>
            <Link
                to={`/san-pham/${name}`}
                className="group flex overflow-hidden bg-white/10 rounded-md  gap-1 hover:shadow-2xl shadow 
             transition">
                <div className="w-1/3">
                    <div className="overflow-hidden rounded-lg">
                        <img
                            src={image}
                            alt={`Sản phẩm nổi bật ${name}`}
                            className="
                                w-full h-[10rem] object-cover
                                transition-transform duration-300
                                group-hover:scale-150 group-hover:-rotate-12
                            "
                        />
                    </div>
                </div>


                <div className="w-2/3 flex flex-col justify-between p-2">
                    <div>
                        <h3 className="font-bold lg:text-xl text-md title-product line-clamp-2">
                            {name}
                        </h3>
                        <div className="flex items-center gap-2">
                            <span className="text-red font-bold text-lg">
                                {formatVND(price)}
                            </span>
                            {priceReduced > 0 && (
                                <span className="text-sm text-gray-500 line-through">
                                    {formatVND(priceReduced)}
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-muted line-clamp-2 mt-1">
                            {description}
                        </p>
                    </div>
                    <p className="text-xs text-right text-gray-500 mt-1">
                        Đã bán {formatCompact(sold)}
                    </p>
                </div>
            </Link>
        </>
    )
}