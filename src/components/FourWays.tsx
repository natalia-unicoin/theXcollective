'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { getImagePath } from '@/utils/image';

const FourWays = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const ways = [
        {
            title: "Creator",
            description: "Create content, art, and experiences. Monetize your passion directly.",
            image: getImagePath("assets/creator-main.jpg?v=3"),
            color: "#EBE563", // Yellow
            imagePosition: "object-[center_70%]" // Focus on the girl sitting
        },
        {
            title: "Builder",
            description: "Develop tools, apps, and infrastructure for the ecosystem.",
            image: getImagePath("assets/builder-main.jpg"),
            color: "#2992A3" // Teal
        },
        {
            title: "Investor",
            description: "Support projects you believe in and share in their success.",
            image: getImagePath("assets/investor-main.jpg?v=7"),
            color: "#BEE3EE", // Light Blue
            imagePosition: "object-[75%_center]" // Focus on the girl
        },
        {
            title: "Connector",
            description: "Bring people together. Community managers and event organizers.",
            image: getImagePath("assets/connector-main.jpg"),
            color: "#E2622B" // Orange
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
        <section id="community" className="py-12 md:py-20 bg-white text-black">
            <div className="container mx-auto px-4 md:px-8">
                {/* Oddity Style Header */}
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="max-w-5xl mx-auto mb-8">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter leading-[0.9]">
                            Our <span className="font-hand text-5xl md:text-7xl lg:text-9xl text-[#EBE563] ml-2 md:ml-4">Community</span> <br />
                            Delivers Radical <br />
                            <span className="font-hand text-5xl md:text-7xl lg:text-9xl text-[#E2622B]">Collaboration.</span>
                        </h2>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg md:text-xl font-light leading-relaxed text-[#464243]">
                            We design entirely new ways to collaborate, powered by decentralized technology. We build platforms that learn from our users and deploy value directly to those who create it. Choose your path and start shaping the future.
                        </p>
                    </div>
                </div>

                {/* Responsive Layout: Horizontal Scroll on Mobile, Grid on Desktop */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                >
                    {ways.map((card, index) => (
                        <div
                            key={index}
                            className="block min-w-[85vw] md:min-w-0 snap-center"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative h-[500px] md:h-[600px] w-full overflow-hidden rounded-3xl cursor-pointer"
                            >
                                {/* Background Image */}
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${card.imagePosition || 'object-center'}`}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8">
                                    <h3
                                        className="text-6xl font-hand font-bold text-white mb-4 tracking-tighter leading-none"
                                        style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                                    >
                                        {card.title}
                                    </h3>

                                    <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                                        <p className="text-lg text-white/90 font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 pb-4">
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Arrow/Indicator - Top Right */}
                                    <div
                                        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transform rotate-[-45deg] group-hover:rotate-0 group-hover:bg-white transition-all duration-500"
                                        style={{ color: card.color }}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Mobile Scroll Indicator */}
                <div className="flex md:hidden justify-center gap-2 mt-4">
                    {ways.map((_, index) => (
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

export default FourWays;
