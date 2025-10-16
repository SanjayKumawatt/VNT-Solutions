// src/components/MarketingFunnel.jsx

import React from 'react';

// Data for the funnel stages to keep the code clean
const funnelStages = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: 'Awareness:',
    description: 'The awareness stage is at the top of the funnel, where potential customers are introduced to the brand and its offerings through a variety of channels, including social media, search engines, online ads, and grapevine chatter.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
      </svg>
    ),
    title: 'Interest:',
    description: 'The "Interest" stage of the buyer journey is where the prospective consumer has expressed interest in the brand and its offerings. This could be accomplished by visiting the website frequently, participating in social media content, or subscribing.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Consideration:',
    description: 'Consideration: During this stage, the curious customer is considering purchasing a product or service and is currently researching it. They could be reading reviews, comparing prices, or looking for more information about a product or service.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Intent:',
    description: 'During this stage, the curious customer is considering purchasing a product or service and is currently researching it. They could be reading reviews, comparing prices, or looking for more information about a product or service.',
  },
];

const MarketingFunnel = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">

          {/* Left Column: Text Content */}
          <div className="lg:pr-8">
            <p className="font-semibold text-purple-700 uppercase tracking-wide">
              Smart Digital Marketing Funnel            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight">
              A strategic journey created by our agency to convert audiences into paying customers.
            </h2>
            <div className="mt-6 text-gray-600 space-y-5 leading-relaxed">
              <p>
                In digital marketing, the funnel concept is the foundation of success, and every marketer must understand it. A funnel acts as a roadmap that tracks a potential customer’s journey from the first interaction with a brand to the final conversion. At our digital marketing agency, we focus on building well-crafted funnels that not only generate high-quality leads but also drive meaningful conversions — recognizing their undeniable importance in business growth.
              </p>
              <p>
                Understanding the digital marketing funnel is essential for marketers aiming to create targeted campaigns and guide customers smoothly through each stage. By optimizing every step of the funnel, businesses can significantly improve conversions, retention, and overall revenue. However, mastering the art of the funnel requires continuous experimentation, analysis, and adaptation to truly understand and enhance the customer journey.
              </p>
              <p>
               Our digital marketing agency understands the importance of regularly analyzing and optimizing a successful funnel. We maximize our clients’ return on investment by continuously tracking campaign performance and refining strategies. With our funnel optimization expertise, we help businesses generate more leads, boost conversions, and achieve sustainable growth. Our efforts remain focused and impactful — delivering results that truly matter.
              </p>
            </div>
          </div>

          {/* Right Column: Funnel Stages */}
          <div className="flex flex-col space-y-10">
            {funnelStages.map((stage, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-lg bg-purple-100">
                  {stage.icon}
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-gray-900">{stage.title}</h3>
                  <p className="mt-1 text-gray-600 leading-relaxed">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingFunnel;