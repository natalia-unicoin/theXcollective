import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
        >
            <div className="container mx-auto px-6 py-6 flex justify-between items-center">
                {/* Logo */}
                <div className="w-48">
                    <img src="/assets/logo-full.png" alt="The X Collective" className="w-full h-auto" />
                </div>



                <div className="hidden md:flex items-center gap-8">
                    {/* Dummy Language Selector */}
                    <div className="flex items-center gap-2 text-sm font-medium">
                        <span className="text-black font-bold cursor-pointer">EN</span>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-400 hover:text-black transition-colors cursor-pointer">ES</span>
                    </div>

                    <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                        Join
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
