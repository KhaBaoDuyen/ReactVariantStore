import { useEffect, useState } from "react";
import logo from "../../../../public/assets/images/logo-dark.png";
import { ChevronDown } from "lucide-react";

//COMPOENTNS
import { Search } from "~/components/UI/Search";
import { Button } from "~/components/UI/ButtonIcon/buttonIcon";
import Loading from "~/components/UI/Loading/loading";
import QuantitySelector from "~/components/UI/QuantitySelector/QuantitySelector";
import VariantSelector from "~/components/UI/Variant/VariantSelector/VariantSelector";

// SERVICE 
import { getCart } from "~/service/cart.service";

export default function CartPage() {
    const [cart, setCart] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedId, setSelectedId] = useState<string[]>([]);
    const [variantSelectorOpen, setVariantSelectorOpen] = useState<string | null>(null);

    //HAM CHECK 
    const checkItem = (cartItemId: string) => {
        setSelectedId((prev) =>
            prev.includes(cartItemId)
                ? prev.filter((item) => item !== cartItemId)
                : [...prev, cartItemId]
        );
    };

    const checkAll = () => {
        if (selectedId.length === cart.length) {
            setSelectedId([]);
        } else {
            setSelectedId(cart.map((item) => item.cartItemId));
        }
    };

    const totalChecked = selectedId.length;

    //QuantitySelector check
    const updateQuantity = (id: string, type: "inc" | "dec") => {
        setCart((prev) =>
            prev.map((item) =>
                item.cartItemId === id
                    ? {
                        ...item,
                        quantity:
                            type === "inc"
                                ? item.quantity + 1
                                : Math.max(1, item.quantity - 1),
                    }
                    : item
            )
        );
    };

    // Props VAriantSelector
    const totalVariantOpen = async (cartItemId: string) => {
        setVariantSelectorOpen((prev) => (prev === cartItemId ? null : cartItemId));
    }




    // fech cart data
    const fetchCartData = async () => {
        setLoading(true);
        try {
            const data = await getCart();
            setCart(data.items);
        } catch (error) {
            setError("Lỗi khi tải dữ liệu giỏ hàng.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCartData();
    }, []);

    return (
        <div className="min-h-screen ">
            <div className="bg-white shadow-md sticky w-full top-0 z-10">
                <div className="lg:w-10/12 w-11/12 mx-auto py-4 md:py-6 
                  flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                    <div className="flex lg:w-7/12 items-center gap-3 text-accent-600">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-28 sm:w-32 md:w-36 lg:w-40 
                   drop-shadow-[0_6px_12px_rgba(0,0,0,0.25)]"
                        />
                        <span className="text-2xl">|</span>

                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold">
                            Giỏ Hàng Của Tôi
                        </h1>
                    </div>

                    <div className="w-full  md:w-auto">
                        <Search type="outline" width="w-full" showOnMobile={true} />
                    </div>

                </div>
            </div>

            {loading ? (
                <Loading text="Đang tải dữ liệu giỏ hàng" />
            ) : error ? (
                <p className="text-red-500 text-center my-10">{error}</p>
            ) : cart.length === 0 ? (
                <p className="text-center my-10">Giỏ hàng của bạn đang trống.</p>
            ) : (
                <>
                    <div className="gio-hang ">
                        <div className="hidden md:block lg:w-10/12 w-11/12 mx-auto my-8 shadow">
                            <table className="w-full border-collapse bg-white rounded-lg  ">
                                <thead className="bg-gray-50 text-gray-500 text-sm ">
                                    <tr className="">
                                        <th className="p-4 text-left" colSpan={2}>
                                            <input type="checkbox"
                                                checked={selectedId.length === cart.length && cart.length > 0}
                                                onChange={checkAll}
                                                className="mr-2 w-4 h-4 accent-orange-500 cursor-pointer" />
                                            Sản phẩm
                                        </th>
                                        <th className="p-4 text-center">Giá</th>
                                        <th className="p-4 text-center">Số lượng</th>
                                        <th className="p-4 text-center">Tổng cộng</th>
                                        <th className="p-4 text-center">Thao tác</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {cart.map((c, index) => (
                                        <tr key={c.cartItemId} className="border-t">
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedId.includes(c.cartItemId)}
                                                        onChange={() => checkItem(c.cartItemId)}
                                                        className="mr-2 w-4 h-4 accent-orange-500 cursor-pointer"
                                                    />

                                                    <img
                                                        src={c.image}
                                                        className="w-16 h-16 rounded object-cover"
                                                        alt={c.productName}
                                                    />
                                                    <p className="font-medium text-sm  line-clamp-2">
                                                        {c.productName}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="relative">
                                                <span className="">
                                                    <button className=" flex" onClick={() => totalVariantOpen(c.cartItemId)}>
                                                        <p className="font-medium text-sm"> Phân loại </p>
                                                        <ChevronDown className="text-gray-500" />
                                                    </button>

                                                    <p className="text-xs text-gray-500">
                                                        {c.selectedVariant.variantName}
                                                    </p>
                                                </span>
                                                {variantSelectorOpen === c.cartItemId && (
                                                    <div className="absolute -bottom-10 w-full"
                                                        onClick={() => setVariantSelectorOpen(null)}>
                                                        <div
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="">
                                                            <VariantSelector
                                                                variants={c.variants}
                                                                selectedVariantId={c.selectedVariant.variantId}
                                                                onSelect={(variant) => {
                                                                    setVariantSelectorOpen(null);
                                                                 }}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </td>
                                            <td className="p-4 text-center">
                                                {c.selectedVariant.price.toLocaleString()}đ
                                            </td>
                                            <td className="p-4 text-center">
                                                <QuantitySelector
                                                    value={c.quantity}
                                                    onIncrease={() => updateQuantity(c.cartItemId, "inc")}
                                                    onDecrease={() => updateQuantity(c.cartItemId, "dec")}
                                                />
                                            </td>
                                            <td className="p-4 text-center text-red-500 font-semibold">
                                                {(c.selectedVariant.price * c.quantity).toLocaleString()}đ
                                            </td>
                                            <td className="p-4 text-center">
                                                <button className="text-sm text-gray-500 hover:text-red-500">
                                                    Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>

                        <div className="block md:hidden bg-gray-100 p-2 space-y-3">
                            {cart.map((c) => (
                                <div key={c.cartItemId} className="bg-white rounded-xl p-3 shadow-sm">

                                    <div className="flex justify-center items-center gap-3">
                                        <input type="checkbox" className="mt-2 w-4 h-4 accent-orange-500 cursor-pointer" />

                                        <img
                                            src={c.image}
                                            className="w-20 h-20 rounded-lg object-cover"
                                            alt={c.productName}
                                        />

                                        <div className="flex-1">
                                            <p className="text-sm font-medium line-clamp-2 mb-1">
                                                {c.productName}
                                            </p>

                                            <p className="text-xs text-gray-500 mb-2">
                                                {c.selectedVariant.variantName}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <span className="text-red-500 font-semibold">
                                                    {(c.selectedVariant.price * c.quantity).toLocaleString()}đ
                                                </span>

                                                <div className="flex items-center border rounded">
                                                    <button className="w-7 h-7">-</button>
                                                    <span className="w-8 text-center">{c.quantity}</span>
                                                    <button className="w-7 h-7">+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </>
            )}

            <div className="bg-white lg:w-10/12  flex items-center justify-between mx-auto rounded shadow-[0_-4px_12px_rgba(0,0,0,0.08)] sticky bottom-0 z-10">
                <div className="p-4 text-left flex gap-3 lg:justify-center lg:items-center">
                    <input type="checkbox"
                        checked={selectedId.length === cart.length && cart.length > 0}
                        onChange={checkAll}
                        className="mr-2 w-4 h-4 accent-orange-500 cursor-pointer" />
                    <p>Tất cả </p>
                    <p className="hidden lg:block">({totalChecked})</p>
                    <button className="text-sm hidden lg:block text-gray-500 hover:text-red-500">
                        Xóa
                    </button>
                </div>

                <div className="p-4 text-right flex lg:items-center gap-4">
                    <span className="flex gap-3 lg:items-center items-start">
                        <p className="text-lg font-semibold lg:block hidden">Tổng tiền:</p>
                        <h1 className="text-accent-600 font-bold lg:text-2xl text-sm">1.471.000đ</h1>
                    </span>
                    < Button className="flex">
                        <p className="">Mua hàng</p>  <p className="block lg:hidden">({totalChecked})</p>
                    </Button>
                </div>
            </div>
        </div>
    )
};