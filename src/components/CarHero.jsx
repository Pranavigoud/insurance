import React from 'react'

const CarHero = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 lg:px-8 py-16 lg:py-0">
        
        {/* LEFT SIDE - Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white">
            Award-winning<br />car insurance
          </h1>

          <p className="text-lg md:text-xl mb-4 text-gray-100">
            Fully comprehensive.<br />
            Fully flexible. <span className="text-pink-400 font-bold">Fully pink.</span>
          </p>

          {/* CTA Button */}
          <button className="bg-pink-400 hover:bg-pink-500 text-gray-900 font-bold px-8 py-3 rounded-full max-w-xs mb-8 transition-colors duration-200">
            Get a free quote
          </button>

          {/* Stats */}
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <span className="text-pink-400 text-2xl">⊕</span>
              <span className="text-base md:text-lg">Over £200 million paid out in claims</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-pink-400 text-2xl">⊕</span>
              <span className="text-base md:text-lg">Over 300,000 app downloads</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md h-96 md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Car interior with mascot"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default CarHero
