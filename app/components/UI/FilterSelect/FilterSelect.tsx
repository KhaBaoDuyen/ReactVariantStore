import { useState } from "react";

type Option = {
    id: number | string;
    name?: string;
    title?: string;
};

type Props = {
    label: string;
    options: Option[];
    selected: (number | string)[];
    setSelected: (value: (number | string)[]) => void;
};

export const FilterSelect = ({
    label,
    options,
    selected,
    setSelected,
}: Props) => {
    const [keyword, setKeyword] = useState("");

    const toggle = (id: number | string) => {
        if (selected.includes(id)) {
            setSelected(selected.filter((i) => i !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    const filtered = options.filter((o) =>
        (o.name || o.title)!
            .toLowerCase()
            .includes(keyword.toLowerCase())
    );

    return (
        <div className="space-y-2">
            <h1 className="text-accent-600 font-bold">{label}</h1>

             <input
                placeholder="Tìm kiếm..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="border rounded-md px-3 py-2 w-full text-sm"
            />

             <div className="border rounded-md max-h-[180px] overflow-y-auto custom-scroll-x p-2 space-y-2">
                {filtered.map((o) => {
                    const text = o.name || o.title;

                    return (
                        <label
                            key={o.id}
                            className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded"
                        >
                            <input
                                type="checkbox"
                                checked={selected.includes(o.id)}
                                onChange={() => toggle(o.id)}
                            />
                            <span>{text}</span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};
