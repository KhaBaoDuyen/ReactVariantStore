import { Outlet } from "react-router";
import { Sidebar } from "~/components/layout/admin/Sidebar/Sidebar";
import { Topbar } from "~/components/layout/admin/Topbar/Topbar";

export default function AdminLayout() {
	return (
		<div className="flex min-h-screen ">
			<Sidebar />

			<div className="flex flex-1 pl-0 pt-0 p-10 bg-white flex-col">
				<Topbar />
				<main className="flex-1 rounded-2xl bg-surface-50 p-6">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
