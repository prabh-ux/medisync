import React from 'react';
import Hero from './HomePage/Hero';
import ShowCase from './HomePage/ShowCase';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#FDFCFB]">
            {/* --- HERO SECTION --- */}
            <Hero />

            {/* --- Showcase --- */}

            <ShowCase />
          
        </div>
    );
};

export default Home;