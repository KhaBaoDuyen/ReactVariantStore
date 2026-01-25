import { Link } from "react-router";
import { formatDate } from "~/utils/formatDate";
import type { BlogCardItem } from "./BlogCard.type";

export const BlogCard = ({
	id,
	title = "Voiceflow Pro – Giải pháp Chatbot & Voicebot chuyên nghiệp",
	slug,
	image = "/assets/images/banner-2.jpg",
	descripton = "Voiceflow Pro – Giải pháp Chatbot & Voicebot chuyên nghiệp Voiceflow Pro – Giải pháp Chatbot & Voicebot chuyên nghiệp",
	nameTab = "Chia sẻ kinh nghiệm",
	createdAt,
}: BlogCardItem) => {
	return (
		<>
			<Link to={`/bai-viet/${slug}`} key={id} className="">
				<div
					className="bg-white rounded-xl transform transition-all duration-300 ease-in-out  
            group shadow hover:shadow-md"
				>
					<div className="overflow-hidden rounded-xl max-h-[19rem] min-h-[19rem]">
						<img
							src={image}
							alt={`anh blog`}
							className="h-full w-full object-contain group-hover:scale-150 group-hover:-rotate-6
                transform transition-all duration-300 ease-in-out"
						/>
					</div>
					<div className="p-2">
						<span className="flex justify-between lg:text-md text-sm items-center ">
							<p className="text-muted ">{formatDate(createdAt)}</p>
							<p className="bg-accent-300 rounded w-fit px-2">{nameTab}</p>
						</span>
						<h1 className="lg:text-lg text-md font-bold line-clamp-2">
							{title}
						</h1>
						<p className="text-muted line-clamp-3 text-sm">{descripton}</p>
					</div>
				</div>
			</Link>
		</>
	);
};
