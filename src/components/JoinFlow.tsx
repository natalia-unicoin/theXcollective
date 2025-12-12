'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useModal } from '@/context/ModalContext';

const JoinFlow = () => {
    const { openJoinModal } = useModal();
    return (
        <section className="relative min-h-screen flex items-end justify-center overflow-hidden pb-20 md:pb-32">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={getImagePath("assets/join-bg-final-v5.jpg")}
                    alt="Join Background"
                    className="w-full h-full object-cover object-center brightness-[0.9] contrast-[1.05]"
                />
                {/* Gradient Overlay for Text Readability - Lighter */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
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
                        <span className="font-hand text-5xl md:text-7xl lg:text-9xl">the Future?</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl md:text-2xl font-medium mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200"
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
                        <button
                            onClick={openJoinModal}
                            className="w-full md:w-auto bg-[#EBE563] text-black px-8 md:px-12 py-4 md:py-6 text-sm md:text-base font-bold tracking-widest uppercase hover:bg-[#d4cd55] transition-all duration-300 rounded-full shadow-2xl hover:scale-105"
                        >
                            Join the X Collective
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
