import { useForm } from "react-hook-form";
import type { Product } from "~/types/product.type";
import { slugify } from "~/utils/slugify";

import { Input } from "../../form/Input";
import { useEffect } from "react";
export default function ProductForm() {
    const {
        register,
        formState: { errors },
        watch,
        setValue,
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



    return (
        <>
            <form className="bg-white p-5 rounded-md">
                <Input id="name"
                    label="Tên sản phẩm"
                    {...register("name", { required: "Không được để trống" })}
                    error={errors.name}
                />
                <Input id="slug"
                    label="Đường dẫn (slug)"
                     
                    {...register("slug")} />
            </form>
        </>
    )
}