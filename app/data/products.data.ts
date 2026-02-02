import { Product } from "~/types/product.type";

export const PRODUCTS_DATA: Product[] = [
  {
    id: "p1",
    name: "Bàn phím cơ Keychron K8 Pro 1",
    slug: "ban-phim-co-keychron-k8-pro-1",
    description: "Bàn phím cơ Keychron không dây, build chắc chắn, gõ êm.",
    price: 2590000,
    brandId: 1,
    brand: {
      id: 1,
      name: "Keychron"
    },
    categoryId: 1,
    category: {
      id: 1,
      name: "Keyboard"
    },
    images: [
      { id: 1, url: "keyboard-1.jpg" },
      { id: 2, url: "keyboard-2.jpg" },
      { id: 3, url: "keyboard-3.jpg" },
      { id: 4, url: "keyboard-4.jpg" }
    ],
    variants: [
      { id: 1, name: " 1 mode", price: 1000000, image: "anh variant 1", stock: 60 },
      { id: 2, name: " 2 mode", price: 2000000, image: "anh variant 2", stock: 20 },
      { id: 3, name: " 3 mode", price: 3000000, image: "anh variant 3", stock: 30 },
    ],
    rating: 4.5,
    sold: 0,
    status: true,
  },

  {
    id: "p2",
    name: "Chuột Logitech G Pro X Superlight",
    slug: "chuot-logitech-g-pro-x-superlight",
    description: "Chuột gaming siêu nhẹ 63g.",
    price: 3490000,
    oldPrice: 3990000,

    brandId: 2,
    brand: {
      id: 2,
      name: "Logitech"
    },

    categoryId: 2,
    category: {
      id: 2,
      name: "Mouse"
    },

    images: [
      { id: 5, url: "mouse-1.jpg" },
      { id: 6, url: "mouse-2.jpg" },
      { id: 7, url: "mouse-3.jpg" },
      { id: 8, url: "mouse-4.jpg" }
    ],
    variants: [
      { id: 1, name: " 1 mode", price: 1000000, image: "anh variant 1", stock: 60 },
      { id: 2, name: " 2 mode", price: 2000000, image: "anh variant 2", stock: 20 },
      { id: 3, name: " 3 mode", price: 3000000, image: "anh variant 3", stock: 30 },
    ],
    rating: 4.8,
    status: true,
  },

  {
    id: "p3",
    name: "Bàn phím cơ Akko 5075B Plus",
    slug: "ban-phim-co-akko-5075b-plus",
    description: "Bàn phím 75%, hỗ trợ Bluetooth.",
    price: 1890000,

    brandId: 3,
    brand: {
      id: 3,
      name: "Akko"
    },

    categoryId: 1,
    category: {
      id: 1,
      name: "Keyboard"
    },
    images: [
      { id: 9, url: "keyboard-1.jpg" },
      { id: 10, url: "keyboard-2.jpg" }
    ],
    variants: [
      { id: 1, name: " 1 mode", price: 1000000, image: "anh variant 1", stock: 60 },
      { id: 2, name: " 2 mode", price: 2000000, image: "anh variant 2", stock: 20 },
      { id: 3, name: " 3 mode", price: 3000000, image: "anh variant 3", stock: 30 },
    ],
    rating: 4.3,
    status: true,
  }
];
