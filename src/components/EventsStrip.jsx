import React from 'react';

const EventsStrip = () => {
    return (
        <section className="section bg-black text-white py-24 border-t border-gray-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6">
                        <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2 block">Tier 1</span>
                        <h3 className="text-2xl font-light mb-4">Everyday Experiences</h3>
                        <p className="text-gray-400 font-light text-sm">Fitness, wellness, virtual workshops.</p>
                    </div>
                    <div className="p-6 border-l border-r border-gray-900">
                        <span className="text-xs font-bold tracking-widest uppercase text-yellow-600 mb-2 block">Tier 2</span>
                        <h3 className="text-2xl font-light mb-4">Signature Events</h3>
                        <p className="text-gray-400 font-light text-sm">Retreats, residencies, curated travel.</p>
                    </div>
                    <div className="p-6">
                        <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2 block">Tier 3</span>
                        <h3 className="text-2xl font-light mb-4">Flagship Gatherings</h3>
                        <p className="text-gray-400 font-light text-sm">X Collective Summit, Women of Wealth, Biohacking Miami.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsStrip;
