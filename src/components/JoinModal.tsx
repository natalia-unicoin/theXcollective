'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';

const JoinModal = () => {
    const { isJoinModalOpen, closeJoinModal } = useModal();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'Creator',
        reason: '',
        socialHandle: '',
        company: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would handle the submission (e.g., send to API)
        console.log('Form submitted:', formData);
        // For now, just close the modal after a brief delay or show success
        alert("Thanks for applying! We'll be in touch.");
        closeJoinModal();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (!isJoinModalOpen) return null;

    return (
        <AnimatePresence>
            {isJoinModalOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeJoinModal}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden pointer-events-auto relative flex flex-col">
                            {/* Close Button */}
                            <button
                                onClick={closeJoinModal}
                                className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors z-10 bg-white/50 p-2 rounded-full"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                                <div className="flex flex-col items-center text-center mb-6">
                                    <h2 className="text-5xl md:text-7xl font-hand font-bold mb-2 text-[#2992A3]">
                                        Join the Collective
                                    </h2>
                                    <p className="text-base md:text-lg text-gray-600 font-medium max-w-xs mx-auto">
                                        Apply to become a founding member and shape the future.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-800">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#EBE563] focus:ring-2 focus:ring-[#EBE563]/20 outline-none transition-all"
                                            placeholder="Jane Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-800">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#EBE563] focus:ring-2 focus:ring-[#EBE563]/20 outline-none transition-all"
                                            placeholder="jane@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-800">
                                            I am a...
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {['Creator', 'Builder', 'Investor', 'Connector'].map((role) => (
                                                <button
                                                    key={role}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, role })}
                                                    className={`px-4 py-3 rounded-xl text-sm font-bold border transition-all ${formData.role === role
                                                        ? 'bg-black text-white border-black'
                                                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                                                        }`}
                                                >
                                                    {role}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Conditional Fields */}
                                    <AnimatePresence mode="wait">
                                        {formData.role === 'Creator' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-800">
                                                    Social Media / Portfolio
                                                </label>
                                                <input
                                                    type="text"
                                                    name="socialHandle"
                                                    value={formData.socialHandle || ''}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#EBE563] focus:ring-2 focus:ring-[#EBE563]/20 outline-none transition-all"
                                                    placeholder="@username or portfolio.com"
                                                />
                                            </motion.div>
                                        )}

                                        {formData.role === 'Investor' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-800">
                                                    Company / VC Firm
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company || ''}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#EBE563] focus:ring-2 focus:ring-[#EBE563]/20 outline-none transition-all"
                                                    placeholder="Company Name"
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div>
                                        <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-800">
                                            Why do you want to join?
                                        </label>
                                        <textarea
                                            name="reason"
                                            rows={3}
                                            value={formData.reason}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#EBE563] focus:ring-2 focus:ring-[#EBE563]/20 outline-none transition-all resize-none"
                                            placeholder="Tell us briefly about your vision..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#EBE563] text-black font-bold py-4 rounded-xl uppercase tracking-widest hover:bg-[#d4cd55] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                    >
                                        Submit Application
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default JoinModal;
