import { FormProvider, useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";

import type { Product } from "~/types/product.type";
import type { Brand } from "~/types/brands.type";
import type { Category } from "~/types/categories.type";

import { slugify } from "~/utils/slugify";
import { getBrand } from "~/service/brand.service";
import { getCategory } from "~/service/category.service";

//COMPONENT
import { Input } from "../../form/Input";
import Loading from "~/components/UI/Loading/loading";
import { Button } from "~/components/UI/ButtonIcon/buttonIcon";
import { ImageUpload } from "../../image/ImageUpload/ImageUpload";
import { FilterSelect } from "~/components/UI/FilterSelect/FilterSelect";
import { RichTextEditor } from "~/components/features/form/RichTextEditor";
import { ProductVariants } from "../ProductVariants/ProductVariants";

export default function ProductForm() {
    const [loading, setLoading] = useState(false);
    const [brands, setBrands] = useState<Brand[]>([]);
    const [selectedBrand, setSelectedBrand] = useState<number | null>(null);
    const [categoies, setCategories] = useState<Category[]>([]);
    const [preview, setPreview] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<(number | string)[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<(number | string)[]>([]);

    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log(data.images);
    }

    const {
        register,
        formState: { errors },
        watch,
        setValue,
        control,
    } = useForm<Product>();

    const name = watch("name");

    useEffect(() => {
        if (name) {
            setValue("slug", slugify(name), {
                shouldDirty: true,
                shouldValidate: true,
            });
        }
    }, [name, setValue]);

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
    }

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
    }

    useEffect(() => {
        fetchCategory();
    }, []);

    // ADD VARIANT


    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="bg-white p-5 rounded-xl shadow ">
                    <ImageUpload
                        name="images"
                        label="Hình ảnh sản phẩm" />
                    <div className="grid grid-cols-2 gap-2">
                        <span>
                            <FilterSelect
                                label="Thương hiệu"
                                options={brands}
                                selected={selectedBrands}
                                setSelected={setSelectedBrands}
                            />
                        </span>

                        <span>
                            <FilterSelect
                                label="Danh mục"
                                options={categoies}
                                selected={selectedCategories}
                                setSelected={setSelectedCategories}
                            />
                        </span>


                        <Input id="name"
                            label="Tên sản phẩm"
                            {...register("name", { required: "Không được để trống" })}
                            error={errors.name} />

                        <Input id="slug"
                            label="Đường dẫn (slug)"
                            {...register("slug")} />

                        <div className="grid grid-cols-2 gap-3">
                            <Input id="price"
                                label="Giá sản phẩm"
                                {...register("price", {
                                    required: "Giá là bắt buộc",
                                    valueAsNumber: true,
                                    min: {
                                        value: 0,
                                        message: "Không được để trống"
                                    }
                                })} />
                            <Input id="oldPrice"
                                label="Giá giảm nếu có"
                                {...register("oldPrice", {
                                    required: "Giá giảm phải là số",
                                    valueAsNumber: true,
                                    min: {
                                        value: 0,
                                        message: "Không được để trống"
                                    }
                                })} />
                        </div>

                        <Input id="sold"
                            label="Số lượng"
                            {...register("sold", {
                                required: "Số lượng phải là số",
                                valueAsNumber: true,
                                min: {
                                    value: 0,
                                    message: "Số lượng phải >= 0"
                                }
                            })} />

                        <div className="col-span-2">
                            <ProductVariants />
                        </div>

                        <div className="col-span-2">
                            <Controller
                                name="description"
                                control={control}
                                rules={{ required: "Không được bỏ trống" }}
                                render={({ field }) => (
                                    <RichTextEditor
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
    )
}