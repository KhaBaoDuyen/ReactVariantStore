import React from "react";
import Slider from "react-slick";
import { ImagesData } from "./SwipeToSlide.data";
import type { SwipeToSlideProps } from "./SwipeToSlice.type";
import "./SwipeToSlide.scss";

function SwipeToSlide({
    arrows = false,
    dots = false,
}
    : SwipeToSlideProps
) {
    var settings = {
        dots,
        arrows,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="">
            <Slider {...settings} className="">
                {ImagesData.map((img, i) => (
                    <div className={`overflow-hidden h-[10rem] w-full group rounded-xl`}>
                        <img src={img.path} alt="anh slice"
                            className="group-hover:-rotate-[30deg] w-full h-full group-hover:scale-200 " />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SwipeToSlide;
