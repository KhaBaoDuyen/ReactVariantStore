import { Link, useNavigate } from "react-router";

import { useEffect, useState } from "react";
import { EllipsisVertical } from 'lucide-react';

import { Product } from "~/types/product.type";
import { Category } from "~/types/categories.type";

//SERVICE
import { getProducts } from "~/service/product.service";
import { getCategory } from "~/service/category.service";

//UTILS
import { formatVND } from "~/utils/formatVND";
import { formatCompact } from "~/utils/formatCompact";

//COMPONENT
import { RowActions } from "~/components/UI/RowActions/RowActions";
import { Button } from "~/components/UI/ButtonIcon/buttonIcon";
import Loading from "~/components/UI/Loading/loading";

export default function ProductPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(false);
    const [activeCategory, setActiveCategory] = useState<number | null>(null);
    const navigate = useNavigate();

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const res = await getProducts();
            console.log("Fetched products:", res);
            setProducts(res);

        } catch (error) {
            console.log("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    }

    const fetchCategory = async () => {
        setLoading(false);
        try {
            const res = await getCategory();
            console.log("Fetched categoies =>", res)
            setCategories(res);
        } catch (error) {
            console.log("Error categories =>", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
        fetchCategory();
    }, []);

    //FILTER TABS CATEGORY
    const filterProductBYCategory = activeCategory == null ? products : products.filter(p => p.categoryId === activeCategory);
    return (
        <>
            <div className="">
                <span className="flex justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Quản lí sản phẩm
                    </h1>
                    <Link to="/admin/products/create"
                        className="p-2 bg-accent-600 text-white rounded-md shadow-md">Thêm sản phẩm</Link>
                </span>


                <div className="mt-10 ">
                    <div className="">
                        <div className="flex gap-2 w-12/12 overflow-x-auto overflow-y-hidden 
                        scrollbar-thin scrollbar-thumb-orange-500 custom-scroll-x py-2">
                            <button
                                onClick={() => setActiveCategory(null)}
                                className="
                            border border-orange-600
                            text-white
                            bg-orange-600/50
                            px-3 py-2 font-bold  whitespace-nowrap rounded-md
                            transition">
                                Tất cả
                            </button>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`border px-3 py-2 rounded-md font-bold whitespace-nowrap transition
                                             ${activeCategory === cat.id
                                            ? "bg-orange-600 text-white"
                                            : "text-orange-600 hover:bg-orange-600 hover:text-white"
                                        }`}>
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>


                    <div className="min-h-screen">
                        <div className="">
                            <table className="w-full border-separate border-spacing-y-3">
                                <thead className="sticky top-0 z-10 text-gray-700 shadow">
                                    <tr>
                                        <th className="py-3 px-4 text-left bg-gray-100 rounded-l-md">Id</th>
                                        <th colSpan={2} className="py-3 px-4 bg-gray-100 text-left">Tên sản phẩm</th>
                                        <th className="py-3 px-4 text-left bg-gray-100 ">Danh mục</th>
                                        <th className="py-3 px-4 text-left bg-gray-100 ">Thương hiệu</th>
                                        <th className="py-3 px-4 text-left bg-gray-100 ">Giá</th>
                                        <th className="py-3 px-4 text-left bg-gray-100 ">Tồn kho</th>
                                        <th className="py-3 px-4 text-left bg-gray-100 ">Trạng thái</th>
                                        <th className="py-3 px-4 text-left bg-gray-100  rounded-r-md"><EllipsisVertical /></th>
                                    </tr>
                                </thead>
                                {loading ? <Loading /> : (
                                    <tbody>
                                        {filterProductBYCategory.length === 0 ? (
                                            <tr>
                                                <td colSpan={9} className="text-center py-8 text-gray-400 bg-white rounded-md">
                                                    Không có sản phẩm
                                                </td>
                                            </tr>
                                        ) : (
                                            filterProductBYCategory.map((p, index) => (
                                                <tr key={index} className="shadow hover:scale-102">
                                                    <td className="py-3 px-4 bg-white rounded-l-md">{index + 1}</td>

                                                    <td className="py-3 px-4 bg-white">
                                                        <img
                                                            src={p.images[0]?.url}
                                                            alt={p.name}
                                                            className="w-12 h-12 object-cover rounded"
                                                        />
                                                    </td>

                                                    <td className="py-3 px-4 bg-white">{p.name}</td>
                                                    <td className="py-3 px-4 bg-white">{p.categoryId}</td>
                                                    <td className="py-3 px-4 bg-white">{p.brandId}</td>
                                                    <td className="py-3 px-4 bg-white">{formatVND(p.price)}</td>

                                                    <td className="py-3 px-4 bg-white">
                                                        {formatCompact(
                                                            p.variants?.reduce((s, v) => s + (v.stock ?? 0), 0) ?? 0
                                                        )}
                                                    </td>

                                                    <td className="py-3 px-4 bg-white">
                                                        {p.status ? "Hoạt động" : "Không hoạt động"}
                                                    </td>

                                                    <td className="py-3 px-4 bg-white rounded-r-md">
                                                        <RowActions
                                                            onEdit={() => navigate(`/admin/products/${p.slug}/edit`)}
                                                        />
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>

                                )}
                            </table>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}