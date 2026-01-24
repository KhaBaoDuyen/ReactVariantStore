import VariantButton from "../VariantButton/VariantButton";
import { VariantButtonProps } from "./Variantdelector.type";

export default function VariantSelector({
    variants,
    selectedVariantId,
    onSelect,
}: VariantButtonProps) {
    return (
        <div className="bg-white rounded p-2 z-50 flex flex-wrap gap-3 w-full  shadow-md border-1 border-gray-400">
            <p className="text-gray-500">Phân loại:</p>
            {variants.map((v, index) => (
                <VariantButton
                    key={index}
                    variant={v}
                    isSelected={v.variantId === selectedVariantId}
                    onClick={() => onSelect(v)}
                />
            ))}

        </div>
    );
}