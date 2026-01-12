import ContactPage from "~/pages/main/contact/contact";
import { Route } from "../+types/root";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Liên hệ" },
        { name: "description", content: "Liên hệ với chúng tôi để được hỗ trợ và tư vấn về các sản phẩm gaming." },
    ];
}

export default function Contact() {
    return <ContactPage />;
}