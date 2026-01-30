import { Outlet } from "react-router";
import { Sidebar } from "~/components/layout/admin/Sidebar/Sidebar";
import { Topbar } from "~/components/layout/admin/Topbar/Topbar";

export default function AdminLayout() {
	return (
		<div className="flex min-h-screen bg-surface-50">
			<Sidebar />

			<div className="flex flex-1 flex-col">
				<Topbar />
				<main className="flex-1 p-6">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
