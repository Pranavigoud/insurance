import React, { useState } from 'react'
import { motion } from 'framer-motion'

const FAQList = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "Can you cover me if I'm not a UK resident?",
      answer: "We define a UK resident as anyone who spends, or intends to spend, at least 183 days a year in the UK and has a permanent address here. We only offer insurance to UK residents.‍ Am I a UK resident?‍You are still considered a UK resident if you are:- new to the UK (and spend, or intend to spend, 183 days or more in the UK)- on a spouse visa (and spend, or intend to spend, 183 days or more in the UK)You must have, or be in the process of getting, a permanent address in the UK with the intention of settling here so that we can insure you.Remember, being a UK resident is not the same as being a UK citizen. You do not need to be a UK citizen to get insurance with us"
    },
    {
      id: 2,
      question: "Is car insurance different in the UK?",
      answer: `Insurance works differently in every country.

The most important thing to know about car insurance in the UK is that it is a legal requirement.
If you own a car, you need to get it insured - whether you're driving it or not.

Important things to remember

- Car insurance is a legal requirement in the UK.

- In the UK you insure the driver, not the car. So if you want anyone else to drive your car, you either need to add them as an additional driver on your policy, or make sure they have their own insurance to drive it (for example, temporary insurance).

- Fully Comprehensive cover is the only level of cover in the UK that covers damage to you and your car as well as damage to others.

- Third-party cover is the minimum legal requirement in the UK. This covers injury and damage to others, but not to you. So if you're hurt or your car is damaged, you would need to pay all the costs yourself. We do not offer third-party cover.

- If you have an accident that is deemed to be your fault, you will need to contribute a small amount to your claim. This sum is called an excess. You will be told what your excess is when you get your quote, before you pay.`
    },
    {
      id: 3,
      question: "I didn't pass my test in the UK. Can I still get insured?",
      answer: "Not yet, but we are working on it.We always do our best to be as clear as possible. But we know things are still easier in our own language.If you’re on our website, you can try using your web browser’s translator.1. Right-click anywhere on the screen 2. You should see an option to translate into your preferred language We can’t promise it will be any good, but might be worth a try!"
    },
    {
      id: 4,
      question: "Do you offer translation services?",
      answer: "Yes, we offer translation services to help you understand your policy and other important documents."
    },
    {
      id: 5,
      question: "What is a No Claims Discount?",
      answer: "A No Claims Discount (NCD) is a reduction in your insurance premium for each year you don't make a claim. This rewards safe driving."
    },
    {
      id: 6,
      question: "What is the cheapest insurance you offer?",
      answer: "Our insurance options vary based on your needs and driving profile. Contact us for a personalized quote and to find the best option for you."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-blue-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          
          {/* LEFT SIDE - Title */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-300 rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full flex items-center justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-gray-900 text-center">
                Answers to important questions
              </h2>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FAQ Accordion */}
          <div className="lg:col-span-2">
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 rounded-xl sm:rounded-2xl"
                  >
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 pr-2">
                      {faq.question}
                    </h3>
                    <span className={`shrink-0 text-gray-400 text-xl sm:text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  {openIndex === index && (
                    <div className="px-4 sm:px-6 pb-3 sm:pb-4 pt-0">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FAQList