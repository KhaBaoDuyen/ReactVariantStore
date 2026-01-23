import logo from "/assets/images/logo-light.png";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import Slider from "react-slick";

//COMPONENTS
import TextType from '~/components/UI/TextType/textType';
import { Button } from "~/components/UI/ButtonIcon/buttonIcon";
import { ImagesZoom } from "~/components/UI/ImagesZoom";
import SwipeToSlide from "~/components/UI/SwipeToSlide/SwipeToSlide";
import { SwipeCategoriesSlide } from "~/components/UI/SwipeCategoriesSlide/SwipeCategoriesSlide";
import { BrandFilterSlider } from "~/components/UI/BrandFilterSlider/BrandFilterSlider";
import { SwiperBlogSlide } from "~/components/UI/SwiperBlogSlide/SwiperBlogSlide";
import ImagesStack from "~/components/UI/ImagesStack/ImagesStack";
import { FeatureSection } from "~/components/UI/FeatureCard/FeatureSection";
//UTILS
import { useMediaQuery } from "~/hooks/useMediaQuery";

//DATA
import { ImagesData,} from "./home.data";
import { BLOG_DATA } from "~/data/blogs.data";
import { PRODUCTS_DATA } from "~/data/products.data";
import { CATEGOGY_DATA } from "~/data/categories.data";
import { BRAND_DATA } from "~/data/brands.data";
import { ProductFeaturedCard } from "~/components/UI/ProductFeaturedCard/ProductFeaturedCard";
export default function HomePage() {
  const isMobile = useMediaQuery("(max-width: 1023px)");

  const getMobileSliderSettings = () => ({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  return (
    <div className="bg-primary-100">
      <div className="bg-primary-700 py-10">
        <span className="lg:w-10/12 flex  mx-auto ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-5 flex flex-1 flex-col lg:gap-4 gap-2"
          >
            <h1 className="text-accent-600 font-bold lg:text-3xl text-2xl">
              <TextType
                text={["Giúp Bạn Dễ Dàng Tiếp Cận Thiết Bị Công Nghệ Chính Hãng."]}
                typingSpeed={75}
                pauseDuration={999999}
                loop={false}
                showCursor={true}
                cursorCharacter="|"
              />
            </h1>

            <p className="text-accent-600 lg:text-md text-sm">
              Hiệu Năng Cao – Giá Tốt – Đáng Tin Cậy
            </p>

            <p className="text-muted text-sm text-justify">
              Từ học tập, làm việc đến chơi game và giải trí, chúng tôi cung cấp các thiết
              bị điện tử chất lượng cao như bàn phím, chuột, màn hình và phụ kiện công nghệ,
              mang đến trải nghiệm ổn định, mượt mà và tối ưu chi phí cho người dùng.
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <img src="/assets/images/Icon/Checkmark.png" alt="" className="lg:block:w-10 w-7 h-7" />
                <p className="text-white lg:text-md text-sm ">Sản phẩm chính hãng</p>
              </div>

              <div className="flex gap-3">
                <img src="/assets/images/Icon/Checkmark.png" alt="" className="lg:block:w-10 w-7 h-7" />
                <p className="text-white lg:text-md text-sm ">Bảo hành đầy đủ, đổi trả nhanh chóng</p>
              </div>

              <div className="flex gap-3">
                <img src="/assets/images/Icon/Checkmark.png" alt="" className="lg:block:w-10 w-7 h-7" />
                <p className="text-white lg:text-md text-sm ">Phù hợp học tập, làm việc và gaming</p>
              </div>

              <div className="flex gap-3">
                <img src="/assets/images/Icon/Checkmark.png" alt="" className="lg:block:w-10 w-7 h-7" />
                <p className="text-white lg:text-md text-sm ">Nhiều phân khúc giá, dễ dàng lựa chọn</p>
              </div>
            </div>

            <span className="flex flex-col mt-3 lg:flex-row lg:gap-4 gap-3">
              <Button
                icon={<ChevronRight className="w-5 h-5 text-white" />}
                iconPosition="right"
                onClick={() => console.log("Chuyen huong trang den trang sap pham")}
                color={"accent-600"}>
                Xem thêm
              </Button>
              <Button
                onClick={() => console.log("Chuyen huong trang den trang sap pham")}
                color={"accent-600"}
                variant="outline">
                Xem Thông Tin Về Yejara
              </Button>
            </span>
          </motion.div>


          <div className="hidden lg:block columns-3 flex-1 gap-4 max-w-6xl mx-auto p-5">
            {ImagesData.map((img, i) => (
              <div
                key={i}
                className="w-full mb-6 break-inside-avoid rounded-2xl overflow-hidden">
                <ImagesZoom path={img.path} />
              </div>
            ))}
          </div>

        </span>
      </div>

      <section className="lg:w-10/12 lg:py-10 mx-auto ">
        <SwipeToSlide />
      </section>

      <section className="w-10/12 mx-auto ">
        <SwipeCategoriesSlide
          data={CATEGOGY_DATA} />
      </section>

      <section className=" lg:mt-5 bg-primary-600 pb-5">
        <div className=" mx-auto bg-bannerSection">
          <div className="lg:w-10/12 w-11/12 mx-auto py-4 lg:py-10 flex flex-col gap-4 ">
            <div className="">
              <h2 className="text-2xl lg:text-4xl font-bold text-accent-600">
                Sản phẩm nổi bật
              </h2>
              <p className="text-sm lg:text-base text-muted">
                Những sản phẩm được khách hàng yêu thích nhất
              </p>
            </div>
            <span className="flex lg:flex-row flex-col gap-3">
              <Link className="px-3 py-1 w-fit hover:border-1 hover:bg-transparent hover:text-white rounded-md
                bg-white/40" to="/products">#Sản Phẩm Bán Chạy Nhất</Link>
              <Link className="px-3 py-1 w-fit hover:border-1 hover:bg-transparent hover:text-white rounded-md
                bg-white/40" to="/products">Sản Phẩm Nhiều Đánh Giá</Link>
            </span>
          </div>
        </div>

        {isMobile ? (
          <Slider {...getMobileSliderSettings()}>
            {PRODUCTS_DATA.slice(0, 8).map((i) => (
              <div key={i.name} className="py-1">
                <ProductFeaturedCard
                  name={i.name}
                  image={i.image}
                  price={i.price}
                  priceReduced={i.priceReduced}
                  description={i.description}
                  sold={i.sold}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="lg:w-10/12 w-11/12 mx-auto">
            <div className=" z-40 grid grid-cols-4 gap-3">
              {PRODUCTS_DATA.slice(0, 8).map((i) => (
                <ProductFeaturedCard
                  key={i.name}
                  name={i.name}
                  image={i.image}
                  price={i.price}
                  priceReduced={i.priceReduced}
                  description={i.description}
                  sold={i.sold}
                />
              ))}
            </div>
            <div className="pt-5">
              <BrandFilterSlider brand={BRAND_DATA } />
            </div>


          </div>
        )}
      </section>

      <section className="py-5 flex mt-3 flex-col justify-center items-center gap-2">
        <span className="text-center">
          <h1 className="lg:text-3xl text-md title-primary-600 text-center"> Cập nhật nổi bật</h1>
          <p className="text-muted ">Những bài viết vừa được đăng tải từ đội ngũ của chúng tôi.</p>
        </span>
        <div className=" lg:w-10/12 w-11/12">
          <SwiperBlogSlide blogs={BLOG_DATA} />
        </div>
      </section>

      <div className="hidden lg:grid grid-cols-4 py-5 lg:w-10/12 mx-auto gap-5">
        <div className="col-span-2 overflow-hidden group rounded-xl h-[15rem]">
          <img src="./assets/images/tlc_keyboards_banner_k60protkl_2a7cf6e5a327492287d04a71350fe4de.jpg" alt=""
            className=" group-hover:scale-125 h-full w-full object-cover " />
        </div>
        <div className="overflow-hidden group rounded-xl h-[15rem]">
          <img src="./assets/images/20-1730801598133.jpg" alt=""
            className=" group-hover:scale-125 h-full w-full object-cover " />
        </div>
        <div className="overflow-hidden group rounded-xl h-[15rem]">
          <img src="./assets/images/ips_banner_1920x680_801fccb12fa947bfb0eda431877d620e.jpg" alt=""
            className=" group-hover:scale-125 h-full w-full object-cover " />
        </div>
      </div>

      <section className=" lg:mt-5 bg-primary-500 py-10">
        <span className="lg:w-10/12 w-11/12 mx-auto grid lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2">
            <h1 className="text-accent-700 font-bold text-xl">Về YEJARA</h1>
            <p className="text-on-primary">Lý do khách hàng tin tưởng chúng tôi.</p>
            <h1 className="text-accent-500 lg:text-4xl font-bold">Không chỉ bán sản phẩm – Chúng tôi mang đến trải nghiệm.</h1>
            <p className="text-on-primary">Chúng tôi chuyên cung cấp bàn phím, chuột và phụ kiện công nghệ chính hãng,
              được chọn lọc kỹ lưỡng về chất lượng, độ bền và hiệu năng.
              Mỗi sản phẩm đều phù hợp cho làm việc, học tập và gaming,
              giúp bạn yên tâm sử dụng lâu dài.</p>

            <Button
              icon={<ChevronRight className="w-5 h-5 text-accent-600" />}
              iconPosition="right"
              onClick={() => console.log("Chuyen huong trang den trang sap pham")}
              color={"accent-600"}
              variant="outline"
              className="mt-5">
              Xem Thông Tin Về Yejara
            </Button>
          </motion.div>
          <div className="lg:block hidden">
            <ImagesStack
              sensitivity={190}
              autoplay
              pauseOnHover
            />
          </div>
        </span>
      </section>


      <FeatureSection />
    </div>
  );
}