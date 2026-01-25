import { ImagesData } from "./ImagesForcus.data";

export const ImagesForcus = () => {
	return (
		<div className="grid grid-cols-3 gap-4">
			{ImagesData.slice(0, 3).map((image, index) => (
				<span className="overflow-hidden rounded-2xl">
					<img
						key={index}
						className="hover:scale-105 w-full h-full"
						src={image.image}
						alt={`Image ${index + 1}`}
					/>
				</span>
			))}
		</div>
	);
};
