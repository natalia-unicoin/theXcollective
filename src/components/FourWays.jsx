import React from 'react';
import { motion } from 'framer-motion';

const FourWays = () => {
    const cards = [
        {
            title: "Creator",
            description: "Create content, art, and experiences. Monetize your passion directly.",
            image: "/assets/lifestyle-1.jpg",
            color: "#e66222" // Orange (was Pink)
        },
        {
            title: "Builder",
            description: "Develop tools, apps, and infrastructure for the ecosystem.",
            image: "/assets/lifestyle-2.jpg",
            color: "#317788" // Teal (was Blue)
        },
        {
            title: "Investor",
            description: "Support projects you believe in and share in their success.",
            image: "/assets/lifestyle-3.jpg",
            color: "#c0dee8" // Light Blue (was Green)
        },
        {
            title: "Connector",
            description: "Bring people together. Community managers and event organizers.",
            image: "/assets/lifestyle-4.jpg",
            color: "#ebe462" // Yellow
        }
    ];

    return (
        <section className="py-12 md:py-20 bg-white text-black">
            <div className="container mx-auto px-8">
                {/* Oddity Style Header */}
                {/* Oddity Style Header - Centered Layout */}
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="max-w-5xl mx-auto mb-8">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter leading-[0.9] uppercase">
                            Our <span className="font-hand text-5xl md:text-7xl lg:text-9xl text-[#ebe462] lowercase ml-2 md:ml-4">community</span> <br />
                            Delivers Radical <br />
                            <span className="font-hand text-5xl md:text-7xl lg:text-9xl text-[#e66222] lowercase">collaboration</span>
                        </h2>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg md:text-xl font-light leading-relaxed text-gray-600">
                            We design entirely new ways to collaborate, powered by decentralized technology. We build platforms that learn from our users and deploy value directly to those who create it. Choose your path and start shaping the future.
                        </p>
                    </div>
                </div>

                {/* Vertical Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative h-[600px] w-full overflow-hidden rounded-3xl cursor-pointer"
                        >
                            {/* Background Image */}
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FourWays;
