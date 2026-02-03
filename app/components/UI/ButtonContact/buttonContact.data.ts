import { Mail, PhoneCall } from "lucide-react";
import type { ButtonContactData } from "./buttonContact.type";

export const BUTTON_CONTACT_DATA: ButtonContactData[] = [
	{
		title: "Phone",
		description: "0337.019.197",
		value: "0337019197",
		href: "tel:0337019197",
		icon: PhoneCall,
	},
	{
		title: "Email",
		description: "duyenktb141025@gmail.com",
		value: "duyenktb141025@",
		href: "mailto:duyenktb141025@gmail.com",
		icon: Mail,
	},
];
