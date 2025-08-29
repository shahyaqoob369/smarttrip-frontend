import React, { useState } from 'react';

const Hero = () => {
  // State for the form inputs
  const [destination, setDestination] = useState('');

  return (
    
    <div className="p-6"> 
      <div className="max-w-lg mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Search Hotels
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Best offers available, updated every 5 seconds
          </p>
        </div>

        {/* Search Form */}
        <div className="mt-12 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form className="grid grid-cols-1 gap-y-6">
            {/* Destination Input */}
            <div>
              <label htmlFor="destination" className="sr-only">Destination</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* --- THIS IS THE NEW, CLEANER ICON --- */}
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </div>

            {/* Check-in and Check-out Inputs */}
          <div className="grid grid-cols-2 gap-4">
            {/* Check-in Field with Label */}
            <div>
              <label htmlFor="checkin" className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
              <input id="checkin" type="text" placeholder="dd/mm/yyyy" className="block w-full py-2 px-3 border border-gray-300 rounded-md placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} />
            </div>
            {/* Check-out Field with Label */}
            <div>
              <label htmlFor="checkout" className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
              <input id="checkout" type="text" placeholder="dd/mm/yyyy" className="block w-full py-2 px-3 border border-gray-300 rounded-md placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} />
            </div>
          </div>

            {/* Search Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;