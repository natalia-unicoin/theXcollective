import React from 'react';
import { motion } from 'framer-motion';

const Manifesto = () => {
    return (
        <section id="manifesto" className="flex items-center py-12 md:py-20 bg-white text-black">
            <div className="container mx-auto px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter mb-8 leading-tight"
                    >
                        We Believe the Future Belongs to Those Who Build It <span className="font-hand text-5xl md:text-7xl lg:text-9xl text-[#317788] lowercase">together</span>.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-gray-800"
                    >
                        <span className="whitespace-nowrap font-bold">The X Collective</span> is not just a community; it's a movement. We are redefining what it means to be wealthy by valuing creativity, connection, and impact over mere accumulation.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default Manifesto;
