import { Link } from "react-router";
import { useParams } from "react-router";
import { useState } from "react";
import { Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';


//UTILS
import { formatVND } from "~/utils/formatVND";

//DATA
import { PRODUCTS_DATA } from "~/data/products.data";
import { CATEGOGY_DATA } from "~/data/categories.data";

//COMPONENR
import { Button } from "~/components/UI/Button/button";
import { ContactGroup } from "~/components/UI/ButtonContact";
import { ProductCard } from "~/components/UI/ProductCard/productCard";
import { ImagesForcus } from "~/components/UI/ImagesForcus/ImagesForcus";


export default function ProductDetailPage() {
    const { slug } = useParams();
    const productDetail = PRODUCTS_DATA[1];
    const [activeImage, setActiveImage] = useState(
        productDetail.images?.[0] || productDetail.image
    );
    const [openDecription, setOpenDecription] = useState(false);
    const [activeType, setActiveType] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const maxQuantiry = 5;

    return (
        <div className="lg:w-10/12 w-11/12 mx-auto py-5">
            <span className="flex hidden lg:block justify-start font-bold items-center gap-2 mb-2">
                <Link to={"/"} className="text-accent-500 text-accent-600-hover">Trang chủ /</Link>
                <Link to={"/san-pham"} className="text-accent-500 text-accent-600-hover">Sản phẩm /</Link>
                <Link to={`/san-pham/${slug}`} className="text-muted text-accent-600-hover">{slug}</Link>
            </span>
            <main className="lg:grid lg:grid-cols-12 gap-3">
                <section className="col-span-9 flex flex-col gap-5 ">
                    <div className="lg:grid grid-cols-7 gap-5">
                        <div className="col-span-3  mt-2  overflow-x-auto custom-scroll-x">
                            <div className="flex-1 gap-3 border h-fit rounded-md overflow-hidden">
                                <img src={`/assets/images/products/${activeImage}`} alt={productDetail.name}
                                    className="w-full h-full object-contain" />
                            </div>
                            <div className="overflow-x-auto mt-3 flex gap-2 custom-scroll-x w-full">
                                {productDetail.images.map((img) => (
                                    <button
                                        key={img}
                                        onClick={() => setActiveImage(img)}
                                        className={`w-16 h-16 flex-shrink-0 border rounded-md p-1
                                        ${activeImage === img
                                                ? "border-primary-600"
                                                : "border-gray-300"
                                            }`} >
                                        <img
                                            src={`/assets/images/products/${img}`}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>


                        <div className="group-text col-span-4 ">
                            <span className=" border-b-2 border-gray-300 pb-4 flex flex-col gap-3 ">
                                <h1 className="line-clamp-2 text-3xl ">{productDetail.name}</h1>
                                <p className="bg-surface-300 rounded-md px-2 w-fit">Danh muc</p>
                                <div className="flex items-center lg:text-xl lg:gap-10 gap-3">
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
                            <span className=" border-b-2 border-gray-300 pb-4 py-2 flex flex-col gap-3">
                                <h1 className="font-bold text-muted">Chọn Sản Phẩm</h1>
                                <span className="grid grid-cols-4">
                                    <h1 className="text-secondary col-span-1">Loại</h1>
                                    <div
                                        className=" col-span-3 flex flex-wrap gap-2
                                                max-h-30 overflow-y-auto pr-1 custom-scroll " >
                                        {[
                                            "Bluetooth",
                                            "2.4GHz",
                                            "5.0GHz",
                                            "Dây",
                                            "3 Mode",
                                            "1 Mode",
                                            "Dual Mode",
                                            "Tri Mode",
                                        ].map((item) => {
                                            const isActive = activeType === item;

                                            return (
                                                <button
                                                    key={item}
                                                    onClick={() => setActiveType(item)}
                                                    className={` px-3 py-1 rounded-md text-sm transition border ${isActive
                                                        ? "bg-surface-300 border-yellow-600 text-white"
                                                        : "border-gray-300 text-primary-700 hover:border-primary-600 hover:text-primary-600"
                                                        }`}>
                                                    {item}
                                                </button>
                                            );
                                        })}
                                    </div>

                                </span>
                                <span className="grid grid-cols-4">
                                    <h1 className="text-secondary col-span-1">Số lượng</h1>
                                    <div className=" col-span-3 flex flex-wrap gap-2 pr-1  " >
                                        <span className="bg-white p-1 px-2 rounded-md flex justify-center items-center">
                                            <button className="w-8 h-8 flex justify-center items-center text-primary-700 
                                        rounded-md bg-gray-300"
                                                onClick={() => setQuantity((prev) => Math.min(maxQuantiry, prev - 1))}>
                                                <Minus />
                                            </button>
                                            <input type="number" value={quantity}
                                                min={1}
                                                max={maxQuantiry}
                                                className="  w-12 h-9 text-center outline-none appearance-none no-spinner "
                                                onChange={(e) => {
                                                    const value = Number(e.target.value);
                                                    if (value >= 1 && value <= maxQuantiry) {
                                                        setQuantity(value);
                                                    }
                                                }} />
                                            <button className="w-8 h-8 flex justify-center items-center text-primary-700 
                                        rounded-md bg-surface-300"
                                                onClick={() => setQuantity((prev) => Math.min(maxQuantiry, prev + 1))}>
                                                <Plus />
                                            </button>
                                        </span>
                                    </div>
                                </span>

                            </span>
                            <div className="my-5 bg-white shadow p-5 rounded-md ">
                                <p className="text-muted lg:text-md text-sm text-justify">Nếu quý khách có bất kỳ thắc mắc nào về sản phẩm, vui lòng liên hệ qua
                                    email để được hỗ trợ và tư vấn chi tiết trong thời gian sớm nhất.</p>

                                <span className="flex lg:flex-row flex-col lg:gap-5 gap-2 mt-2">
                                    <Button variant="outline" > Thêm Giỏ Hàng</Button>
                                    <Button > Mua hàng</Button>
                                </span>

                            </div>

                        </div>


                    </div>

                    <div className="shadow-xl bg-white p-4 rounded-lg">
                        <h1 className="text-2xl font-bold">Lưu Ý Sản Phẩm</h1>
                        <hr className="h-[2px] border-none bg-gradient-to-r from-[#1E2746] to-transparent blur-[0.2px] my-3" />
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li> Sản phẩm có thể có sai lệch nhỏ về màu sắc do ánh sáng và màn hình hiển thị. </li>
                            <li> Vui lòng kiểm tra kỹ thông tin sản phẩm trước khi đặt hàng để tránh nhầm lẫn.</li>
                            <li> Không tự ý tháo rời hoặc sửa chữa sản phẩm để đảm bảo quyền lợi bảo hành.</li>
                            <li> Giữ lại hóa đơn và bao bì sản phẩm để được hỗ trợ đổi trả khi cần thiết.</li>
                        </ul>
                    </div>

                    <div className="shadow-xl bg-white p-4 rounded-lg">
                        <h1 className="text-2xl font-bold">Mô tả Sản Phẩm</h1>
                        <hr className="h-[2px] border-none bg-gradient-to-r from-[#1E2746] to-transparent blur-[0.2px] my-3" />
                        <span className="flex flex-col justify-center items-center">
                            <div
                                className={` 
                                relative  overflow-hidden transition-all duration-300
                                ${openDecription ? "max-h-fit" : "max-h-60"}
                            `}
                            >
                                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                    {productDetail.description}
                                </p>

                                {!openDecription && (
                                    <div className="absolute bottom-0 left-0 w-full h-16
                            bg-gradient-to-t from-white to-transparent" />
                                )}
                            </div>

                            <button
                                onClick={() => setOpenDecription(!openDecription)}
                                className="mt-2 w-fit flex text-accent-600 font-bold justify-center items-center text-center text-primary-600 font-medium hover:underline"
                            >
                                {openDecription ? (
                                    <>
                                        <p>Thu gọn</p> <ChevronUp />
                                    </>
                                ) : (
                                    <>
                                        <p>Xem thêm</p> <ChevronDown />
                                    </>
                                )}
                            </button>
                        </span>


                    </div>

                </section>
                <aside className="col-span-3 hidden lg:block">
                    <ul className="bg-white rounded-xl w-full shadow-xl p-2">
                        <li className="flex gap-2 justify-start py-2 items-center">
                            <img src="/assets/images/Icon/baphanh.png" alt="" className="w-8 h-8" />
                            <p className="text-muted font-bold">Bảo hàng chính hãng</p>
                        </li>
                        <li className="flex gap-2 justify-start py-2 items-center">
                            <img src="/assets/images/Icon/chinhhang.png" alt="" className="w-8 h-8" />
                            <p className="text-muted font-bold">Sản phẩm chính hãng</p>
                        </li>
                        <li className="flex gap-2 justify-start py-2 items-center">
                            <img src="/assets/images/Icon/nangcap.png" alt="" className="w-8 h-8" />
                            <p className="text-muted font-bold">Cập nhật sản phẩm</p>
                        </li>
                        <li className="flex gap-2 justify-start py-2 items-center">
                            <img src="/assets/images/Icon/hotro.png" alt="" className="w-8 h-8" />
                            <p className="text-muted font-bold">Hỗ trợ 24/7</p>
                        </li>
                        <li className="flex gap-2 justify-start py-2 items-center">
                            <img src="/assets/images/Icon/thanhtoan.png" alt="" className="w-8 h-8" />
                            <p className="text-muted font-bold">Thanh toán an toàn</p>
                        </li>
                    </ul>
                    <div className="col-span-1 mt-5 hidden lg:block sticky top-10">
                        <div className="sticky top-40 border-2 bg-white rounded-xl p-5 shadow-xl h-fit">
                            <h1 className="text-xl font-bold ">Danh Mục Sản Phẩm</h1>
                            <hr className="h-[2px] border-none bg-gradient-to-r from-[#1E2746] to-transparent blur-[0.2px] my-3" />
                            {CATEGOGY_DATA.map((item, i) => {
                                const isLast = i === CATEGOGY_DATA.length - 1;
                                return (
                                    <>
                                        <Link to={item.slug}>
                                            <p className="py-2 font-bold text-lg text-accent-600-hover">{item.title}</p>
                                            {!isLast && (
                                                <hr className="h-[1.4px] border-none bg-gradient-to-r from-[#1e274642] to-transparent blur-[0.2px]" />
                                            )}
                                        </Link>
                                    </>
                                )

                            })}
                        </div>

                        <div className="p-5 h-fit">
                            <ContactGroup />
                        </div>
                    </div>

                </aside>
            </main>
            <div className="  mt-5">
                <h1 className="text-2xl font-bold ">Sản Phẩm Liên Quan</h1>
                <hr className="h-[2px] border-none bg-gradient-to-r from-[#1E2746] to-transparent blur-[0.2px] my-3" />
                <div className="flex gap-2 py-5 overflow-x-auto scroll-x-hidden custom-scroll-x">
                    {PRODUCTS_DATA.map((p, index) => (
                        <ProductCard key={index}
                            name={p.name}
                            image={p.image}
                            price={p.price}
                            salePrice={p.salePrice}
                            rating={p.rating}
                            sold={p.sold}
                            slug={p.slug}
                        />
                    ))}
                </div>

            </div>

        </div>
    )
}