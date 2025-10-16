// src/components/HeroSection.jsx

import React from 'react';

// Aap yahan apni image ka path daal sakte hain.
// Is image ko `src/assets/` folder mein rakhein.
import heroIllustration from '../assets/herobanner.webp'; // Example path

const HeroSection = () => {
    return (
        <section className="bg-purple-100/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-12 gap-y-16">

                    {/* Left Column: Text Content */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-tight">
                            Digital Marketing Agency In India
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-700">
                            VNT Advertising Solutions LLP is a next-generation digital marketing and advertising agency dedicated to helping businesses grow in the online world. We provide end-to-end marketing and technology-driven solutions including Website & App Development, Social Media Marketing, Google Ads (PPC), Branding & Design, SEO (Search Engine Optimization), Video Marketing, Lead Generation, and Performance Marketing.

                        </p>
                        <div className="mt-10 flex items-center justify-center lg:justify-start">
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-x-2 rounded-md bg-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:-translate-y-1"
                            >
                             Contact Us
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={heroIllustration}
                            alt="Digital marketing team working on a project"
                            className="w-full max-w-lg rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;