import { ButtonAnimationProps } from "./buttonAnimation.type";

export const ButtonAnimation = ({ name, path, imageAlt }: ButtonAnimationProps) => {
    return (
        <button className="bg-button-gradient border-1 border-white/20 min-w-max  p-1 rounded-md text-white
           ml-2 hover:bg-accent-700 flex group overflow-hidden">
            <img src={`/assets/images/brands/${imageAlt}`} alt={name}
                className="h-6 w-6 transition-transform duration-300 ease-out
           group-hover:scale-200  group-hover:-rotate-[30deg] z-5"/>
            <p className="ml-2 z-10">{name}</p>
        </button>
    );
}