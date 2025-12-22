import { Link } from "react-router";
import { Menu, X, ShoppingCart, User, ChevronDown, ChevronUp, Check } from "lucide-react";
import { useState } from "react";

import logo from "/assets/images/logo-light.png";

import { HeaderData } from "./header.data";

//COMPONENT
import { LanguageSelect } from "~/components/UI/LanguageSelect";
import { Search } from "~/components/UI/Search";
import { MainDropdown } from "~/components/UI/MainDropdown/MainDropdown";
import { MobileMenuItem } from "~/components/UI/Mobile/MobileMenuItem/MobileMenuItem";


export const Header = () => {
    const cartCount = 3;
    const [openMenu, setOpenMenu] = useState(false);
    // State để theo dõi menu con nào đang mở trên mobile 
    const [expandedItem, setExpandedItem] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    return (
        <>
            <div className="bg-accent-600 hidden lg:block">
                <ul className="flex items-center justify-between gap-6 px-6 py-3">
                    <li className="flex items-center text-sm text-white">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full border border-white mr-2">
                            <Check size={12} />
                        </span>
                        <span className="leading-none">
                            Tư vấn chuẩn, chọn đúng gear
                        </span>
                    </li>

                    <li className="flex items-center text-sm text-white">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full border border-white mr-2">
                            <Check size={12} />
                        </span>
                        <span className="leading-none">
                            Bảo hành gọn, xử lý nhanh
                        </span>
                    </li>

                    <li className="flex items-center text-sm text-white">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full border border-white mr-2">
                            <Check size={12} />
                        </span>
                        <span className="leading-none">
                            Giao nhanh 0–3 ngày
                        </span>
                    </li>

                    <li className="flex items-center text-sm text-white">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full border border-white mr-2">
                            <Check size={12} />
                        </span>
                        <span className="leading-none">
                            Miễn phí ship từ 1 triệu
                        </span>
                    </li>

                    <li className="flex items-center text-sm text-white">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full border border-white mr-2">
                            <Check size={12} />
                        </span>
                        <span className="leading-none">
                            Trả góp 0%
                        </span>
                    </li>
                </ul>
            </div>

            <header className=" bg-primary-500 text-white">
                <div className="mx-auto flex w-11/12 lg:w-10/12 items-center justify-between py-3">
                    <div className="flex lg:hidden rounded-md bg-surface-100 items-center">
                        <button
                            className="text-primary p-1"
                            onClick={() => setOpenMenu(!openMenu)}>
                            {openMenu ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>

                    <Link to="/" className="lg:w-2/12 w-4/12">
                        <img src={logo} alt="logo" className="" />
                    </Link>

                    <Search />

                    <div className="flex items-center gap-4">
                        <LanguageSelect />
                        <button className="relative hidden sm:flex items-center gap-1 hover:text-red-400">
                            <ShoppingCart size={20} />
                            <span className="hidden lg:inline">Giỏ hàng</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-3 h-5 w-5 rounded-full bg-red-600 text-xs flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button className="hidden lg:flex items-center gap-1 hover:text-red-400">
                            <User size={20} />
                            <span>Đăng nhập</span>
                        </button>
                    </div>
                </div>

                <nav className="hidden lg:flex mx-auto border-t border-white/20 py-3">
                    <div className="flex w-11/12 lg:w-10/12 mx-auto">
                        {HeaderData.map((group, index) => (
                            <MainDropdown
                                title={group.title}
                                path={group.path}
                                categories={group.categories}
                                brands={group.brands}
                                popularSearches={group.popularSearches}
                            />
                        ))}
                    </div>
                </nav>

                {openMenu && (
                    <div className="lg:hidden border-t border-white/20 bg-primary-500 animate-in slide-in-from-top duration-300">
                        {HeaderData.map((group, index) => (
                            <MobileMenuItem
                                key={index}
                                title={group.title}
                                path={group.path}
                                items={group.categories}
                                onCloseMenu={() => setOpenMenu(false)}
                            />
                        ))}
                        <Link to="/cart" className="flex items-center gap-2 px-5 py-3 border-b border-white/10 hover:bg-white/5">
                            Giỏ hàng ({cartCount})
                        </Link>
                        <Link to="/login" className="flex items-center gap-2 px-5 py-3 border-b border-white/10 hover:bg-white/5">
                            Đăng nhập/ Đăng ký
                        </Link>
                    </div>
                )}
            </header>
        </>
    );
}