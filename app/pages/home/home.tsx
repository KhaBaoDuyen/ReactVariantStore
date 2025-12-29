import logo from "/assets/images/logo-light.png";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

//COMPONENTS
import TextType from '~/components/UI/TextType/textType';
import { Button } from "~/components/UI/Button/button";
import { ImagesZoom } from "~/components/UI/ImagesZoom";
import SwipeToSlide from "~/components/UI/SwipeToSlide/SwipeToSlide";
import { ImagesData } from "./home.data";


export default function HomePage() {
  // const isMobile = useMediaQuery("(max-width: 1023px)");

  return (
    <>
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

      <div className="lg:w-10/12 lg:py-10 mx-auto "> 
        <SwipeToSlide />
      </div>

      <div className="lg:w-10/12 lg:py-10 mx-auto "> 
        <Link to="">
          <img src="" alt="" />
        </Link>
      </div>


    </>
  );
}