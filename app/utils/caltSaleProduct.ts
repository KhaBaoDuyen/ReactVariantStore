export const calcSalePercent = (price: number, salePrice?: number): number | null => {
  if (!salePrice || salePrice >= price || price <= 0) return null;

  return Math.round(((price - salePrice) / price) * 100);
};
