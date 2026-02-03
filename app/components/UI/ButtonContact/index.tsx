import { ButtonContact } from "./buttonContact";
import { BUTTON_CONTACT_DATA } from "./buttonContact.data";

export const ContactGroup = () => {
	return (
		<div className="flex flex-col gap-6">
			{BUTTON_CONTACT_DATA.map((item, index) => (
				<ButtonContact key={index} {...item} />
			))}
		</div>
	);
};
