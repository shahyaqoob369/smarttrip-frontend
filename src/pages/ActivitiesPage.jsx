import React, { useState } from 'react';

const ActivitiesPage = () => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const affiliateMarker = '661841';
    
    // --- THIS IS THE CORRECTED URL STRUCTURE ---
    // We use the official Travelpayouts redirect link for Tiqets.
    const baseUrl = 'https://tiqets.tp.st/Ge9z3E5i';
    
    // We add the user's search query and our marker to this base URL.
    const searchUrl = `${baseUrl}?q=${encodeURIComponent(city)}&marker=${affiliateMarker}`;
    
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