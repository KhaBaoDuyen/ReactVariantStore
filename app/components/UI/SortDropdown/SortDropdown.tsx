import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const SORT_OPTION = [
    { label: "Mặc định", value: "all" },
    { label: "Thứ tự tăng dần", value: "az" },
    { label: "Thứ tự giảm dần", value: "za" },
];

export const SortDropdown = ({ onChange }) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(SORT_OPTION[0]);

    const toggleDropdown = () => {
        setOpen(prev => !prev);
    };

    const handleSelect = (item) => {
        setSelected(item);
        onChange?.(item.value);
        setOpen(false);
    };

    return (
        <div className="relative inline-block bg-white p-2 border-1 rounded-xl shadow-xl">
            <button
                onClick={toggleDropdown}
                className="relative z-50 flex gap-2 bg-primary-100 px-2 py-2 border rounded-xl"
            >
                {selected.label} <ChevronDown/>
            </button>

            {open && (
                <ul className="absolute top-full left-0 mt-2 z-40 w-full bg-white shadow rounded">
                    {SORT_OPTION.map(item => (
                        <li
                            key={item.value}
                            onClick={() => handleSelect(item)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>

    );
};
