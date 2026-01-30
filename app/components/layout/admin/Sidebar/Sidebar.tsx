export const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white min-h-screen">
            <div className="p-4 text-2xl font-bold border-b border-gray-700">
                Admin Panel
            </div>
            <nav className="p-4">
                <ul>
                    <li className="mb-4">
                        <a href="/admin" className="hover:underline">Dashboard</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}