import { ChevronLeft, ChevronRight } from "lucide-react";

export const ArrowNext = ({ onClick }: { onClick?: () => void }) => (
	<button
		onClick={onClick}
		className="
      absolute right-0 top-1/2 -translate-y-1/2 z-10
      w-10 h-10 rounded-full bg-white
      flex items-center justify-center
      shadow-md
      transition-all duration-300 ease-out
      hover:bg-primary-600 
    "
	>
		<ChevronRight className="w-5 h-5" />
	</button>
);
