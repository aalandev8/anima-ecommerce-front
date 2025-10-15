import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="inline-flex items-center bg-green-100 rounded-full px-4 py-2 text-sm font-medium text-green-800">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse"></span>
              Now delivering in your area
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
              Delicious Food,
              <span className="text-green-600"> Tailored</span> for Your Needs
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Discover certified Kosher, Diabetic-friendly, Gluten-free, and specialty meals delivered to your door. Quality you can trust, taste you'll love.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-xl">
                <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Enter your delivery address"
                  className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-md hover:shadow-lg">
                Find Food
              </button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600">Restaurants</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">50K+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">4.8</p>
                <p className="text-sm text-gray-600">Rating</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
                ✡️ Kosher Certified
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
                🍃 Diabetic-Friendly
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
                🌾 Gluten-Free
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
                🥗 Vegan Options
              </span>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 h-64 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl shadow-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500/20 to-emerald-600/20">
                  <div className="text-center text-white">
                    <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p className="text-lg font-semibold">Featured Meal</p>
                  </div>
                </div>
              </div>

              <div className="h-40 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl shadow-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-500/20 to-orange-600/20">
                  <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>

              <div className="h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl shadow-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-600/20">
                  <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-2xl p-4 transform rotate-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900">4.8 ⭐</p>
                  <p className="text-xs text-gray-500">Top Rated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};