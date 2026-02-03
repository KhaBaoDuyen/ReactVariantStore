import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

//TYPES + SERVICE
import type { Category } from "~/types/categories.type";
import { getCategory } from "~/service/category.service";
import Loading from "~/components/UI/Loading/loading";
import { RowActions } from "~/components/UI/RowActions/RowActions";
import { EllipsisVertical } from "lucide-react";


export default function CategoriesPage() {
    const [loading, setLoading] = useState(false);
    const [categories, setCategoires] = useState<Category[]>([]);
    const navigate = useNavigate();

    const fetchCategories = async () => {
        setLoading(false);
        try {
            const res = await getCategory();
            setCategoires(res);
        } catch (error) {
            return console.log("Error fetch categories =>", error);
        } finally {
            setLoading(true)
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="">
            <span className="flex justify-between">
                <h1 className="text-2xl font-bold text-accent-600">
                    Quản lí danh mục
                </h1>
                <Link to="/admin/categories/create"
                    className="p-2 bg-accent-600 text-white rounded-md shadow-md">Thêm danh mục</Link>
            </span>

            <div className="min-h-screen">
                <div className="">
                    <table className="w-full border-separate border-spacing-y-3">
                        {!loading ? <Loading /> : (
                            <>
                                <thead className="sticky top-0 z-10 text-gray-700 shadow">
                                    <tr>
                                        <th className="py-3 px-4 text-left bg-gray-100 rounded-l-md">Id</th>
                                        <th className="py-3 px-4 bg-gray-100 text-left">Ảnh</th>
                                        <th className="py-3 px-4 text-left bg-gray-100 ">Icon</th>
                                        <th className="py-3 px-4 text-left bg-gray-100 ">Danh mục</th>
                                        <th className="py-3 px-4 text-left bg-gray-100 ">Trạng thái</th>
                                        <th className="py-3 px-4 text-left bg-gray-100  rounded-r-md"><EllipsisVertical /></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {categories.length === 0 ? (
                                        <tr>
                                            <td colSpan={9} className="text-center py-8 text-gray-400 bg-white rounded-md">
                                                Không có danh mục
                                            </td>
                                        </tr>
                                    ) : (
                                        categories.map((c, index) => (
                                            <tr key={index} className="shadow hover:scale-102">
                                                <td className="py-3 px-4 bg-white rounded-l-md">{index + 1}</td>

                                                <td className="py-3 px-4 bg-white">
                                                    <img
                                                        src={c.image}
                                                        alt={c.name}
                                                        className="w-12 h-12 object-cover rounded"
                                                    />
                                                </td>
                                                <td className="py-3 px-4 bg-white">
                                                    <img
                                                        src={c.icon}
                                                        alt={c.name}
                                                        className="w-12 h-12 object-cover rounded"
                                                    />
                                                </td>

                                                <td className="py-3 px-4 bg-white">{c.name}</td>
                                                <td className="py-3 px-4 bg-white">
                                                    {c.status ? "Hoạt động" : "Không hoạt động"}
                                                </td>

                                                <td className="py-3 px-4 bg-white rounded-r-md">
                                                    <RowActions
                                                        onEdit={() => navigate(`/admin/categories/${c.slug}/edit`)}
                                                    />
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </>

                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}