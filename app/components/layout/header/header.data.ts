import { HeaderGroup } from "./header.type";

export const headerData: HeaderGroup[] = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Sản phẩm",
        path: "/san-pham",
        items: [
            { name: "Bánh lạnh", path: "/san-pham/banh-lanh" },
            { name: "Bánh đông lạnh", path: "/san-pham/banh-dong-lanh" },
            { name: "Bánh ngọt", path: "/san-pham/banh-ngot" },
            { name: "Bánh dài hạn", path: "/san-pham/banh-dai-han" },
        ],

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

]