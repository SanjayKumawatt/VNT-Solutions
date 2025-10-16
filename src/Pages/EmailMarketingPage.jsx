// src/pages/EmailMarketingPage.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import email from "../assets/email.jpg";

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


const EmailMarketingPage = () => {
    
    // Data for sections to keep the JSX clean
    const emailProcessSteps = [
        { title: "Strategy & List Building", description: "We help you build a high-quality email list and develop a strategy that aligns with your marketing goals." },
        { title: "Campaign Design & Copywriting", description: "Our team designs beautiful, mobile-responsive email templates and writes persuasive copy that encourages action." },
        { title: "Email Automation Setup", description: "We set up automated email sequences for welcoming new subscribers, nurturing leads, and recovering abandoned carts." },
        { title: "List Segmentation", description: "We segment your email list based on user behavior and demographics to send highly personalized and relevant content." },
        { title: "A/B Testing & Optimization", description: "We test different subject lines, content, and calls-to-action to continuously improve your open rates and click-through rates." },
        { title: "Performance Tracking & Reporting", description: "You receive detailed reports on key metrics like open rates, click rates, and conversions, so you always know your ROI." }
    ];

    const faqData = [
        { question: "Why is email marketing still effective?", answer: "Email marketing provides a direct line of communication with your most engaged audience. It offers one of the highest ROIs in digital marketing because you are reaching people who have already shown interest in your brand." },
        { question: "Can you help me grow my email list?", answer: "Yes, we use proven, white-hat techniques like lead magnets, website pop-ups, and content upgrades to help you build a valuable list of subscribers who are genuinely interested in your offerings." },
        { question: "What email marketing software do you use?", answer: "We are proficient with a wide range of email marketing platforms, including Mailchimp, Constant Contact, and more. We can work with your existing platform or recommend one that best suits your needs." },
        { question: "How do you ensure emails don't go to the spam folder?", answer: "We follow industry best practices, including maintaining a clean email list, using proper authentication (SPF, DKIM), avoiding spammy words in subject lines, and providing a clear unsubscribe link. This helps ensure high deliverability rates." }
    ];

    return (
        <>
            {/* 1. Hero Section */}
            <section className="bg-[#EAE0F2] py-20 sm:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                        Email Marketing
                    </h1>
                    <div className="mt-4 text-sm text-gray-600">
                        <NavLink to="/" className="hover:text-purple-700 transition-colors">Home</NavLink>
                        <span className="mx-2">/</span>
                        <NavLink to="/services" className="hover:text-purple-700 transition-colors">Services</NavLink>
                        <span className="mx-2">/</span>
                        <span>Email Marketing</span>
                    </div>
                </div>
            </section>

            {/* 2. Introduction Section */}
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="font-semibold text-purple-700 uppercase tracking-wide">NURTURE & CONVERT</p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Drive Sales with Powerful Email Campaigns
                        </h2>
                        <p className="mt-6 text-gray-600 leading-relaxed">
                           Email marketing remains one of the most effective ways to nurture leads and drive direct sales. It allows you to build a direct relationship with your audience, providing value straight to their inbox. At NEXOTIK, we design and execute strategic email marketing campaigns that engage your subscribers, promote your products, and turn prospects into loyal customers.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img src={email} alt="Email Marketing Campaigns Illustration" className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </section>

            {/* 3. Our Email Marketing Process Section */}
            <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Email Marketing Framework</h2>
                        <p className="mt-4 text-lg text-gray-600">A step-by-step approach to delivering emails that get opened, read, and clicked.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {emailProcessSteps.map((step, index) => (
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
                        <p className="mt-4 text-lg text-gray-600">Your common questions about email marketing, answered.</p>
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

export default EmailMarketingPage;