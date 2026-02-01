import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { VariantItem } from "./VariantItem";
import { useEffect } from "react";

export const ProductVariants = () => {
    const {
        register,
        control,
        watch,
        setValue,
        formState: { errors }
    } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "variants"
    });

    const handleImage = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setValue(`variants.${index}.image`, file);
    };

    return (
        <div className="col-span-2 space-y-6">

            <div className="flex justify-between items-center">
                <h3 className="font-bold text-accent-600 text-md">Biến thể</h3>

                <button
                    type="button"
                    onClick={() =>
                        append({
                            name: "",
                            price: 0,
                            quantity: 0,
                            image: null
                        })
                    }
                    className="px-4 py-2 bg-accent-600 text-white rounded-lg"
                >
                    + Thêm variant
                </button>
            </div>

            {fields.map((field, index) => (
                <VariantItem
                    key={field.id}
                    index={index}
                    register={register}
                    errors={errors}
                    remove={remove}
                    onImage={handleImage}
                />
            ))}
        </div>
    );
};


