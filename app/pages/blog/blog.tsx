import bgBlogPage from "/assets/images/bg-blogPage.png";
import logo from "/assets/images/logo-light.png";
import { motion, number } from "framer-motion";
import { Link } from "react-router";

//COMPONENT
import { Search } from "~/components/UI/Search";
import { SwipeCategoriesSlide } from "~/components/UI/SwipeCategoriesSlide/SwipeCategoriesSlide";
import { SwiperBlogSlide } from "~/components/UI/SwiperBlogSlide/SwiperBlogSlide";


//DATA
import { CATEGOGY_DATA } from "~/data/categories.data";
import { BLOG_DATA } from "~/data/blogs.data";

export default function BlogPage() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: -25 }}
                transition={{ duration: 0.5 }}>
                <div className="lg:w-10/12 w-full mx-auto ">
                    <div className="min-h-full py-10 bg-blogPage bg-no-repeat flex items-center justify-center 
      lg:rounded-4xl  shadow-lg flex-col gap-2">
                        <h1 className="text-accent-600 font-bold  lg:text-[2rem] text-[1.3rem]">Tin tức</h1>
                        <h1 className="font-bold text-center px-2 title-lg-primary-600 lg:text-[3rem] text-[2rem]">
                            Khám phá tin tức mới nhất
                        </h1>
                        <span className="lg:w-7/12 w-10/12 bg-white/20 p-3 rounded-md shadow-lg">
                            <Search showOnMobile={true} width="w-12/12" />
                        </span>

                    </div>
                </div>
            </motion.div>
            <div className=" mx-auto w-11/12 py-6 lg:w-10/12">
                <SwipeCategoriesSlide
                    data={CATEGOGY_DATA}
                    type="image"
                    variant="six" />
            </div>

            <section className="lg:w-10/12 mx-auto w-11/12 lg:mt-5">
                <h1 className="text-[2rem] font-bold text-accent-600 text-center">Tin tức mới</h1>
                <p className="text-muted text-center">Những bài viết vừa được đăng tải từ đội ngũ của chúng tôi.</p>
                <SwiperBlogSlide blogs={BLOG_DATA}/>

            </section>
        </div>
    )
}