import React from 'react'

const CoverageOptions = () => {
  const coverageOptions = [
    {
      id: 1,
      type: "Car",
      icon: "🚗",
      backgroundColor: "bg-blue-400"
    },
    {
      id: 2,
      type: "Van",
      icon: "🚐",
      backgroundColor: "bg-green-600"
    }
  ]

  return (
    <section className="bg-orange-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* LEFT SECTION - Main Content */}
          <div className="lg:w-1/2 bg-orange-600 rounded-3xl p-12 flex flex-col justify-center text-white">
            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              You drive, we cover
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              If it revvs, spins, humms, zooms, beeps. We cover it. As long as it's a car or a van.
            </p>
          </div>

          {/* RIGHT SECTION - Coverage Cards */}
          <div className="lg:w-1/2 flex flex-col sm:flex-row gap-6">
            {coverageOptions.map((option) => (
              <div
                key={option.id}
                className="flex-1 bg-white rounded-3xl p-8 flex flex-col items-center justify-between shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                
                {/* Icon Container */}
                <div className={`w-28 h-28 ${option.backgroundColor} rounded-3xl flex items-center justify-center mb-6`}>
                  <span className="text-6xl">{option.icon}</span>
                </div>

                {/* Type Label */}
                <h3 className="text-3xl font-black text-gray-900 mb-6">
                  {option.type}
                </h3>

                {/* CTA Button */}
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold px-6 py-2 rounded-full transition-colors duration-200">
                  Find out more
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default CoverageOptions