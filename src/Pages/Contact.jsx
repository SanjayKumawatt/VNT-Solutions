// src/components/Contact.jsx

import React from 'react';

// Simple SVG icons for contact details
const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);


const Contact = () => {
    return (
        <section className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Contact With us            </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We'd love to hear from you. Please fill out the form below or contact us using the details provided.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Contact Information */}
                    <div className="bg-purple-700 p-8 rounded-lg shadow-lg text-white space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                            <p className="text-purple-200">
                                Our team is ready to assist you with any inquiries about our digital marketing services.
                            </p>
                        </div>
                        <div className="space-y-20">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-purple-600 rounded-md">
                                    <LocationIcon />
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold">Our Address</h4>
                                    <p className="text-purple-200"></p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-purple-600 rounded-md">
                                    <EmailIcon />
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold">Email Us</h4>
                                    <a href="mailto:nexotikoffice@gmail.com" className="text-purple-200 hover:text-white block">support@vntadvertising.in </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <div className="mt-1">
                                    <input type="text" name="name" id="name" autoComplete="name" className="py-3 px-4 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <div className="mt-1">
                                    <input id="email" name="email" type="email" autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <div className="mt-1">
                                    <input type="text" name="phone" id="phone" autoComplete="tel" className="py-3 px-4 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <div className="mt-1">
                                    <textarea id="message" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border border-gray-300 rounded-md"></textarea>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
