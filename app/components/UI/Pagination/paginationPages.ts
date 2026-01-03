export const getPaginationPages = (totalPages: number) => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  return [
    1,
    2,
    3,
    "...",
    totalPages - 2,
    totalPages - 1,
    totalPages,
  ];
};
