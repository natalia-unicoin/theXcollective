'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';

const ManifestoModal = () => {
    const { isManifestoOpen, closeManifesto } = useModal();

    if (!isManifestoOpen) return null;

    return (
        <AnimatePresence>
            {isManifestoOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeManifesto}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-zinc-900 w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden pointer-events-auto relative flex flex-col">
                            {/* Close Button */}
                            <button
                                onClick={closeManifesto}
                                className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10 bg-white/10 p-3 rounded-full"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-4xl md:text-7xl font-hand font-bold mb-6 text-[#EBE563]">
                                            Our Manifesto
                                        </h2>
                                        <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-6">
                                            We believe the internet broke its promise.
                                        </p>
                                    </div>

                                    <div className="space-y-6 text-white/80 text-base md:text-lg leading-relaxed">
                                        <p>
                                            The platforms you use every day? They don't work for you. They work for shareholders, advertisers, and algorithms designed to extract your attention, data, and creativity without giving you a stake in the upside.
                                        </p>
                                        <p>
                                            <strong className="text-[#EBE563]">We're here to change that.</strong>
                                        </p>
                                        <p>
                                            TheXCollective is a decentralized community where creators, builders, investors, and connectors come together to own the platforms they build, the content they create, and the value they generate.
                                        </p>
                                        <p>
                                            No gatekeepers. No middlemen taking 30%. No black-box algorithms deciding who gets seen.
                                        </p>
                                        <p className="text-xl font-medium text-white">
                                            Just radical ownership, transparent governance, and collective upside.
                                        </p>

                                        <div className="border-l-4 border-[#2992A3] pl-6 my-8">
                                            <p className="text-2xl font-hand text-[#2992A3] italic">
                                                "If you're not at the table, you're on the menu."
                                            </p>
                                        </div>

                                        <p>
                                            We're building the infrastructure for a new economy—one where the people who create value actually capture it. Whether you're an artist minting your first NFT, a developer shipping open-source code, an investor backing the next big thing, or a community builder connecting the dots—there's a place for you here.
                                        </p>

                                        <p className="text-2xl font-bold text-white pt-4">
                                            This is your invitation.
                                        </p>
                                        <p>
                                            Join us. Own the future.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ManifestoModal;
