import { Outlet } from "react-router";
import { ScrollToTopButton } from "~/components/UI/ScrollToTopButton/ScrollToTopButton";
import { Footer } from "~/components/layout/footer/footer";
import { Header } from "~/components/layout/header/header";
import bannerFooter from "/assets/images/banner-footer.png";

export default function ClientLayout() {
	return (
		<div className="flex min-h-screen flex-col bg-primary-50">
			<Header />

			<main className="relative flex-1">
				<div className="relative z-10">
					<Outlet />
				</div>

				<img
					src={bannerFooter}
					alt=""
					className="pointer-events-none absolute bottom-0 left-0 z-0 w-full"
				/>

				<ScrollToTopButton />
			</main>

			<Footer />
		</div>
	);
}
