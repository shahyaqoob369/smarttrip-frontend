import React, { useState } from "react";

const CruisesPage = () => {
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const affiliateMarker = "661841";

    // Custom search URL for Searadar
    const searchUrl = `https://searadar.com/?marker=${affiliateMarker}&search=${encodeURIComponent(
      destination
    )}`;

    // Open Searadar in a new tab
    window.open(searchUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center flex items-center justify-center gap-3">
          <span>🛥️</span>
          <span>Yachts & Cruises</span>
        </h1>
        <p className="mb-8 text-gray-600 text-center">
          We’ve found today’s best yacht rental provider.
            Browse premium boat experiences below.
        </p>
        <div className="border-t pt-8">
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
            <div>
              <label
                htmlFor="destination"
                className="block text-sm font-medium text-gray-700"
              >
                Enter a destination
              </label>
              <input
                id="destination"
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g., Greek Islands"
                required
                className="mt-1 block w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700"
              >
                Search Cruises
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CruisesPage;
