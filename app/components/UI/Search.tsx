export const Search = () => {
    return (
        <>
            <div className="hidden lg:flex lg:w-5/12  items-center bg-white/20 rounded-md px-3 pr-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input type="text" className="p-2 w-full bg-transparent placeholder:text-gray-300 outline-none border-none text-white"
                    placeholder="Tìm kiếm..." />
                <button className="bg-accent-600 min-w-max px-6 p-2 rounded text-white ml-2 hover:bg-accent-700">
                    Tìm kiếm
                </button>
            </div>
        </>
    );
};