import type { Route } from "./+types/product";
import StoreMapPage from "~/pages/storeMap/storeMap";

export function meta( {}: Route.MetaArgs){
    return[
        { title: "Hệ thống của hàng" },
        { name: "description", content: "Khám phá hệ thống của hàng Yejara" },
    ];
}

export default function Blogs() {
    return <StoreMapPage />;
}