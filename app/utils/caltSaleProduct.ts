export const caltSaleProduct = (price: number, salePrice?: number) => {
    if (salePrice && salePrice < price) {
        const discount = Math.round(((price - salePrice) / price) * 100)
        return discount
    }
}