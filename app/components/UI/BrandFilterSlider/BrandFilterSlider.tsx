import type { BrandFilterProps } from "./BrandFilterSlider.type";
import { Link } from "react-router";
import Slider from "react-slick";
import "./BrandFilterSlider.scss";

// UTILS
import { useMediaQuery } from "~/hooks/useMediaQuery";

export const BrandFilterSlider = ({
    brand
}: BrandFilterProps) => {
    const isMobile = useMediaQuery("(max-width: 399px)");
    const isTablet = useMediaQuery("(min-width: 400px) and (max-width: 599px)");

    const slidesToShow = isMobile ? 3 : isTablet ? 5 : 7;
    const slidesToScroll = isMobile ? 1 : isTablet ? 2 : 4;

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 600,
        slidesToShow,
        slidesToScroll,
    };

    return (
        <Slider {...settings} className="brand-filter-slider w-full">
            {brand.map((item) => (
                <div key={item.name}>
                    <Link
                        to={`/thuong-hieu/${item.name}`}
                        className="brand-item flex items-center gap-2 text-center"
                    >
                        <div className="w-10 h-10  overflow-hidden">
                            <img
                                src={`/assets/images/brands/${item.image}`}
                                alt={item.name}
                                className="w-full h-full object-fill"
                            />
                        </div>

                        <p className="text-muted text-accent-600-hover">
                            {item.name}
                        </p>
                    </Link>

                </div>
            ))}
        </Slider>

    );
}