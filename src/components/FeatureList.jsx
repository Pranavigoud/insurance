import React from 'react'

const FeatureList = () => {
  const features = [
    {
      id: 1,
      number: 1,
      title: "Save money",
      description: "No more being priced like a new driver. You could save an average of £392 with prices based on all your driving experience - in any country."
    },
    {
      id: 2,
      number: 2,
      title: "Pay the way you want",
      description: "Spread the cost across smaller monthly payments, choose your own payment date, and get extra help if you need it."
    },
    {
      id: 3,
      number: 3,
      title: "Build your own cover",
      description: "Only pay for what you want, with optional extras like breakdown cover, legal cover, discount protection - and loads more."
    },
    {
      id: 4,
      number: 4,
      title: "Get help fast",
      description: "Call us 24/7 for claims and accident support, find us on Live Chat, or browse our FAQs."
    }
  ]

  return (
    <section className="bg-orange-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center">
                <span className="text-white text-lg">→</span>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-tight text-gray-900 mb-4">
              Built with you in mind
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The cover you need for wherever you're going. No matter where you started.
            </p>
          </div>

          {/* RIGHT SIDE - Features */}
          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex gap-4">
                
                {/* Numbered Circle */}
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                    <span className="text-white font-black text-xl">{feature.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default FeatureList