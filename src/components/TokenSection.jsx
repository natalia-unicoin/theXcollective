import React from 'react';
import { motion } from 'framer-motion';

const TokenSection = () => {
    const earnItems = [
        "Content Creation",
        "Event Hosting",
        "Community Leadership",
        "Referrals & Growth",
        "Impact Projects"
    ];

    const redeemItems = [
        "Exclusive Merchandise",
        "Event Tickets",
        "Mentorship Sessions",
        "Project Funding",
        "Governance Voting"
    ];

    return (
        <section id="token" className="min-h-screen flex items-center py-12 md:py-16 bg-[#f9f9f9] text-black overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="mb-12 md:mb-16 max-w-4xl">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter mb-6 md:mb-8">
                        $XCOLL
                    </h2>
                    <p className="text-lg md:text-xl font-light leading-relaxed text-gray-600 border-l-4 border-[#ebe462] pl-6 md:pl-8">
                        A Utility Token Designed to Reward Value Creation. Earn by Contributing to the Community, Redeem for Exclusive Access and Experiences.
                    </p>
                </div>

                {/* Split Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Earn Card */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#317788]/5 rounded-full blur-3xl -mr-24 -mt-24 md:-mr-32 md:-mt-32 transition-colors group-hover:bg-[#317788]/10" />

                        <h3 className="text-5xl md:text-6xl font-hand font-bold mb-8 md:mb-12 text-[#317788]">
                            Earn
                        </h3>

                        <ul className="space-y-4 md:space-y-6 relative z-10">
                            {earnItems.map((item, i) => (
                                <li key={i} className="flex items-center gap-6 text-lg md:text-xl font-medium text-gray-700 border-b border-gray-100 pb-3 md:pb-4 last:border-0 group/item">
                                    <span className="font-hand text-3xl md:text-4xl text-[#317788]/50 group-hover/item:text-[#317788] transition-colors">0{i + 1}</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Redeem Card */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#e66222]/5 rounded-full blur-3xl -mr-24 -mt-24 md:-mr-32 md:-mt-32 transition-colors group-hover:bg-[#e66222]/10" />

                        <h3 className="text-5xl md:text-6xl font-hand font-bold mb-8 md:mb-12 text-[#e66222]">
                            Redeem
                        </h3>

                        <ul className="space-y-4 md:space-y-6 relative z-10">
                            {redeemItems.map((item, i) => (
                                <li key={i} className="flex items-center gap-6 text-lg md:text-xl font-medium text-gray-700 border-b border-gray-100 pb-3 md:pb-4 last:border-0 group/item">
                                    <span className="font-hand text-3xl md:text-4xl text-[#e66222]/50 group-hover/item:text-[#e66222] transition-colors">0{i + 1}</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TokenSection;
