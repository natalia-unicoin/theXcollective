import React from 'react';
import { motion } from 'framer-motion';

const valueProps = [
    {
        title: "Experiences and Lifestyle",
        description: "Access wellness programs, retreats, cultural events, travel opportunities, and premium lifestyle partnerships."
    },
    {
        title: "Growth and Learning",
        description: "Workshops on investing, crypto, emotional wealth, entrepreneurship, and personal transformation."
    },
    {
        title: "Visibility and Access",
        description: "Community spotlights, ambassador opportunities, media exposure, collaborations, and leadership roles."
    },
    {
        title: "Financial Upside",
        description: "Earn community tokens for contributions and redeem them for experiences, education, partner benefits, and fungible tokens."
    },
    {
        title: "Impact",
        description: "Participate in mission-driven programs focused on inclusion, entrepreneurship, and wellbeing."
    }
];

const ValueProp = () => {
    return (
        <section className="section bg-white text-black py-24">
            <div className="container mx-auto px-4">
                <div className="mb-16 max-w-3xl">
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4 block">What You Gain</span>
                    <h2 className="text-4xl md:text-6xl font-light leading-tight">Tangible Value. Real Upside. A Better Way to Live.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {valueProps.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border-t border-gray-200 pt-6"
                        >
                            <h3 className="text-2xl font-normal mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-light">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProp;
