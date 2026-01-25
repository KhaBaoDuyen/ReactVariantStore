import type { StarRatingProps } from "./StarRating.type";
import { StarEmpty, StarFull, StarHalf } from "./Start";

export const StarRating = ({ value, max = 5, size = 18 }: StarRatingProps) => {
	return (
		<div className="flex items-center">
			{Array.from({ length: max }).map((_, index) => {
				const starValue = index + 1;

				if (value >= starValue) {
					return <StarFull key={index} size={size} />;
				}

				if (value >= starValue - 0.5) {
					return <StarHalf key={index} size={size} />;
				}
				return <StarEmpty key={index} size={size} />;
			})}
		</div>
	);
};
