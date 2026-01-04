import { Link } from "react-router";
import { useParams } from "react-router";

import { PRODUCTS_DATA } from "~/data/products.data";

export default function ProductDetailPage() {
    const { slug } = useParams();
    const productDetail = PRODUCTS_DATA[0];

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
                             <h1 className="line-clamp-2 text-3xl font-bold">{productDetail.name}</h1>
                             <p className=""></p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3"></div>
                </section>
                <aside className="col-span-2"></aside>
            </main>
        </div>
    )
}