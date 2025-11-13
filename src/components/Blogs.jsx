import React from 'react';

export default function ArticleList() {
  const articles = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1577720643272-265f434b4a2e?w=500&h=300&fit=crop',
      title: 'Your downloadable guide to UK roundabouts',
      description: 'There is one road feature above all others that sends a shiver through the steering wheel – roundabouts. Download to find out how to master roundabouts big and small.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=300&fit=crop',
      title: 'How to provide No Claims Discount proof',
      description: 'A step-by-step guide to proving your claims-free driving history. We don\'t mind what country it\'s from – find the documents we accept and upload it on the app.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6e2?w=500&h=300&fit=crop',
      title: 'What car insurance documents do you need to get UK cover?',
      description: 'Take the stress out of signing up for UK car insurance by finding out what documents you need to get cover.'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&h=300&fit=crop',
      title: 'Article 4',
      description: 'Description for article 4'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=300&fit=crop',
      title: 'Article 5',
      description: 'Description for article 5'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
      title: 'Article 6',
      description: 'Description for article 6'
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gray-200 rounded-2xl">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Container */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {article.description}
                </p>

                {/* Read More Button */}
                <button className="inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-full transition-colors duration-300 text-sm">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
