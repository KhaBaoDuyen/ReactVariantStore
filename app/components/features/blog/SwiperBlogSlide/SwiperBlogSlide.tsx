import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BlogCard } from "../BlogCard/BlogCard";
import type { BlogCardItem } from "../BlogCard/BlogCard.type";

export type SwiperBlogProps = {
	blogs: BlogCardItem[];
};

export const SwiperBlogSlide = ({ blogs }: SwiperBlogProps) => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay]}
			spaceBetween={24}
			navigation
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			}}
			loop
			breakpoints={{
				0: {
					slidesPerView: 1,
				},
				640: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
			}}
			className="w-full py-6"
		>
			{blogs.map((item, i) => (
				<SwiperSlide key={i + 1} className=" py-5">
					<BlogCard {...item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
