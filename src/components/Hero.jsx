import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-white text-white">
            {/* Background Image - No Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="assets/hero-lifestyle-2.jpg"
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
                <motion.h1
                    className="text-3xl md:text-5xl lg:text-7xl font-display font-bold tracking-tighter mb-8 drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    A Decentralized <span className="font-hand text-4xl md:text-6xl lg:text-8xl text-[#ebe462] pr-3">Community</span> for Creators, Builders, and Visionaries.
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl lg:text-3xl font-medium mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    Redefining wealth through community, creativity, and shared ownership.
                </motion.p>

                <motion.button
                    className="bg-[#ebe462] text-black px-8 py-4 md:px-10 md:py-5 text-sm md:text-base font-bold tracking-widest uppercase hover:bg-[#d4cd55] transition-all duration-300 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    Join the Collective
                </motion.button>
            </div>
        </section>
    );
};

export default Hero;
