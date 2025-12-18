import { HeaderGroup } from "./header.type";

export const HeaderData: HeaderGroup[] = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Sản phẩm",
        path: "/san-pham",
        categories: [
            { name: "Bàn phím cơ", path: "/san-pham/ban-phim-co" },
            { name: "Chuột Gaming", path: "/san-pham/chuot-gaming" },
            { name: "Màn hình 4K", path: "/san-pham/man-hinh" },
            { name: "Tai nghe", path: "/san-pham/tai-nghe" },
            { name: "Lót chuột ", path: "/san-pham/lot-chuot" },
            { name: "Loa Bluetooth", path: "/san-pham/loa" },
            { name: "Tay cầm chơi game", path: "/san-pham/tay-cam" },
            { name: "Webcam Full HD", path: "/san-pham/webcam" },
            { name: "Giá đỡ màn hình", path: "/san-pham/arm-man-hinh" },
        ],
        brands: [
            {
                name: "Logitech",
                path: "/thuong-hieu/logitech",
                image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Logitech_logo.svg"
            },
            {
                name: "Razer",
                path: "/thuong-hieu/razer",
                image: "https://upload.wikimedia.org/wikipedia/en/4/40/Razer_snake_logo.svg"
            },
            {
                name: "Corsair",
                path: "/thuong-hieu/corsair",
                image: "https://upload.wikimedia.org/wikipedia/en/0/03/Corsair_Logo.svg"
            },
            {
                name: "Akko",
                path: "/thuong-hieu/akko",
                image: "https://akkogear.com.vn/wp-content/uploads/2020/07/logo-akko.png"
            },
            {
                name: "SteelSeries",
                path: "/thuong-hieu/steelseries",
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/SteelSeries_logo.svg"
            },
            {
                name: "Apple",
                path: "/thuong-hieu/apple",
                image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            },
            {
                name: "Samsung",
                path: "/thuong-hieu/samsung",
                image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
            },
            {
                name: "Asus ROG",
                path: "/thuong-hieu/asus",
                image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/ROG_Logo.svg"
            },
        ],
        popularSearches: [
            { name: "Bàn phím Akko 3068", path: "/tim-kiem/akko-3068" },
            { name: "Chuột Logitech G Pro X", path: "/tim-kiem/g-pro-x" },
            { name: "Màn hình Dell UltraSharp", path: "/tim-kiem/dell-ultrasharp" },
            { name: "Keycap PBT xuyên led", path: "/tim-kiem/keycap" },
            { name: "Bàn di chuột cỡ XL", path: "/tim-kiem/pad-xl" },
        ]
    },
    {
        title: "Giới thiệu",
        path: "/gioi-thieu",
    },
    {
        title: "Hệ thống cửa hàng",
        path: "/he-thong-cua-hang",
    },
    {
        title: "Bài viết",
        path: "/bai-viet",
    },
    {
        title: "Liên hệ",
        path: "/lien-he",
    },
];