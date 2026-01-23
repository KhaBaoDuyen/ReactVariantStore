import { useState } from "react";
import { QuantitySelectorProps } from "./QuantitySelector.type";

export default function QuantitySelector({
  value,
  onIncrease,
  onDecrease,
  min = 1,
  max = 5,
}: QuantitySelectorProps) {

  const [warning, setWarning] = useState<string | null>(null);

  const handleIncrease = () => {
    if (value >= max) {
      setWarning("Tối đa chỉ 5 sản phẩm. Nếu muốn mua hơn vui lòng liên hệ.");
      return;
    }
    setWarning(null);
    onIncrease();
  };

  const handleDecrease = () => {
    setWarning(null);
    onDecrease();
  };

  return (
    <div className="flex flex-col items-start gap-1">
      <div className="flex items-center border w-fit rounded">
        <button className="px-2" onClick={handleDecrease} disabled={value <= min}>
          -
        </button>

        <span className="px-3">{value}</span>

        <button className="px-2" onClick={handleIncrease} disabled={value >= max}>
          +
        </button>
      </div>

      {warning && (
        <p className="text-xs text-red-500 max-w-[160px]">
          {warning}
        </p>
      )}
    </div>
  );
}
