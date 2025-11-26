import React from 'react';

const Cause = () => {
    return (
        <section className="section bg-zinc-900 text-white py-32 text-center">
            <div className="container mx-auto px-4 max-w-4xl">
                <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-6 block">The Cause</span>
                <h2 className="text-3xl md:text-5xl font-light mb-8">Why X Collective Exists</h2>
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
                    We are a global community committed to democratizing access to wealth, wellbeing, and growth.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    For people who want meaning, opportunity, and a way to build a richer life while contributing to something larger than themselves. For creators seeking visibility, connectors seeking community, and explorers seeking transformative experiences.
                </p>
            </div>
        </section>
    );
};

export default Cause;
