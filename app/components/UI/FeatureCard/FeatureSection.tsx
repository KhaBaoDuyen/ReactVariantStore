import { FeatureCard } from "./FeatureCard";
import { FeatureCardData } from "./FeatureCard.data";

export const FeatureSection = () => {
    return (
        <>
            <section className="lg:w-10/12 w-11/12 pt-5 mx-auto grid lg:grid-cols-4 grid-cols-1 gap-5">
              {FeatureCardData.map((item, i)=>(
                 <FeatureCard key={i} {...item}/>
              ))}
            </section>
        </>
    )
}