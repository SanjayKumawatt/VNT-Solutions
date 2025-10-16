// src/pages/PpcServicePage.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ppc from "../assets/ppc.png";

// FAQ Item Component (reusable for accordion functionality)
const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none"
            >
                <span>{question}</span>
                <span className="transform transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            {isOpen && (
                <div className="mt-4 text-gray-600 leading-relaxed">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};


const PpcServicePage = () => {
    
    // Data for sections to keep the JSX clean
    const ppcProcessSteps = [
        { title: "Campaign Strategy & Goal Setting", description: "We start by understanding your business goals to create a targeted PPC strategy that delivers results." },
        { title: "Keyword Research & Selection", description: "We identify high-intent keywords that your potential customers are searching for." },
        { title: "Ad Copywriting & Design", description: "Our team crafts compelling ad copy and visuals that grab attention and encourage clicks." },
        { title: "Landing Page Optimization", description: "We ensure your landing pages are optimized for conversions, turning clicks into customers." },
        { title: "Campaign Monitoring & A/B Testing", description: "We continuously monitor your campaigns and run A/B tests to improve performance and ROI." },
        { title: "Performance Reporting", description: "You receive transparent, detailed reports that show exactly how your investment is performing." }
    ];

    const faqData = [
        { question: "What is Pay-Per-Click (PPC) advertising?", answer: "PPC is an online advertising model where advertisers pay a fee each time one of their ads is clicked. It's a way of buying visits to your site, rather than attempting to 'earn' those visits organically through SEO." },
        { question: "Which platforms do you use for PPC?", answer: "We primarily focus on Google Ads (including Search, Display, and Shopping ads) but also manage campaigns on social media platforms like Facebook, Instagram, and LinkedIn, depending on your target audience." },
        { question: "How soon can I expect to see results from PPC?", answer: "Unlike SEO, PPC can deliver results almost instantly. Once your campaign is live, you can start seeing traffic and leads within hours. The key is to optimize for profitability over time." },
        { question: "How much should I budget for a PPC campaign?", answer: "Your budget can vary widely based on your industry, competition, and goals. We work with you to establish a budget that maximizes your return on investment (ROI) and provides scalable growth." }
    ];

    return (
        <>
            {/* 1. Hero Section */}
            <section className="bg-[#EAE0F2] py-20 sm:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                        Pay-Per-Click (PPC) Advertising
                    </h1>
                    <div className="mt-4 text-sm text-gray-600">
                        <NavLink to="/" className="hover:text-purple-700 transition-colors">Home</NavLink>
                        <span className="mx-2">/</span>
                        <NavLink to="/services" className="hover:text-purple-700 transition-colors">Services</NavLink>
                        <span className="mx-2">/</span>
                        <span>PPC</span>
                    </div>
                </div>
            </section>

            {/* 2. Introduction Section */}
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="font-semibold text-purple-700 uppercase tracking-wide">INSTANT RESULTS</p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Drive Targeted Traffic & Leads Instantly
                        </h2>
                        <p className="mt-6 text-gray-600 leading-relaxed">
                           Want immediate visibility on search engines? Pay-Per-Click (PPC) advertising is the fastest way to get your brand in front of customers who are actively searching for your products or services. At NEXOTIK, we create data-driven PPC campaigns that maximize your return on investment (ROI) by targeting the right audience with the right message at the right time.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img src={ppc} alt="PPC Campaign Illustration" className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </section>

            {/* 3. Our PPC Process Section */}
            <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Strategic PPC Process</h2>
                        <p className="mt-4 text-lg text-gray-600">We follow a meticulous process to ensure every penny of your ad spend is effective.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ppcProcessSteps.map((step, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                                <span className="text-3xl font-bold text-purple-200">0{index + 1}</span>
                                <h3 className="mt-4 text-xl font-bold text-gray-900">{step.title}</h3>
                                <p className="mt-2 text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. FAQ Section */}
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently Asked Questions (FAQs)</h2>
                        <p className="mt-4 text-lg text-gray-600">Your common questions about PPC advertising, answered.</p>
                    </div>
                    <div className="mt-10">
                        {faqData.map((faq, index) => (
                            <FaqItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PpcServicePage;
