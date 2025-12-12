'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '@/context/ModalContext';

const Manifesto = () => {
    const { openManifesto } = useModal();
    return (
        <section id="manifesto" className="flex items-center py-12 md:py-20 bg-[#f9f9f9] text-black">
            <div className="container mx-auto px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter mb-8 leading-[0.9]"
                    >
                        We Believe the Future Belongs to Those Who Build It <span className="font-hand text-5xl md:text-7xl lg:text-9xl text-[#2992A3]">Together.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-[#464243]"
                    >
                        <span className="whitespace-nowrap font-bold">TheXCollective</span> is not just a community; it's a movement. We are redefining what it means to be wealthy by valuing creativity, connection, and impact over mere accumulation.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-12"
                    >
                        <button
                            onClick={openManifesto}
                            className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-[#EBE563] hover:text-black transition-colors shadow-lg"
                        >
                            Read Full Manifesto
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Manifesto;
