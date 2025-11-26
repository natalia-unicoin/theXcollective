import React from 'react';

const TargetAudience = () => {
    return (
        <section className="relative py-32 bg-gray-100">
            <div className="absolute inset-0 z-0">
                {/* Placeholder for lifestyle imagery */}
                <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2832&auto=format&fit=crop"
                    alt="Lifestyle"
                    className="w-full h-full object-cover opacity-10 grayscale"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-white p-12 md:p-20 max-w-4xl mx-auto shadow-2xl">
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6 block">Who This Is For</span>
                    <h2 className="text-4xl md:text-5xl font-light mb-8 text-black">Who Joins the X Collective</h2>
                    <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                        People who want to live better, grow faster, connect deeper, and build real wealth in all dimensions.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {["Creators", "Entrepreneurs", "Travelers", "Reinventors", "Wellness Seekers", "Future Shapers"].map((tag, i) => (
                            <span key={i} className="px-4 py-2 bg-gray-100 text-gray-800 text-sm tracking-wide uppercase rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
