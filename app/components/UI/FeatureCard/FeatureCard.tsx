import { motion } from "framer-motion";
import type { FeatureCardProps } from "./FeatureCard.type";
export const FeatureCard = ({
    image,
    title,
    description,
    offsetY = -50 ,
}: FeatureCardProps) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: offsetY  }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="" >
                <div className="bg-white rounded-xl p-3 flex flex-col shadow hover:shadow-xl justify-center items-center">
                    <img src={image} alt="" className="w-12 h-12" />
                    <h1 className="title-primary-600 text-lg">{title}</h1>
                    <p className="text-muted text-sm text-center">{description}</p>
                </div>
            </motion.div>
        </>
    )
}