import React, { useState } from 'react'

const FAQList = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "Can you cover me if I'm not a UK resident?",
      answer: "Yes, we can provide coverage for non-UK residents. Please contact us for more details about eligibility and requirements."
    },
    {
      id: 2,
      question: "Is car insurance different in the UK?",
      answer: "Yes, car insurance in the UK has different requirements and coverage options compared to other countries. Our team can help you understand the differences."
    },
    {
      id: 3,
      question: "I didn't pass my test in the UK. Can I still get insured?",
      answer: "Yes, we can provide insurance even if you passed your driving test outside the UK. We value your international driving experience."
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
    <section className="bg-orange-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT SIDE - Title */}
          <div className="lg:col-span-1">
            <div className="bg-gray-300 rounded-3xl p-8 h-full flex items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-black leading-tight text-gray-900 text-center">
                Answers to important questions
              </h2>
            </div>
          </div>

          {/* RIGHT SIDE - FAQ Accordion */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 rounded-2xl"
                  >
                    <h3 className="text-lg font-bold text-gray-900">
                      {faq.question}
                    </h3>
                    <span className={`shrink-0 text-gray-400 text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  {openIndex === index && (
                    <div className="px-6 pb-4 pt-0">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FAQList