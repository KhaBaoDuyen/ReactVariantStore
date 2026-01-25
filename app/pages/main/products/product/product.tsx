import { motion, number } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";
import logo from "/assets/images/logo-light.png";

import { ButtonAnimation } from "~/components/UI/ButtonAnimation/buttonAnimation";
import { ContactGroup } from "~/components/UI/ButtonContact";
import { CategoryBannerSlide } from "~/components/UI/ImagesBannerSlider/ImagesBannerSlider";
import { ImagesForcus } from "~/components/UI/ImagesForcus/ImagesForcus";
//COMPONENTS
import { Search } from "~/components/UI/Search";
import { SortDropdown } from "~/components/UI/SortDropdown/SortDropdown";
import { SwipeCategoriesSlide } from "~/components/UI/SwipeCategoriesSlide/SwipeCategoriesSlide";
import CustomPagination from "~/components/common/CustomPagination";
import {
	ProductByCategogy,
	SliderProductByCategogy,
} from "~/components/features/products/ProductByCategogy/ProductByCategogy";
import { ProductCard } from "~/components/features/products/ProductCard/productCard";

//UTILS
import { useMediaQuery } from "~/hooks/useMediaQuery";

import { BRAND_DATA } from "~/data/brands.data";
import { CATEGOGY_DATA } from "~/data/categories.data";
import { PRODUCTS_DATA } from "~/data/products.data";
//DATA
import { dataButton } from "./product.data";

export default function ProductPage() {
	const isMobile = useMediaQuery("(max-width: 1023px)");

	//PAGINATION
	const itemsPerPage = 12;
	const [page, setPage] = useState<number>(1);
	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const products = PRODUCTS_DATA.slice(startIndex, endIndex);

	return (
		<div className="">
			<div className="h-full bg-primary-100 rounded-b-2xl">
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className="lg:w-10/12 w-full mx-auto lg:my-5 ">
						<div
							className="min-h-full lg:py-20 py-10 bg-banner bg-no-repeat flex items-center justify-center 
      lg:rounded-4xl  shadow-lg flex-col"
						>
							<img src={logo} alt="Logo" className="lg:w-3/12 w-6/12" />
							<h1 className="font-bold px-5 py-3 text-center title-lg-primary-600 lg:text-[4rem] text-[2rem]">
								Chào mừng đến với cửa hàng thiết bị gaming{" "}
								<span className="text-accent-600">Yejara</span>
							</h1>
							<span className="lg:w-7/12 w-10/12 bg-white/20 p-3 rounded-md shadow-lg">
								<Search showOnMobile={true} width="w-12/12" />
							</span>
							<span className="flex flex-wrap lg:w-6/12 w-10/12 justify-center mt-5 lg:gap-3 gap-2">
								{BRAND_DATA.slice(0, 10).map((button, index) => (
									<ButtonAnimation
										key={index}
										name={button.name}
										path={button.slug}
										imageAlt={button.image}
									/>
								))}
							</span>
						</div>
					</div>
				</motion.div>

				<div
					className=" lg:w-[70%] w-[90%] mx-auto xl:-translate-y-20 
        lg:p-5 rounded-md lg:rounded-3xl  bg-white to-transparent"
				>
					{isMobile ? <CategoryBannerSlide /> : <ImagesForcus />}
				</div>

				<div className=" mx-auto w-11/12 py-6 lg:w-10/12">
					<SwipeCategoriesSlide
						data={CATEGOGY_DATA}
						type="image"
						variant="six"
					/>
				</div>
			</div>

			<div className="relative mx-auto w-12/12 py-5 lg:w-10/12 grid lg:grid-cols-4 h-full  ">
				<aside className="col-span-1 hidden lg:block">
					<div className="sticky top-40 border-2 bg-white rounded-xl p-5 shadow-xl h-fit">
						<h1 className="text-2xl font-bold ">Danh Mục Sản Phẩm</h1>
						<hr className="h-[2px] border-none bg-gradient-to-r from-[#1E2746] to-transparent blur-[0.2px] my-3" />
						{CATEGOGY_DATA.map((item, i) => {
							const isLast = i === CATEGOGY_DATA.length - 1;
							return (
								<>
									<Link to={item.slug}>
										<p className="py-2 font-bold text-lg text-accent-600-hover">
											{item.title}
										</p>
										{!isLast && (
											<hr className="h-[1.4px] border-none bg-gradient-to-r from-[#1e274642] to-transparent blur-[0.2px]" />
										)}
									</Link>
								</>
							);
						})}
					</div>

					<div className="bg-white border-2 rounded-xl mt-5 p-5 shadow-xl h-fit">
						<h1 className="text-2xl font-bold ">Liên hệ chúng tôi</h1>
						<hr className="h-[2px] border-none bg-gradient-to-r from-[#1E2746] to-transparent blur-[0.2px] my-3" />
						<ContactGroup />
					</div>
				</aside>

				<div className="lg:col-span-3 w-full px-5">
					<div className="flex justify-between items-center">
						<h1 className="text-xl font-bold">Tất cả</h1>
						<SortDropdown onChange={(value) => console.log(value)} />
					</div>

					<div className="grid lg:grid-cols-4 grid-cols-2 gap-5 mt-5">
						{products.map((p, index) => (
							<ProductCard
								key={index + 1}
								name={p.name}
								image={p.image}
								price={p.price}
								salePrice={p.salePrice}
								rating={p.rating}
								sold={p.sold}
								slug={p.slug}
							/>
						))}
					</div>
					<div className="flex justify-center mt-6">
						<CustomPagination
							total={Math.ceil(PRODUCTS_DATA.length / itemsPerPage)}
							page={page}
							onChange={(_, value) => setPage(value)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
