import { useState } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
    name: string;
    label?: string;
};

export const ImageUpload = ({ name, label }: Props) => {
    const { register, setValue } = useFormContext();
    const [previews, setPreviews] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        const fileArray = Array.from(files);

        // lưu vào react-hook-form
        setValue(name, fileArray);

        // tạo preview
        const previewUrls = fileArray.map((file) =>
            URL.createObjectURL(file)
        );

        setPreviews(previewUrls);
    };

    const removeImage = (index: number) => {
        const newPreviews = previews.filter((_, i) => i !== index);
        setPreviews(newPreviews);
        setValue(name, newPreviews);
    };

    return (
        <div className="space-y-3">
            {label && (
                <p className="font-semibold text-accent-700">{label}</p>
            )}
            <input
                type="file"
                multiple
                accept="image/*"
                {...register(name)}
                onChange={handleChange}
                className="block w-full border border-gray-400 text-center p-5 py-5 rounded-xl shadow border-dashed"
            />

             <div className="grid grid-cols-4 gap-3">
                {previews.map((src, index) => (
                    <div key={index} className="relative group">
                        <img
                            src={src}
                            className="h-24 w-full object-cover rounded-lg border"
                        />

                        <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-1 right-1 bg-black/60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
