import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FoundingMember from './components/FoundingMember';
import Manifesto from './components/Manifesto';
import FourWays from './components/FourWays';
import HowItWorks from './components/HowItWorks';
import TokenSection from './components/TokenSection';
import JoinFlow from './components/JoinFlow';
import Footer from './components/Footer';

function App() {
    return (
        <main className="bg-white min-h-screen text-black font-sans antialiased selection:bg-[#ebe462] selection:text-black">
            <Navbar />
            <Hero />
            <FoundingMember />
            <Manifesto />
            <FourWays />
            <HowItWorks />
            <TokenSection />
            <JoinFlow />
            <Footer />
        </main>
    );
}

export default App;
