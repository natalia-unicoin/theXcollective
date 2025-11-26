import React from 'react';
import { motion } from 'framer-motion';

const FoundingMember = () => {
    return (
        <section className="py-12 md:py-16 bg-white text-black">
            <div className="container mx-auto px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                            <img
                                src="/assets/founding-lifestyle.jpg"
                                alt="Founding Member"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter mb-8 leading-[0.9]">
                                Become a Founding Member
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                                Join the initial cohort of visionaries shaping the future of <span className="whitespace-nowrap font-bold">The X Collective</span>. Limited spots available for early contributors.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-10">
                                {["Early Access", "Governance Rights", "Network"].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium uppercase tracking-wide">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#ebe462] text-black px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#d4cd55] transition-colors rounded-full"
                            >
                                Apply Now
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundingMember;
