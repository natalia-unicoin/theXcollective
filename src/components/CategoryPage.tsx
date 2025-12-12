'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { categoriesData } from '@/data/categoriesData';
import { getImagePath } from '@/utils/image';
import { useModal } from '@/context/ModalContext';
import type { CategoryType } from '@/types';

interface CategoryPageProps {
    type: CategoryType;
}

const CategoryPage = ({ type }: CategoryPageProps) => {
    const { openJoinModal } = useModal();
    const data = categoriesData[type];
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [type]);

    if (!data) {
        return <div className="min-h-screen flex items-center justify-center text-black bg-white">Category not found</div>;
    }

    const otherCategories = Object.values(categoriesData).filter(cat => cat.id !== type);

    // Scroll Animations
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

    return (
        <div ref={containerRef} className="min-h-screen bg-white text-black selection:bg-[#EBE563] selection:text-black font-sans">

            {/* 1. Immersive Hero Section */}
            <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden sticky top-0 z-0">
                {/* Background (Video Placeholder / Image) */}
                <motion.div
                    style={{ opacity: heroOpacity, scale: heroScale }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={getImagePath(data.image)}
                        alt={data.title}
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white" />
                </motion.div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`inline-block px-4 py-1 rounded-full border ${data.textColor} border-current mb-6 text-sm font-bold tracking-widest uppercase backdrop-blur-md bg-white/50`}
                    >
                        {data.title}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter text-black leading-[0.9] mb-8"
                    >
                        {data.headline}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <button
                            onClick={openJoinModal}
                            className={`${data.bgColor} text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl`}
                        >
                            Join the Collective
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Spacer for sticky hero */}
            <div className="h-screen" />

            {/* 2. Scroll Reveal Text Section */}
            <section className="relative z-10 bg-white py-32 md:py-48 px-6">
                <div className="container mx-auto max-w-4xl">
                    {data.scrollText.map((text, index) => (
                        <ScrollRevealText key={index} text={text} index={index} color={data.textColor} />
                    ))}
                </div>
            </section>

            {/* 3. Bento Grid Section */}
            <section className="relative z-10 bg-gray-50 py-32 px-6 rounded-t-[3rem] md:rounded-t-[5rem] border-t border-gray-200">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6 text-black">
                            Everything you need. <br />
                            <span className="text-gray-400">Nothing you don't.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] md:auto-rows-[300px] gap-4 md:gap-6">
                        {data.bentoGrid.map((item, index) => (
                            <BentoItem key={index} item={item} mainColor={data.color} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Carousel / Stories Section */}
            <section className="relative z-10 bg-white py-32 overflow-hidden">
                <div className="container mx-auto px-6 mb-12">
                    <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-black">
                        Success Stories
                    </h2>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto pb-12 px-6 gap-6 snap-x snap-mandatory scrollbar-hide">
                    {data.carousel.map((story, index) => (
                        <div key={index} className="flex-none w-[85vw] md:w-[400px] snap-center">
                            <div className="relative h-[500px] rounded-3xl overflow-hidden group bg-gray-100">
                                {story.image && !story.image.includes('placeholder') ? (
                                    <>
                                        <img
                                            src={getImagePath(story.image)}
                                            alt={story.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            onError={(e: any) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'none'; // Hide gradient
                                                e.target.parentElement.style.backgroundColor = data.color;
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    </>
                                ) : (
                                    <div className="w-full h-full" style={{ backgroundColor: data.color }}></div>
                                )}

                                <div className="absolute bottom-0 left-0 p-8 text-black">
                                    <p className="text-2xl font-bold leading-tight mb-4 mix-blend-multiply">"{story.quote}"</p>
                                    <p className="text-sm font-bold uppercase tracking-widest text-black/60">{story.author}</p>
                                    <p className="text-xs text-black/40">{story.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Tiers / Comparison */}
            <section className="relative z-10 bg-gray-50 py-32 px-6">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-4 text-black">
                            Choose your path.
                        </h2>
                        <p className="text-gray-500">Unlock more power as you grow.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {data.tiers.map((tier, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-3xl p-10 hover:border-black/10 transition-colors shadow-sm">
                                <h3 className="text-2xl font-bold mb-2 text-black">{tier.name}</h3>
                                <p className={`text-3xl font-display font-bold ${data.textColor} mb-8`}>{tier.price}</p>
                                <ul className="space-y-4">
                                    {tier.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-600">
                                            <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Footer CTA */}
            <section className="relative z-10 bg-white py-40 px-6 text-center">
                <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-12 text-black">
                    Ready to <span className={data.textColor}>Start?</span>
                </h2>
                <button
                    onClick={openJoinModal}
                    className="bg-black text-white px-12 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-2xl"
                >
                    Apply Now
                </button>
            </section>

            {/* Other Categories Navigation */}
            <section className="relative z-10 py-20 border-t border-gray-200 bg-white">
                <div className="container mx-auto px-6">
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-10 text-center text-gray-400">
                        Explore other roles
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {otherCategories.map((cat) => (
                            <Link
                                key={cat.id}
                                href={`/category/${cat.id}`}
                                className="group relative h-64 rounded-2xl overflow-hidden block border border-gray-200 hover:border-gray-300 transition-all"
                            >
                                <img
                                    src={getImagePath(cat.image)}
                                    alt={cat.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                    <h4 className="text-3xl font-display font-bold text-white mb-2 drop-shadow-md">{cat.title}</h4>
                                    <span className={`text-xs font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 drop-shadow-sm`}>
                                        View Role
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

// Sub-components

const ScrollRevealText = ({ text, index, color }) => {
    return (
        <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter mb-12 leading-tight text-black"
        >
            <span className={color}>{text.split(" ")[0]}</span> {text.split(" ").slice(1).join(" ")}
        </motion.p>
    );
};

const BentoItem = ({ item, mainColor }) => {
    // Size classes
    const sizeClasses = {
        large: "md:col-span-2 md:row-span-2",
        tall: "md:col-span-1 md:row-span-2",
        wide: "md:col-span-2 md:row-span-1",
        small: "md:col-span-1 md:row-span-1",
    };

    // Determine background
    // If item has a specific color, use it.
    // If item has an image, try to use it (with fallback).
    // If neither, use mainColor.

    const hasImage = item.image && !item.image.includes('placeholder');
    const bgColor = item.color || mainColor;
    const isDarkBg = item.theme === 'dark';
    const textColor = isDarkBg ? 'text-white' : 'text-black';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative rounded-3xl overflow-hidden p-8 flex flex-col justify-between group ${sizeClasses[item.size]} ${textColor}`}
            style={{ backgroundColor: hasImage ? '#f3f4f6' : bgColor }}
        >
            {hasImage && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={getImagePath(item.image)}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.style.backgroundColor = bgColor;
                        }}
                    />
                    <div className={`absolute inset-0 ${item.theme === 'light' ? 'bg-white/10' : 'bg-black/20'}`} />
                </div>
            )}

            {!hasImage && (
                <div className="absolute inset-0 z-0" style={{ backgroundColor: bgColor }} />
            )}

            <div className="relative z-10">
                <p className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2 mix-blend-multiply">{item.subtitle}</p>
                <h3 className="text-3xl font-display font-bold leading-none mix-blend-multiply">{item.title}</h3>
            </div>

            {item.description && (
                <div className="relative z-10 mt-4">
                    <p className="text-lg font-medium leading-tight opacity-90 mix-blend-multiply">{item.description}</p>
                </div>
            )}
        </motion.div>
    );
};

export default CategoryPage;
