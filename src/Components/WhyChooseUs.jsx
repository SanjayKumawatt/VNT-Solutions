// src/components/WhyChooseUs.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import banner2 from "../assets/banner2.webp";

// The local image import has been removed to fix the compilation error.
// We will now use a placeholder URL directly in the img tag.

const WhyChooseUs = () => {
  return (
    // Section with the exact light purple background color from the image
    <section className="bg-[#EAE0F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-16 gap-y-16">
          
          {/* Left Column: Text Content */}
          <div className="text-left">
            <p className="font-semibold text-purple-700 uppercase tracking-wide">
              Why Us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Should you Choose Our digital marketing agency
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Do you need help attaining your marketing goals? Are you looking for a
              digital advertising agency? We are your best choice! We are a full-service
              digital marketing agency that focuses on assisting companies in
              succeeding through cutting-edge and potent techniques.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The three reasons that follow as to why you need to pick our team for your
              digital marketing requirements:
            </p>
            
            {/* Numbered List of Reasons */}
            <ol className="mt-6 space-y-5 text-gray-600 list-decimal list-inside">
              <li>
                <span className="font-semibold text-gray-800">We offer comprehensive services</span>, including: All parts of digital
                marketing, including SEO, content creation, social media management,
                and others, are areas in which our team of professionals excels. This
                shows that we can provide you with the specialist solutions you need to
                get results.
              </li>
              <li>
                <span className="font-semibold text-gray-800">We have a track record</span>: With years of industry experience, we have
                assisted countless firms in achieving their objectives. Our staff has the
                know-how to produce effective campaigns that can increase brand
                awareness and provide you a competitive advantage.
              </li>
              <li>
                <span className="font-semibold text-gray-800">Client satisfaction is our top priority</span>: At our company, client pleasure is
                our top priority. We work hard to deliver services of the greatest calibre.
              </li>
            </ol>

            <div className="mt-10">
              <NavLink
                to="/about-us"
                className="inline-block rounded-md bg-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                Know About Us
              </NavLink>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center items-center">
            {/* ERROR FIX: Replaced the local image import with a placeholder URL. */}
            {/* Aap is 'src' ko apni actual image ke path se badal sakte hain. */}
            <img
              src={banner2}
              alt="Team analyzing marketing data on screens"
              className="w-full max-w-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;