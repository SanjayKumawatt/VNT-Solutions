// src/pages/SocialMediaMarketingPage.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import banner from "../assets/socialmedia.webp";

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


const SocialMediaMarketingPage = () => {
    
    // Data for sections to keep the JSX clean
    const smmProcessSteps = [
        { title: "Strategy Development", description: "We analyze your audience and competitors to build a custom social media strategy that aligns with your brand's voice and goals." },
        { title: "Content Creation & Calendaring", description: "Our team creates high-quality, engaging content (graphics, videos, posts) and schedules it for optimal reach." },
        { title: "Community Management", description: "We actively engage with your followers, respond to comments and messages, and build a loyal online community around your brand." },
        { title: "Paid Social Advertising", description: "We run targeted ad campaigns on platforms like Facebook, Instagram, and LinkedIn to reach a wider, relevant audience." },
        { title: "Influencer Marketing", description: "We connect you with relevant influencers to promote your brand and build trust with their dedicated followers." },
        { title: "Analytics & Reporting", description: "We provide detailed monthly reports on key metrics, showing your growth and campaign performance." }
    ];

    const faqData = [
        { question: "Which social media platforms are right for my business?", answer: "The best platforms depend on your target audience and industry. We typically start with a deep analysis to recommend the most effective channels, whether it's Instagram for visual brands, LinkedIn for B2B, or Facebook for broad reach." },
        { question: "How often should I post on social media?", answer: "Consistency is key. The ideal frequency varies by platform, but we generally recommend posting 3-5 times a week on platforms like Facebook and Instagram to maintain engagement without overwhelming your audience." },
        { question: "Can social media really generate leads and sales?", answer: "Absolutely. Through strategic content, community engagement, and targeted ads, social media is a powerful tool for driving traffic to your website, generating qualified leads, and boosting direct sales." },
        { question: "How do you measure the success of a social media campaign?", answer: "We track key performance indicators (KPIs) like engagement rate, reach, website clicks, and conversion rate. Our goal is to tie social media efforts directly to your business objectives, like leads and sales." }
    ];

    return (
        <>
            {/* 1. Hero Section - with custom background color */}
            <section className="bg-[#EAE0F2] py-20 sm:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                        Social Media Marketing
                    </h1>
                    <div className="mt-4 text-sm text-gray-600">
                        <NavLink to="/" className="hover:text-purple-700 transition-colors">Home</NavLink>
                        <span className="mx-2">/</span>
                        <NavLink to="/services" className="hover:text-purple-700 transition-colors">Services</NavLink>
                        <span className="mx-2">/</span>
                        <span>Social Media Marketing</span>
                    </div>
                </div>
            </section>

            {/* 2. Introduction Section */}
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="font-semibold text-purple-700 uppercase tracking-wide">CONNECT & CONVERT</p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Build Your Brand & Engage Your Audience
                        </h2>
                        <p className="mt-6 text-gray-600 leading-relaxed">
                           Social media is more than just posting updates; it's about building a community. At NEXOTIK, we create compelling social media strategies that foster engagement, build brand loyalty, and drive meaningful conversations. We help you connect with your audience where they spend their time, turning followers into loyal customers.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img src={banner} alt="Social Media Marketing Illustration" className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </section>

            {/* 3. Our Social Media Process Section */}
            <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Social Media Marketing Plan</h2>
                        <p className="mt-4 text-lg text-gray-600">A results-driven approach to grow your social presence and achieve your goals.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {smmProcessSteps.map((step, index) => (
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
                        <p className="mt-4 text-lg text-gray-600">Your common questions about social media marketing, answered.</p>
                    </div>
                    <div className="mt-10">
                        {faqData.map((faq, index) => (
                            <FaqItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* 5. Call to Action Section is intentionally omitted as per your request */}
        </>
    );
};

export default SocialMediaMarketingPage;