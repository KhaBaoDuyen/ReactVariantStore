import { useEffect, useState } from "react";
import { Controller, FormProvider, useForm, useWatch } from "react-hook-form";
import { useParams } from "react-router";

import type { Brand } from "~/types/brands.type";
import type { Category } from "~/types/categories.type";
import type { Product } from "~/types/product.type";

import { getBrand } from "~/service/brand.service";
import { getCategory } from "~/service/category.service";
import { slugify } from "~/utils/slugify";

import { Button } from "~/components/UI/ButtonIcon/buttonIcon";
import { FilterSelect } from "~/components/UI/FilterSelect/FilterSelect";
import Loading from "~/components/UI/Loading/loading";
import { RichTextEditor } from "~/components/features/form/RichTextEditor";
import { productDetail } from "~/service/product.service";
import { formatNumber } from "~/utils/formatNumber";
import { formatVND } from "~/utils/formatVND";
//COMPONENT
import { Input } from "../../form/Input";
import { ImageUpload } from "../../image/ImageUpload/ImageUpload";
import { ProductVariants } from "../ProductVariants/ProductVariants";

export default function ProductForm() {
	const [loading, setLoading] = useState(false);
	const [brands, setBrands] = useState<Brand[]>([]);
	const [selectedBrand, setSelectedBrand] = useState<number | null>(null);
	const [categoies, setCategories] = useState<Category[]>([]);
	const [preview, setPreview] = useState<string[]>([]);
	const [selectedBrands, setSelectedBrands] = useState<(number | string)[]>([]);
	const [selectedCategories, setSelectedCategories] = useState<
		(number | string)[]
	>([]);
	const [detail, setDetail] = useState();
	const { slug } = useParams();

	const methods = useForm();

	const onSubmit = (data: any) => {
		console.log(data.images);
	};

	// const {
	//     register,
	//     formState: { errors },
	//     watch,
	//     setValue,
	//     control,
	// } = useForm<Product>();

	const name = methods.watch("name");

	useEffect(() => {
		if (name) {
			methods.setValue("slug", slugify(name), {
				shouldDirty: true,
				shouldValidate: true,
			});
		}
	}, [name]);

	//FETCH BRAND
	const fetchBrand = async () => {
		setLoading(true);
		try {
			const res = await getBrand();
			setBrands(res);
		} catch (error) {
			console.log("Error fetch brand =>", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchBrand();
	}, []);

	//FETCH CATEGORIES
	const fetchCategory = async () => {
		setLoading(true);
		try {
			const res = await getCategory();
			setCategories(res);
		} catch (error) {
			console.log("Error getCategories =>", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchCategory();
	}, []);

	//FECTH PRODUCT DETRAIL
	const product = async () => {
		if (!slug) return;

		setLoading(true);
		try {
			const res = await productDetail(slug);
			console.log("Fetch product", res);
			methods.reset(res);
		} catch (error) {
			console.log("fetch product detail error", error);
			return;
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		product();
	}, [slug]);

	return (
		<>
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit(onSubmit)}
					className="bg-white p-5 rounded-xl shadow "
				>
					<ImageUpload name="images" label="Hình ảnh sản phẩm" />

					<div className="grid grid-cols-2 gap-2">
						<span>
							<FilterSelect
								label="Thương hiệu"
								name="brandId"
								options={brands}
							/>
						</span>

						<span>
							<FilterSelect
								label="Danh mục"
								name="categoryId"
								options={categoies}
							/>
						</span>

						<Input
							id="name"
							label="Tên sản phẩm"
							{...methods.register("name", { required: "Không được để trống" })}
							error={methods.formState.errors.name}
						/>

						<Input
							id="slug"
							label="Đường dẫn (slug)"
							{...methods.register("slug")}
						/>

						<Input
							type="text"
							id="price"
							label="Giá sản phẩm"
							value={formatNumber(methods.watch("price") || 0)}
							onChange={(e) => {
								const raw = e.target.value.replace(/\D/g, "");
								methods.setValue("price", Number(raw), {
									shouldDirty: true,
									shouldValidate: true,
								});
							}}
						/>

						<Input
							id="oldPrice"
							type="text"
							label="Giá giảm nếu có"
							value={formatNumber(methods.watch("oldProce") || 0)}
							{...methods.register("oldPrice", {
								required: "Giá giảm phải là số",
								valueAsNumber: true,
							})}
							onChange={(e) => {
								const raw = e.target.value.replace(/\D/g, "");
								methods.setValue("oldPrice", Number(raw), {
									shouldDirty: true,
									shouldValidate: true,
								});
							}}
						/>

						<div className="col-span-2">
							<ProductVariants />
						</div>

						<div className="col-span-2">
							<Controller
								name="description"
								control={methods.control}
								rules={{ required: "Không được bỏ trống" }}
								render={({ field }) => (
									<RichTextEditor
										key={field.value}
										label="Mô tả sản phẩm"
										value={field.value}
										onChange={field.onChange}
									/>
								)}
							/>
						</div>
						<Button className="">Thêm sản phẩm</Button>
					</div>
				</form>
			</FormProvider>
		</>
	);
}
