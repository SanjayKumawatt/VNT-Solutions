// Header.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";

// Define the navigation links and dropdown services with proper routes
const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about-us' },
    // Contact has been moved to be rendered after the services dropdown
];

const digitalMarketingServices = [
    { name: 'SEO (Search Engine Optimization)', to: '/services/seo' },
    { name: 'PPC (Pay-Per-Click) Advertising', to: '/services/ppc' },
    { name: 'Social Media Marketing', to: '/services/social-media-marketing' },
    { name: 'Content Marketing', to: '/services/content-marketing' },
    { name: 'Email Marketing', to: '/services/email-marketing' },
    { name: 'Web Design & Development', to: '/services/web-design' },
];

const Header = () => {
    // State for mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // State for the desktop Services dropdown
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

    // Style for active NavLink
    const activeLinkStyle = {
        color: '#8B5CF6', // This is a purple color
        fontWeight: '600'
    };

    return (
        <header className="bg-purple-100 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo/Brand Name now links to Home */}
                    <NavLink to="/" className="flex-shrink-0 flex items-center">
                        <div className="text-3xl font-bold text-gray-800 tracking-wide flex items-center">
                            <img src={logo} alt="" className='h-15'/>                            VNT Solutions
                        </div>
                    </NavLink>

                    {/* Desktop Navigation, Phone, and Button */}
                    <nav className="hidden lg:flex lg:space-x-20 items-center">
                        {/* Main Links (Home, About Us) */}
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.to}
                                className="text-gray-700 hover:text-purple-700 transition duration-150 ease-in-out font-medium"
                                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        {/* Our Services Dropdown (Moved before Contact) */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsServicesDropdownOpen(true)}
                            onMouseLeave={() => setIsServicesDropdownOpen(false)}
                        >
                            <button
                                className="flex items-center text-gray-700 hover:text-purple-700 transition duration-150 ease-in-out font-medium focus:outline-none"
                            >
                                Our Services
                                <svg
                                    className="ml-1 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {/* Dropdown Menu - shows on hover */}
                            {isServicesDropdownOpen && (
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-64 bg-white rounded-lg shadow-xl py-1 z-10 transition-all duration-300 ease-in-out">
                                    {digitalMarketingServices.map((service) => (
                                        <NavLink
                                            key={service.name}
                                            to={service.to}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition duration-150 ease-in-out whitespace-nowrap"
                                            onClick={() => setIsServicesDropdownOpen(false)}
                                        >
                                            {service.name}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Contact Link */}
                        <NavLink
                            to="/contact"
                            className="text-gray-700 hover:text-purple-700 transition duration-150 ease-in-out font-medium"
                            style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                        >
                            Contact
                        </NavLink>
                    </nav>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-700 hover:bg-purple-100 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isMobileMenuOpen && (
                <div className="lg:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-purple-200">
                        {/* Main Links */}
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.to}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-purple-200"
                                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        {/* Our Services Title for Mobile */}
                        <div className="px-3 pt-4 pb-2">
                            <span className="font-bold text-lg text-purple-700">Our Services</span>
                        </div>

                        {/* Digital Marketing Services for Mobile */}
                        <div className="pl-4 border-t border-purple-100">
                            {digitalMarketingServices.map((service) => (
                                <NavLink
                                    key={service.name}
                                    to={service.to}
                                    className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-purple-100"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    - {service.name}
                                </NavLink>
                            ))}
                        </div>

                        {/* Contact Link for Mobile */}
                        <NavLink
                            to="/contact"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-purple-200"
                            style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

