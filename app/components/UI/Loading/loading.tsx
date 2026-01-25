import type { LoadingProps } from "./loading.type";
export default function Loading({ text = "Đang tải" }: LoadingProps) {
	return (
		<div className="  flex flex-col justify-center items-center gap-4 py-10 relative">
			<div className=" w-16 h-16">
				<div className="loader absolute inset-0 border-8 rounded-full border-gray-200 border-t-blue-500"></div>
				<div className="loader absolute inset-2 border-4 rounded-full border-gray-100 border-t-blue-300"></div>
			</div>
			<p>{text}...</p>
		</div>
	);
}
