// src/pages/WebDesignPage.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import web from "../assets/web.jpg";

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


const WebDesignPage = () => {
    
    // Data for sections to keep the JSX clean
    const webDesignProcessSteps = [
        { title: "Discovery & Strategy", description: "We start by understanding your brand, target audience, and goals to create a strategic plan for your new website." },
        { title: "Wireframing & UI/UX Design", description: "Our team designs intuitive wireframes and user-friendly interfaces that provide an excellent user experience." },
        { title: "Visual Design & Branding", description: "We create a stunning visual design that reflects your brand's identity, using the right colors, typography, and graphics." },
        { title: "Responsive Development", description: "Our developers build a fully responsive website that looks and functions perfectly on all devices—desktops, tablets, and mobiles." },
        { title: "Content Integration", description: "We seamlessly integrate your content, ensuring it is well-structured, easy to read, and optimized for search engines." },
        { title: "Testing & Launch", description: "Before launch, we conduct rigorous testing to ensure your website is bug-free. After your approval, we take it live." }
    ];

    const faqData = [
        { question: "How long does it take to build a website?", answer: "The timeline for building a website depends on its complexity. A basic informational website might take 4-6 weeks, while a more complex e-commerce site could take 10-12 weeks or more. We provide a detailed timeline after the initial discovery phase." },
        { question: "Will my website be mobile-friendly?", answer: "Absolutely. All the websites we build are fully responsive, meaning they will adapt to any screen size, providing an optimal experience for every user, whether they are on a desktop, tablet, or smartphone." },
        { question: "Can you help with content for my website?", answer: "Yes, our content marketing team can create high-quality, SEO-optimized copy for your website that engages your audience and clearly communicates your brand message." },
        { question: "Do you provide website maintenance services after launch?", answer: "Yes, we offer ongoing website maintenance packages to ensure your site remains secure, up-to-date, and performs at its best. This includes updates, backups, and technical support." }
    ];

    return (
        <>
            {/* 1. Hero Section */}
            <section className="bg-[#EAE0F2] py-20 sm:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                        Web Design & Development
                    </h1>
                    <div className="mt-4 text-sm text-gray-600">
                        <NavLink to="/" className="hover:text-purple-700 transition-colors">Home</NavLink>
                        <span className="mx-2">/</span>
                        <NavLink to="/services" className="hover:text-purple-700 transition-colors">Services</NavLink>
                        <span className="mx-2">/</span>
                        <span>Web Design</span>
                    </div>
                </div>
            </section>

            {/* 2. Introduction Section */}
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="font-semibold text-purple-700 uppercase tracking-wide">DESIGN & DEVELOP</p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Create a Website That Converts Visitors into Customers
                        </h2>
                        <p className="mt-6 text-gray-600 leading-relaxed">
                           Your website is often the first impression a potential customer has of your business. It needs to be visually appealing, easy to navigate, and built to convert. At NEXOTIK, we design and develop beautiful, user-friendly, and responsive websites that not only reflect your brand's identity but also help you achieve your specific business goals.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img src={web} alt="Web Design and Development Illustration" className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </section>

            {/* 3. Our Web Design Process Section */}
            <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Web Design & Development Process</h2>
                        <p className="mt-4 text-lg text-gray-600">A collaborative and transparent process for building a website you'll love.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {webDesignProcessSteps.map((step, index) => (
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
                        <p className="mt-4 text-lg text-gray-600">Your common questions about web design, answered.</p>
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

export default WebDesignPage;