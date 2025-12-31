import logo from "/assets/images/logo-light.png";
import { motion } from "framer-motion";
import { Link } from "react-router";
//COMPONENTS
import { Search } from "~/components/UI/Search";
import { ButtonAnimation } from "~/components/UI/ButtonAnimation/buttonAnimation";
import { ImagesForcus } from "~/components/UI/ImagesForcus/ImagesForcus";
import { CategoryBannerSlide } from "~/components/UI/ImagesBannerSlider/ImagesBannerSlider";
import { ProductByCategogy, SliderProductByCategogy } from "~/components/UI/ProductByCategogy/ProductByCategogy";

//UTILS
import { useMediaQuery } from "~/hooks/useMediaQuery";

//DATA
import { dataButton } from "./product.data";
import { BRAND_DATA } from "~/data/brands.data";

export default function ProductPage() {
  const isMobile = useMediaQuery("(max-width: 1023px)");

  return (
    <>
      <div className=" h-full">
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
                {BRAND_DATA.map((button, index) => (
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
      </div>

      {/* <div className="mb-10  mx-auto py-5 lg:w-full w-11/12">
        <SliderProductByCategogy />
      </div> */}

      <div className=" x-auto w-11/12 lg:w-full h-full bg-primary-600">
           <img
            src="/assets/images/7f94849d8e8cb55e5d838a5bf3f187c61.png"
            alt="Sản phẩm nổi bật"
            className="w-full h-full object-cover "
          />

          <div className="-translate-y-30 lg:w-10/12 mx-auto inset-0 flex flex-col gap-2 text-white">
            <h2 className="text-2xl lg:text-4xl font-bold mb-2 text-accent-600">
              Sản phẩm nổi bật
            </h2>
            <p className="text-sm lg:text-base text-muted">
              Những sản phẩm được khách hàng yêu thích nhất
            </p>
            <span className="flex gap-5">
               <Link className="px-3 py-1 border-1 hover:bg-transparent rounded-md
                bg-white/40" to="/products">#Sản Phẩm Bán Chạy Nhất</Link>
               <Link className="px-3 py-1 border-1 hover:bg-transparent rounded-md
                bg-white/40" to="/products">Sản Phẩm Nhiều Đánh Giá</Link>
            </span>
            <span className="">
              <Link to="/products/chuot">
                <img
                  src="/assets/images/4f3b2f2f6f6f1e2f5e8e4c3b2a1d0c9b1.png"
                  alt="Sản phẩm nổi bật"
                  className="w-full h-full object-cover mt-5 rounded-lg shadow-lg"
                />
              </Link>
            </span>
         </div>
      </div>

    </>
  );
}