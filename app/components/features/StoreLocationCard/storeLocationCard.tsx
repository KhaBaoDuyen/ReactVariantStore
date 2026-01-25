import type { storeLocationProps } from "./storeLocationCard.type";
export const StoreLocationCard = ({
	image,
	name,
	openTime,
	address,
	phone,
}: storeLocationProps) => {
	return (
		<div className="bg-white flex-shrink-0 shadow rounded-xl grid grid-cols-4 gap-3 overflow-hidden p-3">
			<div className="overflow-hidden col-span-2 rounded-xl ">
				<img src={`/assets/images/${image}`} alt="" className="w-full h-full" />
			</div>
			<div className="col-span-2 flex flex-col justify-between">
				<h1 className="font-bold line-clamp-2 text-primary-600">{name}</h1>
				<p className="text-muted">{openTime}</p>
				<p className="text-muted line-clamp-3">{address}</p>
				<p className="text-accent-600 font-bold">Sdt: {phone}</p>
			</div>
		</div>
	);
};
