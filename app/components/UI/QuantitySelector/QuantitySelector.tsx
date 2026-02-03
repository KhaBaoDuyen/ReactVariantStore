import { useState } from "react";
import type { QuantitySelectorProps } from "./QuantitySelector.type";

export default function QuantitySelector({
	value,
	onIncrease,
	onDecrease,
	onUpdate,
	min = 1,
	max = 5,
}: QuantitySelectorProps) {
	const [warning, setWarning] = useState<string | null>(null);

	const handleIncrease = () => {
		if (value >= max) {
			setWarning("Tối đa chỉ 5 sản phẩm. Nếu muốn mua hơn vui lòng liên hệ.");
			return;
		}
		const newValue = value + 1;
		setWarning(null);
		onIncrease();
		onUpdate?.(newValue);
	};

	const handleDecrease = () => {
		if (value <= min) return;
		const newValue = value - 1;
		setWarning(null);
		onDecrease();
		onUpdate?.(newValue);
	};

	return (
		<div className="flex flex-col items-start gap-1">
			<div className="flex items-center border w-fit rounded">
				<button
					className="px-2"
					onClick={handleDecrease}
					disabled={value <= min}
				>
					-
				</button>

				<span className="px-3">{value}</span>

				<button
					className="px-2"
					onClick={handleIncrease}
					disabled={value >= max}
				>
					+
				</button>
			</div>

			{warning && <p className="text-xs z-50 text-red-500  ">{warning}</p>}
		</div>
	);
}
