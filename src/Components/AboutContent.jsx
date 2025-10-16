// src/components/AboutContent.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import aboutimg from "../assets/about.jpg";

const AboutContent = () => {
    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">

                    {/* Left Column: Image */}
                    <div className="flex justify-center">
                        <img
                            src={aboutimg}
                            alt="Digital marketing agency team at work"
                            className="rounded-lg shadow-xl"
                        />
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="lg:pl-8">
                        <p className="font-semibold text-purple-700 uppercase tracking-wide">
                            Who We Are
                        </p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight">
                            A Full-Service Digital Agency Focused on Your Success
                        </h2>
                        <div className="mt-6 text-gray-600 space-y-5 leading-relaxed">
                            <p>
                                <strong>VNT Advertising Solutions LLP </strong>
                                is a next-generation digital marketing and advertising agency dedicated to helping businesses grow in the online world. We provide end-to-end marketing and technology-driven solutions including Website & App Development, Social Media Marketing, Google Ads (PPC), Branding & Design, SEO (Search Engine Optimization), Video Marketing, Lead Generation, and Performance Marketing.


                            </p>
                            <p>
                                At VNT Advertising Solutions LLP, we believe in creativity backed by strategy. Our team focuses on delivering customized marketing campaigns that build your brand identity, enhance online visibility, and drive measurable results. Whether you're a startup or an established brand, we help you connect with your target audience through innovative digital strategies and data-driven insights.
                            </p>
                            <p>
                                We aim to turn your ideas into impactful campaigns that generate quality leads, boost conversions, and accelerate business growth.

                                To collaborate or learn more, reach out to us at support@vntadvertising.in
                            </p>
                        </div>
                        <div className="mt-10">
                            <NavLink
                                to="/contact"
                                className="inline-block rounded-md bg-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Get in Touch
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutContent;