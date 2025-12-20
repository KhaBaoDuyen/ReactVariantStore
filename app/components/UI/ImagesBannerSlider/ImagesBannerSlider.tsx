import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { ImagesData } from "./ImagesBannerSlider.data";

import "swiper/css";
import "swiper/css/pagination";

export function CategoryBannerSlide() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="category-swiper w-full"
      >
        {ImagesData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-[150px] rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt={`Category ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

       <style>
        {`
          .category-swiper .swiper-pagination {
            bottom: -18px;
          }

          .category-swiper .swiper-pagination-bullet {
            background-color: #e56a18;
            opacity: 0.4;
          }

          .category-swiper .swiper-pagination-bullet-active {
            background-color: #e56a18;
            opacity: 1;
          }
        `}
      </style>
    </>
  );
}
