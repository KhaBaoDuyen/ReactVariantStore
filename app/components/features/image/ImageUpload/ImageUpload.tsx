import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
    name: string;
    label?: string;
};

export const ImageUpload = ({ name, label }: Props) => {
    const { register, setValue, watch } = useFormContext();
    const [previews, setPreviews] = useState<string[]>([]);

    //LẤY VALUE TỪ FORM
    const raw = watch(name);

    const files: any[] =
        raw instanceof FileList
            ? Array.from(raw)
            : Array.isArray(raw)
                ? raw
                : [];

    //TẠO PREVIEW
    useEffect(() => {
        if (!files.length) {
            setPreviews([]);
            return;
        }

        const urls = files
            .map((item) => {
                if (typeof item === "string") return item;

                //  backend object 
                if (item && typeof item === "object" && "url" in item) return item.url;

                // upload mới 
                if (item instanceof File) return URL.createObjectURL(item);

                return null;
            })
            .filter(Boolean) as string[];

        setPreviews(urls);

        // cleanup memory 
        return () => {
            urls.forEach((u) => {
                if (u.startsWith("blob:")) URL.revokeObjectURL(u);
            });
        };
    }, [files]);

    //HANDLE UPLOAD
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileArray = Array.from(e.target.files || []);
        setValue(name, fileArray, { shouldDirty: true });
    };

    //REMOVE
    const removeImage = (index: number) => {
        const newFiles = files.filter((_, i) => i !== index);
        setValue(name, newFiles, { shouldDirty: true });
    };

    return (
        <div className="space-y-3">
            {label && <p className="font-semibold">{label}</p>}

            <input
                type="file"
                multiple
                accept="image/*"
                {...register(name)}
                onChange={handleChange}
                className="block w-full border p-5 rounded-xl border-dashed"
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
