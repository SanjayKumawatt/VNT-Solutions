// src/pages/ContentMarketingPage.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import content from "../assets/content.jpg";

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


const ContentMarketingPage = () => {
    
    // Data for sections to keep the JSX clean
    const contentProcessSteps = [
        { title: "Content Strategy & Planning", description: "We develop a comprehensive content strategy based on your audience's needs, keyword research, and business objectives." },
        { title: "Topic Ideation & Research", description: "Our team brainstorms and researches compelling topics that will resonate with your target audience and establish your authority." },
        { title: "High-Quality Content Creation", description: "We create various types of content, including blog posts, articles, infographics, and ebooks, all tailored to your brand voice." },
        { title: "Content Optimization (SEO)", description: "Every piece of content is optimized with relevant keywords to ensure it ranks well on search engines and drives organic traffic." },
        { title: "Content Promotion & Distribution", description: "We promote your content across various channels, including social media and email, to maximize its reach and impact." },
        { title: "Performance Analysis", description: "We track content performance, analyzing metrics like traffic, engagement, and conversions to refine our strategy." }
    ];

    const faqData = [
        { question: "What is content marketing?", answer: "Content marketing is a strategic approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience — and, ultimately, to drive profitable customer action." },
        { question: "Why is content marketing important for my business?", answer: "It helps build trust with your audience, improves your brand's reputation, generates leads, and enhances your website's SEO. Quality content positions you as an expert in your industry." },
        { question: "What types of content do you create?", answer: "We create a wide range of content, including blog posts, long-form articles, case studies, website copy, infographics, and email newsletters. The type of content depends on your specific goals and audience." },
        { question: "How does content marketing help with SEO?", answer: "Search engines like Google reward websites that publish high-quality, consistent content. By targeting specific keywords and answering user questions, content marketing directly boosts your search engine rankings and organic traffic." }
    ];

    return (
        <>
            {/* 1. Hero Section */}
            <section className="bg-[#EAE0F2] py-20 sm:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                        Content Marketing
                    </h1>
                    <div className="mt-4 text-sm text-gray-600">
                        <NavLink to="/" className="hover:text-purple-700 transition-colors">Home</NavLink>
                        <span className="mx-2">/</span>
                        <NavLink to="/services" className="hover:text-purple-700 transition-colors">Services</NavLink>
                        <span className="mx-2">/</span>
                        <span>Content Marketing</span>
                    </div>
                </div>
            </section>

            {/* 2. Introduction Section */}
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="font-semibold text-purple-700 uppercase tracking-wide">INFORM & ENGAGE</p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Tell Your Story, Build Your Authority
                        </h2>
                        <p className="mt-6 text-gray-600 leading-relaxed">
                           Great content is the cornerstone of modern digital marketing. It's how you build trust, provide value, and create lasting relationships with your customers. At NEXOTIK, we specialize in creating high-quality content that not only informs and engages your audience but also drives traffic and conversions. From compelling blog posts to insightful articles, we help you become a trusted voice in your industry.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img src={content} alt="Content Creation Illustration" className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </section>

            {/* 3. Our Content Marketing Process Section */}
            <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Content Creation Workflow</h2>
                        <p className="mt-4 text-lg text-gray-600">A structured process to deliver content that provides value and drives results.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {contentProcessSteps.map((step, index) => (
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
                        <p className="mt-4 text-lg text-gray-600">Your common questions about content marketing, answered.</p>
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

export default ContentMarketingPage;