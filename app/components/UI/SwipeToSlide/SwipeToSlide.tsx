import React from "react";
import Slider from "react-slick";
import type { SwipeToSlideProps } from "./SwipeToSlice.type";
import { ImagesData } from "./SwipeToSlide.data";
import "./SwipeToSlide.scss";

// utils
import { useMediaQuery } from "~/hooks/useMediaQuery";

function SwipeToSlide({ arrows = false, dots = false }: SwipeToSlideProps) {
	const isMobile = useMediaQuery("(max-width: 479px)");
	const isTablet = useMediaQuery("(min-width: 480px) and (max-width: 1023px)");

	const slidesToShow = isMobile ? 1 : isTablet ? 2 : 3;
	const slidesToScroll = slidesToShow;

	const settings = {
		dots,
		arrows,
		infinite: true,
		speed: 500,
		slidesToShow,
		slidesToScroll,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
	};

	return (
		<div className="w-full">
			<Slider {...settings}>
				{ImagesData.map((img, i) => (
					<div key={i} className="px-2">
						<div className="overflow-hidden h-[10rem] w-full rounded-xl group">
							<img
								src={img.path}
								alt="Ảnh slider"
								className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-125 group-hover:-rotate-12
                "
							/>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default SwipeToSlide;
