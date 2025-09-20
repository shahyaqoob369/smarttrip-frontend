import React, { useState } from 'react';

const CruisesPage = () => {
  // State to hold the user's destination input
  const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // The client's unique affiliate marker for SeaRadar
    const affiliateMarker = '661841';
    
    // This URL structure sends the user to the SeaRadar homepage
    // with the affiliate marker and the user's search query included.
    const searchUrl = `https://searadar.com/?q=${encodeURIComponent(destination)}&marker=${affiliateMarker}`;
    
    // Open the search results in a new tab
    window.open(searchUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center flex items-center justify-center gap-3">
          <span>⛵</span>
          <span>Yachts & Cruises</span>
        </h1>
        <p className="mb-8 text-gray-600 text-center">
          Find and book your perfect yacht charter or cruise adventure with our partner, SeaRadar.
        </p>
        <div className="border-t pt-8">
          {/* Custom Search Form for SeaRadar */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                Enter a region or destination
              </label>
              <input
                id="destination"
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g., Croatia"
                required
                className="mt-1 block w-full p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="pt-2">
              <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700">
                Search Charters
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CruisesPage;