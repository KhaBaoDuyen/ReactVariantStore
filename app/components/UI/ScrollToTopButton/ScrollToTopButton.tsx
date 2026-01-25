import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
export const ScrollToTopButton = () => {

    const handleSubmit = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <motion.button
            onClick={handleSubmit}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed lg:bottom-6 bottom-20 lg:right-6 right-3 z-50 
                 bg-accent-600 bg-accent-hover text-white 
                 w-10 h-10 rounded-md 
                 flex items-center justify-center
                 shadow-lg"
        >
            <ArrowUp className="w-5 h-5" />
        </motion.button>
    )
}