'use client';

import React from 'react';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import FourWays from '@/components/FourWays';
import HowItWorks from '@/components/HowItWorks';
import StatsSection from '@/components/StatsSection';
import TokenSection from '@/components/TokenSection';
import FoundingMember from '@/components/FoundingMember';
import JoinFlow from '@/components/JoinFlow';

const Home = () => {
    return (
        <>
            <Hero />
            <Manifesto />
            <FourWays />
            <HowItWorks />
            <TokenSection />
            <FoundingMember />
            <StatsSection />
            <JoinFlow />
        </>
    );
};

export default Home;
