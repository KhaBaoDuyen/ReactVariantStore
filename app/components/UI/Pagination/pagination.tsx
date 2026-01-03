import { Link } from "react-router";
import { getPaginationPages } from "./paginationPages";

type PaginationProps = {
  currentPage: number;
  totalProducts: number;
  pageSize: number;
  basePath: string;
};

export const Pagination = ({
  currentPage,
  totalProducts,
  pageSize,
  basePath,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalProducts / pageSize);

  if (totalPages <= 1) return null;

  const pages = getPaginationPages(totalPages);

  return (
    <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
       <Link
        to={`${basePath}?page=${currentPage - 1}`}
        className={`px-3 py-2 rounded border ${
          currentPage === 1
            ? "pointer-events-none opacity-40"
            : "hover:bg-primary-600 hover:text-white"
        }`}
      >
        ‹
      </Link>

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-3 py-2 text-gray-400">
            ...
          </span>
        ) : (
          <Link
            key={page}
            to={`${basePath}?page=${page}`}
            className={`px-4 py-2 rounded border ${
              page === currentPage
                ? "bg-primary-600 text-white"
                : "hover:bg-primary-100"
            }`}
          >
            {page}
          </Link>
        )
      )}

       <Link
        to={`${basePath}?page=${currentPage + 1}`}
        className={`px-3 py-2 rounded border ${
          currentPage === totalPages
            ? "pointer-events-none opacity-40"
            : "hover:bg-primary-600 hover:text-white"
        }`}
      >
        ›
      </Link>
    </div>
  );
};
