import { Check } from "lucide-react";
import type { VariantButtonProps } from "./VariantButton.type";

export default function VariantButton({
	variant: { variantName },
	isSelected,
	onClick,
}: VariantButtonProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`
        relative px-4 w-fit py-2 rounded border text-sm transition
        ${
					isSelected
						? "border-orange-500 text-orange-500 bg-white"
						: "border-gray-300 text-gray-700 bg-white hover:border-gray-400"
				}
      `}
		>
			{variantName}

			{isSelected && (
				<span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
					<Check size={10} />
				</span>
			)}
		</button>
	);
}
