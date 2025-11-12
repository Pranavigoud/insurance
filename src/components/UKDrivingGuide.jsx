import React from 'react'

const UKDrivingGuide = () => {
  return (
    <section className="bg-orange-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE - Title */}
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center">
                <span className="text-white text-xl">→</span>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-tight text-gray-900">
              New to driving in the UK?
            </h2>
          </div>

          {/* RIGHT SIDE - Content */}
          <div>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              We have a page for that! Click the link below for answers to questions like:
            </p>

            {/* Questions List */}
            <div className="space-y-5 mb-8">
              <div className="text-gray-700 leading-relaxed">
                <span className="font-semibold">"Do I need to swap my licence for a UK one?"</span>
              </div>
              <div className="text-gray-700 leading-relaxed">
                <span className="font-semibold">"How are you saving me so much money?!"</span>
              </div>
              <div className="text-gray-700 leading-relaxed">
                <span className="font-semibold">"What do I need to do before I'm legally allowed to drive?"</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-gray-400 hover:bg-gray-500 text-gray-900 font-bold px-8 py-3 rounded-full transition-colors duration-200">
              Read more about driving in the UK
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default UKDrivingGuide