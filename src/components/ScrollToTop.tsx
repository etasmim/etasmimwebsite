// src/components/ScrollToTop.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";

const ScrollToTop = () => {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY < 100); // إذا فوق 100px نعتبر المستخدم في الأعلى
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollClick = () => {
        if (isTop) {
            // إذا في الأعلى → ننزل 500px
            window.scrollTo({ top: 500, behavior: "smooth" });
        } else {
            // إذا نازل → نرجع للأعلى
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <motion.button
            onClick={handleScrollClick}
            id="scrollUpDownButton"
            className="fixed bottom-6 right-6 z-[9999]
            bg-gradient-to-r from-yellow-500 to-blue-600 text-white
                 bg-secondary text-foreground 
                 rounded-full p-2 sm:p-3 
                 shadow-lg hover:bg-primary 
                 transition-colors"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
        >
            {isTop ? (
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
                <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
        </motion.button>
    );
};

export default ScrollToTop;
