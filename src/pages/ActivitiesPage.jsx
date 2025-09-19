import React, { useState } from 'react';

const ActivitiesPage = () => {
  // State to hold the user's city input
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const affiliateMarker = '661841';
    
    // This is the correct search URL structure for Tiqets.
    // It accepts a city name directly.
    const searchUrl = `https://www.tiqets.com/en/search?q=${encodeURIComponent(city)}&marker=${affiliateMarker}`;
    
    // Open the search results in a new tab
    window.open(searchUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center flex items-center justify-center gap-3">
          <span>🗺️</span>
          <span>Tours & Activities</span>
        </h1>
        <p className="mb-8 text-gray-600 text-center">
          Discover and book unforgettable experiences around the world.
        </p>
        <div className="border-t pt-8">
          {/* Our New Custom Search Form */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                Enter a city or destination
              </label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g., Paris"
                required
                className="mt-1 block w-full p-3 border rounded-md"
              />
            </div>
            <div className="pt-2">
              <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700">
                Search Activities
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;