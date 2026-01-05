import "./buttonContact.scss";
import type { ButtonContactProps } from "./buttonContact.type";

export const ButtonContact = ({
  title,
  description,
  href,
  icon: Icon,
}: ButtonContactProps) => {
  return (
    <a href={href} className="flex relative items-center gap-4 w-fit" aria-label={title}>
      <div className="absolute">
        <span className="pulse-ring absolute inset-0 rounded-full"></span>

        <div className="relative z-50 bg-primary-600 p-3 w-fit rounded-full">
          <Icon className="text-white w-10 h-10" />
        </div>
      </div>

      <div className="ml-10 w-fit">
        <p className="text-white bg-primary-600 text-center px-10 w-fit rounded-tr-md">
          {title}
        </p>
        <p className="text-primary-500 bg-accent-600 rounded-md w-fit p-1 px-10 font-bold">
          {description}
        </p>
      </div>
    </a>
  );
};
