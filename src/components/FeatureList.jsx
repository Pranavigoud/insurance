import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

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
    <section className="bg-white py-10 sm:py-14 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* LEFT: Heading */}
          <motion.div
            className="lg:col-span-1 flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-600 to-teal-500 flex items-center justify-center shadow-md">
                <FaArrowRight className="text-white text-base sm:text-lg" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Built with you in mind
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              The cover you need for wherever you're going — flexible, fair and simple.
            </p>
          </motion.div>

          {/* RIGHT: Feature cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-200"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-green-600 to-teal-500 text-white font-black text-lg">
                    {feature.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default FeatureList