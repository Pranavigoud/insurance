import React, { useState } from 'react';

export default function ArticleList() {
  const [activeTab, setActiveTab] = useState('driving');

  const drivingArticles = [
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
      title: 'UK Driving Tips for International Drivers',
      description: 'Learn the essential driving tips and rules that differ in the UK compared to other countries.'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=300&fit=crop',
      title: 'Understanding UK Road Signs',
      description: 'A comprehensive guide to UK road signs and what they mean for safe driving.'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
      title: 'Winter Driving Safety Tips',
      description: 'Essential tips for staying safe on UK roads during winter months.'
    }
  ];

  const insideBeArticles = [
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=300&fit=crop',
      title: 'A techie, a car and a whole lot of life admin',
      description: 'Pujitha is an Engineering Manager at Be Sure. Born in India, this is her story of moving to the UK and why she loves working here.'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1577720643272-265f434b4a2e?w=500&h=300&fit=crop',
      title: 'How we replaced one of our key fraud prevention services...',
      description: 'Gabor is a Tech Lead at Be Sure. Here he recaps one of the issues his team faced as the businesses scaled, and the steps they took to find a solution.'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=300&fit=crop',
      title: 'Be Sure raises $90 million: funding for more...',
      description: 'The news is out! We\'re proud to announce that we\'ve just closed a new Series C funding round - raising $90 million from Portage, BlackRock and Columbia Lake'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6e2?w=500&h=300&fit=crop',
      title: 'Behind the Scenes at Be Sure',
      description: 'Meet the team members who keep Be Sure running smoothly and learn about their journey.'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&h=300&fit=crop',
      title: 'Be Sure Culture and Values',
      description: 'Discover what makes Be Sure a unique place to work and our core values that drive us forward.'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
      title: 'Be Sure in the News',
      description: 'Read about Be Sure\'s latest achievements and milestones in the media.'
    }
  ];

  const displayArticles = activeTab === 'driving' ? drivingArticles : insideBeArticles;

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('driving')}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
              activeTab === 'driving'
                ? 'bg-gray-900 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Driving and UK car insurance
          </button>
          <button
            onClick={() => setActiveTab('inside')}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
              activeTab === 'inside'
                ? 'bg-gray-900 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Inside Be Sure
          </button>
        </div>

        {/* Grid Layout - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gray-200 rounded-t-2xl">
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

                {/* Read Article Button */}
                <button className="inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-full transition-colors duration-300 text-sm">
                  Read article
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
