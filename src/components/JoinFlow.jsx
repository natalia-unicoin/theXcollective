import React from 'react';
import { motion } from 'framer-motion';

const JoinFlow = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/lifestyle-hero.jpg"
                    alt="Join Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="max-w-5xl mx-auto text-center text-white">
                    <motion.h2
                        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 md:mb-10 tracking-tighter leading-none"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Ready to Shape<br />
                        the Future?
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl font-light mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Join a curated community of visionaries. Access exclusive opportunities, governance rights, and a network that actually builds.
                    </motion.p>

                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <button className="w-full md:w-auto bg-[#ebe462] text-black px-8 md:px-12 py-4 md:py-6 text-sm md:text-base font-bold tracking-widest uppercase hover:bg-[#d4cd55] transition-all duration-300 rounded-full shadow-2xl hover:scale-105">
                            Apply for Membership
                        </button>
                        <button className="w-full md:w-auto px-8 md:px-12 py-4 md:py-6 text-sm md:text-base font-bold text-white border border-white/30 hover:bg-white/10 transition-all duration-300 rounded-full uppercase tracking-widest backdrop-blur-sm">
                            View Membership Tiers
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default JoinFlow;
