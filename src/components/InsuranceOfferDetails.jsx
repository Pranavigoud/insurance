import React from 'react'

const InsuranceOfferDetails = () => {
  return (
    <section className="bg-[#c97a3a] py-16 lg:py-24 px-6 lg:px-8 rounded-3xl mx-6 lg:mx-12 my-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            What our car insurance looks like
          </h2>
          <p className="text-lg text-white opacity-95">
            Fully comprehensive cover for wherever you're going, no matter where you started.
          </p>
        </div>

        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* What's Included */}
          <div className="bg-[#f9f6f1] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What's included
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-800 text-sm leading-relaxed">
                  Vehicle repairs or replacement after accident, fire or theft.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-800 text-sm leading-relaxed">
                  Personal injury costs.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-800 text-sm leading-relaxed">
                  Third-party cover to drive in Europe.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-800 text-sm leading-relaxed">
                  Courtesy car if yours is in for repairs (on all but our cheapest plan).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-800 text-sm leading-relaxed">
                  Exclusive discounts on UK credit builders, gym memberships and more.
                </span>
              </li>
              <li className="text-gray-800 text-sm leading-relaxed pt-2">
                And more...
              </li>
            </ul>
          </div>

          {/* Extra Things You Can Add */}
          <div className="bg-[#f9f6f1] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Extra things you can add
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-lg mt-0.5">+</span>
                <span className="text-gray-800 text-sm leading-relaxed">
                  Cover for other people to drive your car.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-lg mt-0.5">+</span>
                <span className="text-gray-800 text-sm leading-relaxed">
                  No Claims Discount protection (keep your claim-free driving discount if you have an accident).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-lg mt-0.5">+</span>
                <span className="text-gray-800 text-sm leading-relaxed">
                  Windscreen protection.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-lg mt-0.5">+</span>
                <span className="text-gray-800 text-sm leading-relaxed">
                  Breakdown cover.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-lg mt-0.5">+</span>
                <span className="text-gray-800 text-sm leading-relaxed">
                  Full cover to drive in Europe.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-lg mt-0.5">+</span>
                <span className="text-gray-800 text-sm leading-relaxed">
                  Motor Legal Protection (cover for legal costs).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-lg mt-0.5">+</span>
                <span className="text-gray-800 text-sm leading-relaxed">
                  Excess protection (100% refund on what you pay if you make a claim).
                </span>
              </li>
              <li className="text-gray-800 text-sm leading-relaxed pt-2">
                And more...
              </li>
            </ul>
          </div>

          {/* Who We Can Cover */}
          <div className="bg-[#f9f6f1] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Who we can cover
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-800 text-sm leading-relaxed">
                  UK residents. A resident is defined as someone who lives here, or who has moved here and intends to live here permanently (at least 183 days a year).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-800 text-sm leading-relaxed">
                  Licences from all countries are covered for 12 months. You may need to exchange your licence to a UK one after that. <a href="#" className="underline font-semibold">You can check here</a>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-800 text-sm leading-relaxed">
                  Full UK licences (for people aged 21-75).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-800 text-sm leading-relaxed">
                  Provisional licences (subject to some restrictions).
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default InsuranceOfferDetails
