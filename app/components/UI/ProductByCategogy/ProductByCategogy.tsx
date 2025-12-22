import { Link } from 'react-router';
import { ProductByCategogyProps } from './ProductByCategogy.type';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ProductByCategogyData } from './ProductByCategogy.data';

import { ChevronLeft, ChevronRight } from "lucide-react";

export const ProductByCategogy = ({ image, name, path }: ProductByCategogyProps) => {
    return (
        <>
            <Link to={path} className="block w-[15em] h-[15em] group overflow-hidden p-5">
                <img src={image} alt={name} className="w-full h-full object-cover mx-auto group-hover:scale-110  mb-4 rounded-md" />
                <h3 className="-translate-y-20 text-lg font-semibold text-center text-primary
                      p-1 group-hover:-translate-y-15 transform  
                    transition-transform duration-300 ease-out">{name}</h3>
            </Link>
        </>
    )
}

export const SliderProductByCategogy = () => {
    return (
        <div className="relative hover:[&_button]:opacity-100">
            <Swiper
                grabCursor
                modules={[Navigation]}
                navigation={{
                    prevEl: ".swiper-button-prev-custom",
                    nextEl: ".swiper-button-next-custom",
                }}
                spaceBetween={20}
                breakpoints={{
                    0: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
            >
                {ProductByCategogyData.map((p, index) => (
                    <SwiperSlide key={index}>
                        <ProductByCategogy
                            image={p.image}
                            name={p.name}
                            path={p.path}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                className="
          swiper-button-prev-custom
          absolute left-2 top-1/2 -translate-y-1/2 z-10
          w-10 h-10 rounded-full border border-gray-300
          bg-white text-gray-700
          flex items-center justify-center
          opacity-0 transition-opacity duration-300
          hover:bg-primary 
        "
            >
                <ChevronLeft />
            </button>

            <button
                className="
          swiper-button-next-custom
          absolute right-2 top-1/2 -translate-y-1/2 z-10
          w-10 h-10 rounded-full border border-gray-300
          bg-white text-gray-700
          flex items-center justify-center
          opacity-0 transition-opacity duration-300
          hover:bg-primary 
        "
            >
                ›
            </button>
        </div>
    );
};

