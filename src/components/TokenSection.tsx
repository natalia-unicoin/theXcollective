'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TokenSection = () => {
    const governanceItems = [
        "DAO Voting Rights",
        "Strategic Decisions",
        "Treasury Management",
        "Protocol Upgrades",
        "Long-term Value"
    ];

    const utilityItems = [
        "Exclusive Access",
        "Event Tickets",
        "Merch & Drops",
        "Community Rewards",
        "Member Experiences"
    ];

    return (
        <section id="token" className="min-h-screen flex items-center py-12 md:py-24 bg-[#f9f9f9] text-black overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="mb-16 md:mb-20 max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter mb-6 md:mb-8">
                        Dual Token Economy
                    </h2>
                    <p className="text-lg md:text-xl font-light leading-relaxed text-[#464243] max-w-2xl mx-auto">
                        A balanced ecosystem designed for both stability and active participation. Governance for the future, Utility for the now.
                    </p>
                </div>

                {/* Split Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {/* Governance Card */}
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2992A3]/5 rounded-full blur-3xl -mr-32 -mt-32 transition-colors group-hover:bg-[#2992A3]/10" />

                        <div className="mb-8">
                            <span className="inline-block px-4 py-1 rounded-full bg-[#2992A3]/10 text-[#2992A3] font-bold text-sm tracking-widest uppercase mb-4">
                                Governance
                            </span>
                            <h3 className="text-6xl md:text-7xl font-display font-bold text-black mb-2">
                                ú
                            </h3>
                            <p className="text-gray-500 font-medium">The Voice of the DAO</p>
                        </div>

                        <ul className="space-y-4 mb-12 flex-grow relative z-10">
                            {governanceItems.map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg text-[#464243] border-b border-gray-50 pb-3 last:border-0">
                                    <div className="w-2 h-2 rounded-full bg-[#2992A3]" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://unicoin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full block text-center bg-[#2992A3] text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#237d8b] transition-colors relative z-10"
                        >
                            Buy on Unicoin.com
                        </a>
                    </div>

                    {/* Utility Card */}
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E2622B]/5 rounded-full blur-3xl -mr-32 -mt-32 transition-colors group-hover:bg-[#E2622B]/10" />

                        <div className="mb-8">
                            <span className="inline-block px-4 py-1 rounded-full bg-[#E2622B]/10 text-[#E2622B] font-bold text-sm tracking-widest uppercase mb-4">
                                Utility
                            </span>
                            <h3 className="text-6xl md:text-7xl font-display font-bold text-black mb-2">
                                uˣ
                            </h3>
                            <p className="text-gray-500 font-medium">Fuel for Experiences</p>
                        </div>

                        <ul className="space-y-4 mb-12 flex-grow relative z-10">
                            {utilityItems.map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg text-[#464243] border-b border-gray-50 pb-3 last:border-0">
                                    <div className="w-2 h-2 rounded-full bg-[#E2622B]" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://unicoinx.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full block text-center bg-[#E2622B] text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#c55525] transition-colors relative z-10"
                        >
                            Buy on UnicoinX.io
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TokenSection;
