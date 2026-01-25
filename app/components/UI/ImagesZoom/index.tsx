export const ImagesZoom = ({ path }: { path: string }) => {
	return (
		<>
			<div className={`overflow-hidden h-auto w-full group rounded-xl`}>
				<img
					src={path}
					alt="anh banner"
					className="group-hover:-rotate-[30deg] group-hover:scale-200 "
				/>
			</div>
		</>
	);
};
