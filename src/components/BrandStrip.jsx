import React from 'react';

const BrandStrip = () => {
    return (
        <div className="bg-white text-black py-6 border-b border-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-sm uppercase tracking-widest font-medium">
                    <span>A movement built independently.</span>
                    <span className="hidden md:block text-gray-300">|</span>
                    <span>Powered by UnicoinX.</span>
                    <span className="hidden md:block text-gray-300">|</span>
                    <span>Designed for people redefining wealth.</span>
                </div>
            </div>
        </div>
    );
};

export default BrandStrip;
