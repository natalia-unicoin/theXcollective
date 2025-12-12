'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '@/utils/image';

const HowItWorks = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = React.useRef(null);

    const steps = [
        {
            id: "01",
            title: "Apply",
            description: "Submit your profile. We curate a diverse group of creators and builders who share our vision.",
            image: getImagePath("assets/hiw-step1-yoga.jpg"),
            color: "#E2622B" // Orange
        },
        {
            id: "02",
            title: "Connect",
            description: "Access the private community, attend exclusive events, and meet your co-conspirators.",
            image: getImagePath("assets/hiw-community.jpg"),
            color: "#2992A3" // Teal
        },
        {
            id: "03",
            title: "Build & Earn",
            description: "Launch projects, contribute to the ecosystem, and earn tokens for your impact.",
            image: getImagePath("assets/hiw-new-3.jpg?v=3"),
            color: "#BEE3EE" // Light Blue
        }
    ];

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const width = scrollContainerRef.current.offsetWidth;
            const index = Math.round(scrollLeft / width);
            setActiveIndex(index);
        }
    };

    return (
        <section id="how-it-works" className="min-h-screen flex items-center py-12 bg-white text-black overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter mb-12 text-center"
                >
                    How It <span className="font-hand text-5xl md:text-7xl lg:text-9xl text-[#2992A3]">Works.</span>
                </motion.h2>

                {/* Responsive Layout: Horizontal Scroll on Mobile, Grid on Desktop */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                >
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="block min-w-[85vw] md:min-w-0 snap-center"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="group h-[500px] md:h-[600px] perspective-1000 cursor-pointer w-full">
                                <motion.div
                                    className="relative w-full h-full transition-all duration-700 preserve-3d"
                                    style={{
                                        transform: hoveredIndex === index ? "rotateY(180deg)" : "rotateY(0deg)",
                                    }}
                                >
                                    {/* Front Side */}
                                    <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-lg bg-gray-50">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                                        {/* Large Number Overlay */}
                                        <span
                                            className="absolute top-4 right-6 text-8xl font-display font-bold opacity-50 z-10"
                                            style={{ color: "white" }}
                                        >
                                            {step.id}
                                        </span>

                                        <div className="absolute bottom-8 left-8">
                                            <h3 className="text-5xl font-hand font-bold text-white tracking-tight">
                                                {step.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Back Side */}
                                    <div
                                        className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-12 flex flex-col justify-center items-center text-center bg-white border-2"
                                        style={{ borderColor: step.color }}
                                    >
                                        <span
                                            className="text-6xl font-display font-bold mb-8 opacity-20"
                                            style={{ color: step.color }}
                                        >
                                            {step.id}
                                        </span>

                                        <h3
                                            className="text-5xl font-hand font-bold mb-8"
                                            style={{ color: step.color }}
                                        >
                                            {step.title}
                                        </h3>
                                        <p className="text-xl text-[#464243] leading-relaxed font-light">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Scroll Indicator */}
                <div className="flex md:hidden justify-center gap-2 mt-4">
                    {steps.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-8 bg-black' : 'w-2 bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
