import { useState } from "react";
import { Input } from "../../form/Input";

export const VariantItem = ({
    index,
    register,
    remove,
    errors,
    onImage
}: any) => {
    const [preview, setPreview] = useState<string | null>(null);

    const handlePreview = (e: any) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setPreview(URL.createObjectURL(file));
        onImage(e, index);
    };

    const variantError = errors?.variants?.[index];

    return (
        <div className="flex justify-between items-end gap-4 border p-4 rounded-xl ">

            <div className="w-2/12 overflow-hidden">
                <label className="block text-sm mb-1 font-medium">Ảnh</label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handlePreview}
                    className="text-sm"
                />

                {preview && (
                    <img
                        src={preview}
                        className="w-24 h-24 object-cover rounded mt-2 border"
                    />
                )}
            </div>

            <Input
                id={`variant-name-${index}`}
                label="Tên"
                error={variantError?.name}
                {...register(`variants.${index}.name`, {
                    required: "Bắt buộc nhập tên"
                })}
            />

            <Input
                id={`variant-price-${index}`}
                label="Giá"
                type="number"
                error={variantError?.price}
                {...register(`variants.${index}.price`, {
                    required: "Bắt buộc nhập giá",
                    valueAsNumber: true,
                    min: { value: 0, message: ">= 0" }
                })}
            />

            <Input
                id={`variant-stock-${index}`}
                label="Số lượng"
                type="number"
                error={variantError?.stock}
                {...register(`variants.${index}.stock`, {
                    required: "Bắt buộc nhập số lượng",
                    valueAsNumber: true,
                    min: { value: 0, message: ">= 0" }
                })}
            />

            <div className="flex items-end">
                <button
                    type="button"
                    onClick={() => remove(index)}
                    className="bg-red-500 text-white px-3 py-2 rounded"
                >
                    Xóa
                </button>
            </div>
        </div>
    );
};
