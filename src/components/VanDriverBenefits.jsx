import React from 'react'

const VanDriverBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Cover for work tools",
      description: "Do you carry work tools in your van, or other work-related items? You'll need Carriage of Own Goods. Luckily, we have that!"
    },
    {
      id: 2,
      title: "The app",
      description: "Manage your policy and access your documents on the go, at any time of day. You can also start a claim and speak to us on Live Chat. It's fast, easy and rated 5 stars (almost)."
    },
    {
      id: 3,
      title: "24/7 claims line",
      description: "Whenever something happens, we're here to help. Your fault, not your fault, damage or no damage; let us know as soon as possible. We'll ask you what happened and get started on your claim."
    },
    {
      id: 4,
      title: "Fair play promises",
      description: "Bumped by an uninsured driver? Van's been vandalised? Don't pay for other people's crappy behaviour. We'll protect your claim-free driving discount and give you a full refund on what you pay for the claim (also called your excess)."
    },
    {
      id: 5,
      title: "Courtesy car",
      description: "If your van goes in for repair, we'll give you a replacement car or a van while it's being fixed - depending on availability."
    }
  ]

  return (
    <section className="bg-white py-16 lg:py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-bold text-gray-600 tracking-widest mb-4 uppercase">
            What people love
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4">
            1000s of van drivers choose us
          </h2>
          <p className="text-lg text-gray-700">
            Here are a few reasons why:
          </p>
        </div>

        {/* Benefits Grid - 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex flex-col">
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-base">
                {benefit.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default VanDriverBenefits
