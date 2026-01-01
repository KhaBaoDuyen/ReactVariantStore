import logo from "/assets/images/logo-light.png";
import { motion } from "framer-motion";
import { Link } from "react-router";
//COMPONENTS
import { Search } from "~/components/UI/Search";
import { ButtonAnimation } from "~/components/UI/ButtonAnimation/buttonAnimation";
import { ImagesForcus } from "~/components/UI/ImagesForcus/ImagesForcus";
import { CategoryBannerSlide } from "~/components/UI/ImagesBannerSlider/ImagesBannerSlider";
import { ProductByCategogy, SliderProductByCategogy } from "~/components/UI/ProductByCategogy/ProductByCategogy";
import { SwipeCategoriesSlide } from "~/components/UI/SwipeCategoriesSlide/SwipeCategoriesSlide";

//UTILS
import { useMediaQuery } from "~/hooks/useMediaQuery";

//DATA
import { dataButton } from "./product.data";
import { BRAND_DATA } from "~/data/brands.data";
import { CATEGOGY_DATA } from "~/data/categories.data";

export default function ProductPage() {
  const isMobile = useMediaQuery("(max-width: 1023px)");

  return (
    <div className="bg-white">
      <div className="h-full bg-primary-100 rounded-b-2xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <div className="lg:w-10/12 w-full mx-auto lg:my-5 ">
            <div className="min-h-full lg:py-20 py-10 bg-banner bg-no-repeat flex items-center justify-center 
      lg:rounded-4xl  shadow-lg flex-col">
              <img src={logo} alt="Logo" className="lg:w-3/12 w-6/12" />
              <h1 className="font-bold px-5 py-3 text-center title-lg-primary-600 lg:text-[4rem] text-[2rem]">
                Chào mừng đến với cửa hàng thiết bị gaming <span className="text-accent-600">Yejara</span>
              </h1>
              <span className="lg:w-7/12 w-10/12 bg-white/20 p-3 rounded-md shadow-lg">
                <Search showOnMobile={true} width="w-12/12" />
              </span>
              <span className="flex flex-wrap lg:w-6/12 w-10/12 justify-center mt-5 lg:gap-3 gap-2">
                {BRAND_DATA.slice(0, 10).map((button, index) => (
                  <ButtonAnimation
                    key={index}
                    name={button.name}
                    path={button.slug}
                    imageAlt={button.image} />
                ))}
              </span>
            </div>
          </div>
        </motion.div>

        <div className=" lg:w-[70%] w-[90%] mx-auto xl:-translate-y-20 
        lg:p-5 rounded-md lg:rounded-3xl  bg-white to-transparent">
          {isMobile ? <CategoryBannerSlide /> : <ImagesForcus />}
        </div>

        <div className=" mx-auto w-11/12 lg:w-10/12">
          <SwipeCategoriesSlide
            data={CATEGOGY_DATA}
            type="image"
            variant="six" />
        </div>
      </div>

      <div className=" mx-auto w-11/12 lg:w-full grid grid-cols-4 h-full bg-primary-600">
        <div className="col-spans-1">

        </div>
      </div>

    </div>
  );
}