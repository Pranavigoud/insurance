import React from 'react';

export default function BlogHero() {
  return (
    <section className="w-full bg-linear-to-b from-amber-50 to-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-6">
          The Campfire
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-center text-gray-700 mb-12 leading-relaxed">
          Everything you need to know about driving in the UK, and getting insured
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
            Driving and UK car insurance
          </button>
          <button className="bg-amber-100 hover:bg-amber-200 text-gray-900 font-semibold py-3 px-8 rounded-full transition-colors duration-300">
            Inside Marshmallow
          </button>
        </div>
      </div>
    </section>
  );
}
