// Error404.jsx

import React from 'react';

const Error404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-50">
      <div className="text-center p-8 max-w-lg mx-auto bg-white rounded-xl shadow-2xl transition-transform transform hover:scale-[1.01] duration-300">
        
        {/* Error Code */}
        <h1 className="text-9xl font-extrabold text-purple-700 tracking-widest">
          404
        </h1>
        
        {/* Custom Message */}
        <div className="bg-purple-700 px-4 py-2 text-sm text-white rounded rotate-12 absolute -top-4 -right-4 shadow-lg">
          Page Not Found
        </div>
        
        {/* Main Heading */}
        <p className="text-2xl font-bold text-gray-800 mt-6 mb-4">
          Oho! Humari digital duniya mein yeh page nahi mila.
        </p>
        
        {/* Sub-text */}
        <p className="text-gray-600 mb-8">
          Aisa lagta hai aap galat link par aa gaye hain. Chinta na karein, wapas chaliye.
        </p>
        
        {/* Call to Action Button - Back to Home */}
        <a 
          href="/" // Replace '/' with your actual home page route if different
          className="inline-block px-6 py-3 text-sm font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-300 shadow-md transform hover:shadow-xl hover:translate-y-[-2px]"
        >
          <span className="mr-2">🏠</span> Home Page Par Wapas Jaayen
        </a>
      </div>
    </div>
  );
};

export default Error404;