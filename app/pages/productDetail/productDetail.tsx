import { Link } from "react-router";
import { useParams } from "react-router";

//UTILS
import { formatVND } from "~/utils/formatVND";

//DATA
import { PRODUCTS_DATA } from "~/data/products.data";


export default function ProductDetailPage() {
    const { slug } = useParams();
    const productDetail = PRODUCTS_DATA[1];

    return (
        <div className="lg:w-10/12 w-11/12 mx-auto py-5">
            <span className="flex justify-start font-bold items-center gap-2">
                <Link to={"/"} className="text-accent-500 text-accent-600-hover">Trang chủ /</Link>
                <Link to={"/san-pham"} className="text-accent-500 text-accent-600-hover">Sản phẩm /</Link>
                <Link to={`/san-pham/${slug}`} className="text-muted text-accent-600-hover">{slug}</Link>
            </span>
            <main className="grid grid-cols-9">
                <section className="col-span-7 border-2 border-red-600">
                    <div className="grid grid-cols-7 gap-5">
                        <div className="col-span-3">
                            <img src={`/assets/images/products/${productDetail.image}`} alt="" className="w-full h-full" />
                        </div>
                        <div className="group-text col-span-4 ">
                            <span className="block border-b-2 border-gray-300 pb-4">
                                <h1 className="line-clamp-2 text-3xl ">{productDetail.name}</h1>
                                <p className="bg-surface-300 rounded-md px-2 w-fit">Danh muc</p>
                                <div className="flex items-center lg:text-xl gap-10">
                                    {productDetail.salePrice ? (
                                        <>
                                            <span className="text-primary-600 text-2xl font-bold">
                                                {formatVND(productDetail.salePrice)}
                                            </span>

                                            <span className="text-muted line-through">
                                                {formatVND(productDetail.price)}
                                            </span>

                                            <span className="bg-danger text-white text-sm px-2 py-1 rounded">
                                                -{Math.round(
                                                    ((productDetail.price - productDetail.salePrice) /
                                                        productDetail.price) *
                                                    100
                                                )}%
                                            </span>
                                        </>
                                    ) : (
                                        <span className="text-primary-600 text-2xl font-bold">
                                            {formatVND(productDetail.price)}
                                        </span>
                                    )}
                                </div>  
                                
                            </span>
                           

                        </div>
                    </div>
                    <div className="grid grid-cols-3"></div>
                </section>
                <aside className="col-span-2"></aside>
            </main>
        </div>
    )
}