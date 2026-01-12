import { Link, useParams, useSearchParams } from "react-router";
import { BLOG_DATA } from "~/data/blogs.data";
//DATA
import { CATEGOGY_DATA } from "~/data/categories.data";
import { formatDate } from "~/utils/formatDate";

export default function BlogDetailPage() {
    const { slugParam } = useParams();
    const blogDetail = BLOG_DATA[0];
    return (
        <div className="grid grid-cols-12 gap-5 lg:w-10/12 w-11/12 mx-auto py-5">
            <article className="col-span-9">
                <span className="flex hidden lg:block justify-start font-bold items-center gap-2 mb-2">
                    <Link to={"/"} className="text-accent-500 text-accent-600-hover">Trang chủ /</Link>
                    <Link to={"/bai-viet"} className="text-accent-500 text-accent-600-hover">Bài viết /</Link>
                    <Link to={`/san-pham/${slugParam}`} className="text-muted text-accent-600-hover">{blogDetail.title}</Link>
                </span>

                <h1 className="text-4xl font-bold">{blogDetail.title}</h1>
                <hr className="h-[5px] border-none bg-gray-300 w-20 blur-[0.2px] my-3" />
                <span className="  flex text-muted gap-1">
                    <p>Đăng ngày {formatDate(blogDetail.createdAt)}</p>
                    <p>bởi</p>
                    <p className="text-accent-600">{blogDetail.author?.name}</p>
                </span>

                <div className="bg-white rounded-xl p-5 mt-3 shadow-xl">{blogDetail.description}</div>
            </article>
            <aside className="col-span-3">
                <div className="sticky top-40 border-2 bg-white rounded-xl p-5 shadow-xl h-fit">
                    <h1 className="text-2xl font-bold ">Danh Mục Bài Viết</h1>
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
            </aside>
        </div>
    )
}