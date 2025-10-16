// src/components/Services.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

// Services data array for easy mapping
const servicesData = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
        title: 'SEARCH ENGINE OPTIMIZATION – SEO',
        description: 'SEO is an essential part of any digital marketing strategy. Our agency will assist your company in reaching its target audience and improving its online visibility. Our agency will optimize your website for better search rankings and increase organic traffic to get more customer sales and leads.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
        ),
        title: 'Link Building service',
        description: 'Link building is an important part of SEO, our agency will create link from high authority website which will improve a website\'s accessibility and ranking on search engines. Link building opens up access to many other web pages, which can increase traffic, awareness of the brand, and the number of leads and consumers.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: 'Local Seo (GMB)',
        description: 'Any company\'s online presence must include local search engine optimization, we will help your businesses to be found by local consumers and increasing their presence in local search engine results. our agency has the right strategies for your business to ensure that your website will be optimized for local search and ranks higher in local search results.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        title: 'Bulk SMS',
        description: 'Small and large enterprises can use bulk SMS services. Businesses may effortlessly communicate with their customer with latest updates, new collections and promotional offers. Organizations can connect with their partners and employees quite effectively using this method. With this service businesses may easily communicate with thousands of people at once.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V8z" />
            </svg>
        ),
        title: 'Whatsapp Marketing',
        description: 'WhatsApp Marketing provides numerous advantages to businesses, including increased consumer involvement, enhanced customer service, and a better business experience. It allows businesses to reach a large audience by the using power of the best social media networks and messaging platforms, which can help boost sales and revenue.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: 'Web Design',
        description: 'Good web design is necessary for a successful website. our agency will create an engaging user friendly website which can convert sale and services. our design will reflects the identity of the brand is made by combining colors, graphics, typography, layout, and other elements. Using web design techniques like bootstrap HTML5 and CSS3, our web designers may create user-friendly responsive websites.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        title: 'Web Development',
        description: 'Developing a website and implementing front and back-end development. The primary aim of this service is to build a responsive and functional website that is user friendly to client\'s and user\'s needs. Adopting a well-coded website can benefits businesses in traffic, company identity and improved customer engagement leading to high sales. businesses can create a resounding online impression and achieve their digital goals.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 8v5c0 .512.195 1.024.586 1.414l7 7a2 2 0 002.828 0l7-7a2 2 0 000-2.828l-7-7A2 2 0 0012 3H7a2 2 0 00-2 2v5a2 2 0 002 2z" />
            </svg>
        ),
        title: 'White Label Seo',
        description: 'The best option for companies wishing to outsource their SEO requirements is white label SEO services. By using these services, Businesses can benefit from the most recent methods and strategies to raise their search engine ranks and increase organic traffic by using white label SEO services. Additionally, these services offer a budget-friendly alternative for companies that require specialized SEO.',
    },
];

const ServiceCard = ({ icon, title, description, link }) => (
    <div className="bg-white p-8 rounded-lg border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4 text-sm">{description}</p>
    </div>
);

const OurServices = () => {
    return (
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Introduction */}
                    <div className="lg:col-span-1 pr-0 lg:pr-8">
                        <p className="text-purple-600 font-semibold tracking-wider uppercase">
                            Our Services
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
                            We are one of the specialists in the given Digital Marketing service
                        </h2>
                        <p className="mt-6 text-gray-600 leading-relaxed">
                            At VNT Advertising Solutions LLP, we believe in creativity backed by strategy. Our team focuses on delivering customized marketing campaigns that build your brand identity, enhance online visibility, and drive measurable results. Whether you're a startup or an established brand, we help you connect with your target audience through innovative digital strategies and data-driven insights.

                            We aim to turn your ideas into impactful campaigns that generate quality leads, boost conversions, and accelerate business growth.

                        </p>
                    </div>

                    {/* Right Column: Service Cards Grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {servicesData.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;