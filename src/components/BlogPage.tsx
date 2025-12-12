'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { blogData } from '@/data/blogData';

import { getImagePath } from '@/utils/image';

const BlogPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const featuredPosts = blogData.filter(post => post.isFeatured);
    const featuredPost = featuredPosts[0];
    const recentPosts = blogData.filter(post => !post.isFeatured);

    return (
        <div className="min-h-screen bg-white text-black selection:bg-[#EBE563] selection:text-black pt-32 pb-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mb-20"
                >
                    <h1 className="text-7xl md:text-9xl font-display font-bold tracking-tighter mb-8 leading-[0.85]">
                        Insights & <br />
                        <span className="font-hand text-[#2992A3]">Stories.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light border-l-2 border-gray-200 pl-8 max-w-2xl">
                        Deep dives into the future of work, ownership, and community.
                    </p>
                </motion.div>

                {/* Featured Post */}
                {featuredPost && (
                    <div className="mb-24">
                        <Link href={`/blog/${featuredPost.id}`} className="group block relative h-[70vh] rounded-3xl overflow-hidden">
                            <img
                                src={getImagePath(featuredPost.image)}
                                alt={featuredPost.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl">
                                <span className="inline-block px-4 py-1 rounded-full border border-white/30 text-white text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                                    {featuredPost.category}
                                </span>
                                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight group-hover:underline decoration-2 underline-offset-8 decoration-[#EBE563]">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-lg md:text-xl text-white/80 line-clamp-2 mb-8 font-light">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center gap-4 text-white/60 text-sm font-bold uppercase tracking-widest">
                                    <span>{featuredPost.date}</span>
                                    <span>•</span>
                                    <span>{featuredPost.readTime}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}

                {/* Recent Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {recentPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <Link to={`/blog/${post.id}`}>
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-gray-100">
                                    <img
                                        src={getImagePath(post.image)}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                                        <span className="text-xs font-bold tracking-widest uppercase text-[#2992A3]">
                                            {post.category}
                                        </span>
                                        <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                                            {post.date}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-4 group-hover:text-[#2992A3] transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="pt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                                        Read Article <span className="text-[#EBE563]">→</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <div className="mt-32 bg-gray-50 rounded-3xl p-12 md:p-24 text-center">
                    <h3 className="text-4xl md:text-6xl font-display font-bold mb-8">
                        Stay in the Loop.
                    </h3>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
                        Get the latest updates on the X Collective, new drops, and community events directly to your inbox.
                    </p>
                    <form className="max-w-md mx-auto flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-6 py-4 rounded-full bg-white border border-gray-200 focus:border-[#EBE563] focus:ring-2 focus:ring-[#EBE563]/20 outline-none transition-all text-center placeholder:text-gray-300"
                        />
                        <button className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#EBE563] hover:text-black transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
