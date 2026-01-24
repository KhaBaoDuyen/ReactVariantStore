import { Variant } from "../Variant.type";

export type VariantButtonProps = {
    variants: Variant[];
    selectedVariantId?: string;
    onSelect: (variant: Variant) => void;
};