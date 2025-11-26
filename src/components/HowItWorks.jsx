import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const steps = [
        {
            id: "01",
            title: "Apply",
            description: "Submit your profile. We curate a diverse group of creators and builders who share our vision.",
            image: "assets/hiw-new-1.jpg",
            color: "#e66222" // Orange
        },
        {
            id: "02",
            title: "Connect",
            description: "Access the private discord, attend exclusive events, and meet your co-conspirators.",
            image: "assets/hiw-new-2.jpg",
            color: "#317788" // Teal
        },
        {
            id: "03",
            title: "Build & Earn",
            description: "Launch projects, contribute to the ecosystem, and earn tokens for your impact.",
            image: "assets/hiw-new-3.jpg",
            color: "#c0dee8" // Light Blue
        }
    ];

    return (
        <section id="how-it-works" className="min-h-screen flex items-center py-12 bg-white text-black overflow-hidden">
            <div className="container mx-auto px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter mb-12 text-center"
                >
                    How It <span className="font-hand text-5xl md:text-7xl lg:text-9xl text-[#317788] lowercase">works</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group h-[600px] perspective-1000 cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
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
                                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
