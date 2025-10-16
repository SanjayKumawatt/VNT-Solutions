// src/components/AboutHero.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section className="bg-[#EAE0F2] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          About Us
        </h1>
        <div className="mt-4 text-sm text-gray-600">
          <NavLink to="/" className="hover:text-purple-700 transition-colors">
            Home
          </NavLink>
          <span className="mx-2">/</span>
          <span>About-Us</span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;