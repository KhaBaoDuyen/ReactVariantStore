import { Link } from "react-router";
import { useEffect, useState } from "react";
import { EllipsisVertical } from 'lucide-react';

import { getProducts } from "~/service/product.service";
import { Product } from "~/types/product.type";

//UTILS
import { formatVND } from "~/utils/formatVND";
import { formatCompact } from "~/utils/formatCompact";

//COMPONENT
import { RowActions } from "~/components/UI/RowActions/RowActions";

export default function ProductPage() {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {
        try {
            const res = await getProducts();
            console.log("Fetched products:", res);
            setProducts(res);
        } catch (error) {
            console.log("Error fetching products:", error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className="">
                <span className="flex justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Quản lí sản phẩm
                    </h1>
                    <Link to="/admin/productCreate"
                        className="p-2 bg-accent-600 text-white rounded-md shadow-md">Thêm sản phẩm</Link>
                </span>


                <div className="mt-10 ">
                    <div className="">
                        
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

                                <tbody className="">
                                    {products.map((p, index) => {
                                        return (
                                            <tr key={index} className=" border-1 shadow hover:scale-102">
                                                <td className="py-3 px-4 bg-white rounded-l-md"> {index + 1}</td>
                                                <td className="py-3 px-4 bg-white ">
                                                    <img
                                                        src={p.images[0]}
                                                        alt={p.name}
                                                        className="w-12 h-12 object-cover rounded"
                                                    />
                                                </td>
                                                <td className="py-3 px-4 bg-white">{p.name}</td>
                                                <td className="py-3 px-4 bg-white">{p.categoryId}</td>
                                                <td className="py-3 px-4 bg-white">{p.brandId}</td>
                                                <td className="py-3 px-4 bg-white">{formatVND(p.price)}</td>
                                                <td className="py-3 px-4 bg-white">{formatCompact(p.sold)}</td>
                                                <td className="py-3 px-4 bg-white">{p.status ? "Hoạt động" : "Không hoạt động"}</td>
                                                <td className="py-3 px-4 bg-white  rounded-r-md">
                                                    <RowActions/>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}