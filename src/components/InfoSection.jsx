import React from 'react'

const InfoSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE - Title with Icon */}
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center">
                <span className="text-white text-xl">→</span>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-tight text-gray-900">
              Your difference makes the difference
            </h2>
          </div>

          {/* RIGHT SIDE - Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              People who move to the UK used to pay more for their car insurance than their UK-born friends. Why? Because most insurers only care about the driving experience you gain after you move here.
            </p>

            <p className="text-lg text-gray-900 font-bold">
              So we started Marshmallow!
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We give you the chance to tell us your whole story, no matter where you started your driving journey. And it doesn't just mean big savings. We'll also do everything we can to support you, whenever you need us, as you make the UK your new home.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default InfoSection