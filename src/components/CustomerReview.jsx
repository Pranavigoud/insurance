import React, { useState } from 'react'

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      id: 1,
      rating: 5,
      title: "I had to upload my uk lic...",
      text: "I had to upload my uk licence and Elsie helped me to do this quickly thank you Elsie",
      author: "bimeesh varghese",
      date: "7 April"
    },
    {
      id: 2,
      rating: 5,
      title: "New policy on imported ...",
      text: "Just joined the company to insure an imported car not yet on UK plates which is not pr...",
      author: "Gill",
      date: "5 April"
    },
    {
      id: 3,
      rating: 5,
      title: "Best for people who con...",
      text: "The best thing I like is that Marshmallow understands that (people like me, a non...",
      author: "FIROZ MUHAMMED",
      date: "3 April"
    },
    {
      id: 4,
      rating: 5,
      title: "Updated my Uk license",
      text: "Was using international license to drive and now I have my UK full license. I chatted...",
      author: "Ugochukwu Nsude",
      date: "1 April"
    },
    {
      id: 5,
      rating: 5,
      title: "Thumbs up!",
      text: "I must say using Marshmallow is one of the best rewarding decisions I have made comin...",
      author: "Dairo",
      date: "29 March"
    },
    {
      id: 6,
      rating: 5,
      title: "Great service",
      text: "Easy to get a quote and register for foreign license drivers with fair cover and a convinient app to manage.",
      author: "Rita Galanits",
      date: "15 March"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="bg-gray-900 text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">⭐</span>
            <span className="text-sm font-bold">Trustpilot</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg">★</span>
              ))}
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-2">
            Rated Excellent on Trustpilot.
          </h2>
          <p className="text-xl text-gray-300">
            Look at that! Over 25,000 reviews already.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative mb-6">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800/60 hover:bg-gray-700 text-white text-3xl rounded-full w-10 h-10 flex items-center justify-center transition-all"
          >
            ‹
          </button>

          {/* Reviews Container */}
          <div className="overflow-hidden px-14">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 280}px)`
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="shrink-0 w-64 bg-white text-gray-900 p-5 rounded-lg"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-lg text-green-500">★</span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-sm mb-2 line-clamp-1">
                    {review.title}
                  </h3>

                  {/* Review Text */}
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                    {review.text}
                  </p>

                  {/* Author & Date */}
                  <p className="text-xs font-semibold text-gray-600">
                    {review.author}, <span className="font-normal">{review.date}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800/60 hover:bg-gray-700 text-white text-3xl rounded-full w-10 h-10 flex items-center justify-center transition-all"
          >
            ›
          </button>
        </div>

        {/* Footer Stats */}
        <div className="text-center mb-6 text-sm text-gray-400">
          <p>
            Rated 4.3 / 5 based on 37,174 reviews. Showing our favourite reviews.
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-green-500">⭐</span>
            <span className="font-semibold">Trustpilot</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-pink-500 hover:bg-pink-600 text-gray-900 font-bold px-8 py-3 rounded-full transition-colors duration-200">
            Join 200,000+ customers
          </button>
        </div>

      </div>
    </section>
  )
}

export default CustomerReview
