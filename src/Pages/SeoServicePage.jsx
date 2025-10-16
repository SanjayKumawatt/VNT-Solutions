// src/pages/SeoServicePage.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import seoimg from "../assets/seo.webp";

// FAQ Item Component (for accordion functionality)
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


const SeoServicePage = () => {
    
    // Data for sections to keep the JSX clean
    const seoProcessSteps = [
        { title: "Website Audit & Analysis", description: "We conduct a deep technical audit of your website to identify current issues and areas for improvement." },
        { title: "Keyword Research & Strategy", description: "We find the most valuable keywords for your business to attract the right customers." },
        { title: "On-Page Optimization", description: "We make title tags, meta descriptions, content, and images SEO-friendly so that search engines can easily understand them." },
        { title: "High-Quality Link Building", description: "We build high-authority backlinks for your website, which improves your online reputation and ranking." },
        { title: "Content Creation & Marketing", description: "We create engaging and informative content (blogs, articles) that attracts your audience." },
        { title: "Reporting & Analytics", description: "We show you progress through regular reports and plan the future strategy." }
    ];

    const faqData = [
        { question: "How long does it take to see results from SEO?", answer: "SEO is a long-term strategy. Typically, it can take 4 to 6 months to see significant results. This depends on your industry competition and the current condition of your website." },
        { question: "Do you perform SEO for local businesses (in Jaipur)?", answer: "Yes, absolutely! We are experts in Local SEO (GMB optimization) and help Jaipur-based businesses reach their local customers." },
        { question: "What is the cost of SEO?", answer: "The cost of SEO depends on your business goals, website size, and competition. We offer custom packages based on your needs. Please contact us for more information." },
        { question: "Do I need to do SEO every month?", answer: "Search engine algorithms are always changing, and competition is also increasing. Therefore, consistent SEO efforts are necessary to maintain top rankings." }
    ];

    return (
        <>
            {/* 1. Hero Section */}
            <section className="bg-[#EAE0F2] py-20 sm:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                        Search Engine Optimization (SEO)
                    </h1>
                    <div className="mt-4 text-sm text-gray-600">
                        <NavLink to="/" className="hover:text-purple-700 transition-colors">Home</NavLink>
                        <span className="mx-2">/</span>
                        <NavLink to="/services" className="hover:text-purple-700 transition-colors">Services</NavLink>
                        <span className="mx-2">/</span>
                        <span>SEO</span>
                    </div>
                </div>
            </section>

            {/* 2. Introduction Section */}
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="font-semibold text-purple-700 uppercase tracking-wide">UNLOCK YOUR POTENTIAL</p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Grow Your Business by Ranking on Top of Google
                        </h2>
                        <p className="mt-6 text-gray-600 leading-relaxed">
                           In today's digital age, if your business is not on the first page of Google, you are losing out on many potential customers. At NEXOTIK, our expert SEO team in Jaipur is ready to grow your business. We use proven strategies to bring organic traffic to your website, generate leads, and increase your sales.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img src={seoimg} alt="SEO Strategy Illustration" className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </section>

            {/* 3. Our SEO Process Section */}
            <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Proven SEO Process</h2>
                        <p className="mt-4 text-lg text-gray-600">We follow a systematic approach to ensure you get the best results.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {seoProcessSteps.map((step, index) => (
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
                        <p className="mt-4 text-lg text-gray-600">Answers to some common questions related to SEO.</p>
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

export default SeoServicePage;

