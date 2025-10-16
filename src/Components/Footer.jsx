// src/components/Footer.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#EAE0F2]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Column 1: Logo and Description */}
                    <div className="mb-6 lg:mb-0">
                        <div className="flex items-center mb-4">
                           <img src={logo} alt="" className='h-15'/> 
                            <span className="text-2xl font-bold text-gray-800 tracking-wide">VNT Solutions</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            VNT Advertising Solutions LLP is a next-generation digital marketing and advertising agency dedicated to helping businesses grow in the online world. We provide end-to-end marketing and technology-driven solutions including Website & App Development, Social Media Marketing, Google Ads (PPC), Branding & Design, SEO (Search Engine Optimization), Video Marketing, Lead Generation, and Performance Marketing.
                        </p>
                    </div>

                    {/* Column 2: Services */}
                    <div className="mb-6 lg:mb-0">
                        <h3 className="text-lg font-semibold text-purple-800 mb-4">Services</h3>
                        <ul className="space-y-3">
                            <li><NavLink to="/services/seo" className="text-gray-600 hover:text-purple-700 transition-colors">Seo Service</NavLink></li>
                            <li><NavLink to="/services/ppc" className="text-gray-600 hover:text-purple-700 transition-colors">PPC (Pay-Per-Click) Advertising</NavLink></li>
                            <li><NavLink to="/services/web-design" className="text-gray-600 hover:text-purple-700 transition-colors">Web Design & Development</NavLink></li>
                            <li><NavLink to="/services/social-media-marketing" className="text-gray-600 hover:text-purple-700 transition-colors">Social Media Marketing</NavLink></li>
                            <li><NavLink to="/services/content-marketing" className="text-gray-600 hover:text-purple-700 transition-colors">Content Marketing</NavLink></li>
                            <li><NavLink to="/services/email-marketing" className="text-gray-600 hover:text-purple-700 transition-colors">Email Marketing</NavLink></li>
                        </ul>
                    </div>

                    {/* Column 3: Useful Links */}
                    <div className="mb-6 lg:mb-0">
                        <h3 className="text-lg font-semibold text-purple-800 mb-4">Useful Links</h3>
                        <ul className="space-y-3">
                            
                            <li><NavLink to="/" className="text-gray-600 hover:text-purple-700 transition-colors">Home</NavLink></li>
                            <li><NavLink to="/contact" className="text-gray-600 hover:text-purple-700 transition-colors">Contact Us</NavLink></li>
                            <li><NavLink to="/about-us" className="text-gray-600 hover:text-purple-700 transition-colors">About Us</NavLink></li>
                            {/* <li><NavLink to="/privacy-policy" className="text-gray-600 hover:text-purple-700 transition-colors">Privacy Policy</NavLink></li> */}
                        </ul>
                    </div>

                    {/* Column 4: Our Office Address */}
                    <div className="mb-6 lg:mb-0">
                        <h3 className="text-lg font-semibold text-purple-800 mb-4">Our Office Address</h3>
                        <p className="text-gray-600 leading-relaxed">
                            <br />
                            <br />
                            <br />
                            
                        </p>
                        <div className="mt-4">
                            <h4 className="font-semibold text-gray-700">E-mail Us</h4>
                            <a href="mailto:nexotikoffice@gmail.com" className="text-gray-600 hover:text-purple-700 transition-colors block">support@vntadvertising.in </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-gray-800 py-4">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <p className="text-center text-sm text-gray-300">
                        <p>Copyright   © {new Date().getFullYear()} VNT Advertising Solutions LLP. All rights reserved.
                        </p>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
