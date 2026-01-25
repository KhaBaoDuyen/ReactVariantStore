export type QuantitySelectorProps = {
	value: number;
	onIncrease: () => void;
	onDecrease: () => void;
	onUpdate?: (newValue: number) => void;
	min?: number;
	max?: number;
};
