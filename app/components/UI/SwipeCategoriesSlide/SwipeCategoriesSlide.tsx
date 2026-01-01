import { Link } from "react-router";
import Slider from "react-slick";
import "./SwipeCategories.scss";
import type { SwipeCategorieProps } from "./SwipeCategoriesSlide.type";

// UTILS
import { useMediaQuery } from "~/hooks/useMediaQuery";

export const SwipeCategoriesSlide = ({ data, type = "icon" }: SwipeCategorieProps) => {
  const isMobile = useMediaQuery("(max-width: 399px)");
  const isTablet = useMediaQuery("(min-width: 400px) and (max-width: 599px)");

  const slidesToShow = isMobile ? 3 : isTablet ? 5 : 7;
  const slidesToScroll = isMobile ? 1 : isTablet ? 2 : 4;

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll,
  };


  return (
    <section className="w-full">
      <Slider {...settings}>
        {data.map((item) => {
          const src = type === "image" ? item.image : item.icon;

          if (!src) return null;

          return (
            <div key={item.id} className="px-2">
              <Link
                to={item.slug}
                className="group flex flex-col items-center justify-center"
              >
                <img
                  src={src}
                  alt={item.title}
                  className={
                    type === "icon"
                      ? "lg:w-20 lg:h-20 w-10 h-10 object-contain"
                      : "w-full h-40 object-cover rounded-xl"
                  }
                />

                <p className="lg:text-xl text-sm font-bold text-center uppercase mt-2 transition-transform group-hover:-translate-y-2">
                  {item.title}
                </p>
              </Link>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};
