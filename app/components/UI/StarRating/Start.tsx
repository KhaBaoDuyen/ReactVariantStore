export const StarFull = ({ size }: { size: number }) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="#FBBF24">
		<path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 7.1-1L12 2z" />
	</svg>
);

export const StarHalf = ({ size }: { size: number }) => (
	<svg width={size} height={size} viewBox="0 0 24 24">
		<defs>
			<linearGradient id="half">
				<stop offset="50%" stopColor="#FBBF24" />
				<stop offset="50%" stopColor="#E5E7EB" />
			</linearGradient>
		</defs>
		<path
			fill="url(#half)"
			d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 7.1-1L12 2z"
		/>
	</svg>
);

export const StarEmpty = ({ size }: { size: number }) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="#E5E7EB">
		<path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 7.1-1L12 2z" />
	</svg>
);
