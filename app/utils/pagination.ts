export const paginateProducts = <T,>(
  products: T[],
  currentPage: number,
  pageSize = 12
) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return products.slice(startIndex, endIndex);
};
