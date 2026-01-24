import { Variant } from "../Variant.type";

export type VariantButtonProps = {
  variant: Variant;
  isSelected: boolean;
  onClick?: () => void;
};
