import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section - Social & Navigation */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-gray-700">
          
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-white hover:text-pink-500 transition-colors text-2xl">
              📷
            </a>
            <a href="#" className="text-white hover:text-pink-500 transition-colors text-2xl">
              f
            </a>
            <a href="#" className="text-white hover:text-pink-500 transition-colors text-2xl">
              𝕏
            </a>
            <a href="#" className="text-white hover:text-pink-500 transition-colors text-2xl">
              in
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-4 md:gap-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">SFCR</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Anti-Slavery Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Complaints Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Jobs</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Money Worries</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Refer a friend</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Perks</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Discounts</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Help</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Log in</a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
          
          {/* Left Side - Certificates & Info */}
          <div>
            {/* Certificates Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Certificates & awards</h3>
              <div className="flex flex-wrap gap-4">
                <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="space-y-4 text-sm text-gray-300">
              <p>
                Marshmallow is a trading name used by the following companies:
              </p>

              <p>
                Marshmallow Financial Services Limited is authorised and regulated by the Financial Conduct Authority(FCA) <a href="#" className="text-pink-500 hover:text-pink-400 transition-colors">under firm reference number 797672</a>. Registered in England and Wales with company number 11005345.
              </p>

              <p>
                Marshmallow Credit Services Limited is is authorised and regulated by the Financial Conduct Authority (FCA) under firm reference number 1024606. Registered in England and Wales with company number 15834468.
              </p>

              <p>
                The registered address for both companies is 66 City Road, London, EC1Y 1BD
              </p>
            </div>
          </div>

          {/* Right Side - Logo */}
          <div className="flex items-end justify-end">
            <div className="text-right">
              <div className="flex items-center gap-2 justify-end">
                <span className="text-3xl">🎀</span>
                <span className="text-2xl font-bold">marshmallow</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-xs text-gray-500 text-center">
            © 2024 Marshmallow. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer