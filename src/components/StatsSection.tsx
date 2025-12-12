'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const StatItem = ({ value, label, suffix = "", color }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepTime = duration / steps;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="flex flex-col items-center text-center">
            <div
                className="text-5xl md:text-7xl font-display font-bold mb-2 md:mb-4 tracking-tighter"
                style={{ color: color }}
            >
                {count.toLocaleString()}{suffix}
            </div>
            <div className="text-2xl md:text-3xl font-hand font-bold text-gray-600 whitespace-pre-line leading-none">
                {label}
            </div>
        </div>
    );
};

const StatsSection = () => {
    const stats = [
        { label: "Active\nMembers", value: 500, suffix: "+", color: "#EBE563" }, // Creator Yellow
        { label: "Treasury\nValue", value: 10, suffix: "M", color: "#2992A3" }, // Investor Teal
        { label: "Projects\nLaunched", value: 50, suffix: "+", color: "#E2622B" }, // Builder Orange
        { label: "Global\nEvents", value: 12, suffix: "", color: "#BEE3EE" }, // Connector Light Blue
    ];

    return (
        <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">
                    {/* Title */}
                    <div className="w-full md:w-1/3 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-display font-black mb-6 leading-tight text-black">
                            Unstoppable <br />
                            <span className="font-hand text-5xl md:text-6xl text-[#E2622B]">Momentum.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light">
                            Our community is growing fast. Join the movement redefining wealth and ownership.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {stats.map((stat, index) => (
                            <StatItem key={index} {...stat} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
