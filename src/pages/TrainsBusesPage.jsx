import React, { useState } from 'react';

const TrainsBusesPage = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is the client's unique affiliate ID for Travelpayouts
    const affiliateMarker = '661841'; 
    
    // MODIFICATION: This is the correct base URL for generating an Omio search.
    // We are now building the URL directly for Omio's search engine.
    const baseUrl = 'https://www.omio.com/search-frontend/results';

    // MODIFICATION: The parameter names have been updated to match what Omio's system expects.
    // We are also including the essential 'shmarker' for affiliate tracking.
    const queryParams = new URLSearchParams({
      departure_name: origin,
      arrival_name: destination,
      shmarker: affiliateMarker
    }).toString();

    const searchUrl = `${baseUrl}?${queryParams}`;
    
    window.open(searchUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center flex items-center justify-center gap-3">
          <span>🚆</span>
          <span>Search for Trains & Buses</span>
        </h1>
        <p className="mb-8 text-gray-600 text-center">
          Find the best deals on train and bus tickets across Europe and beyond with our partner, Omio.
        </p>
        <div className="border-t pt-8">
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="origin" className="block text-sm font-medium text-gray-700">
                  From
                </label>
                <input
                  id="origin"
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  placeholder="e.g., Rome"
                  required
                  className="mt-1 block w-full p-3 border rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                  To
                </label>
                <input
                  id="destination"
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g., Florence"
                  required
                  className="mt-1 block w-full p-3 border rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
            <div className="pt-2">
              <button type="submit" className="w-full bg-red-600 text-white font-semibold py-3 rounded-md hover:bg-red-700">
                Search Tickets
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrainsBusesPage;
