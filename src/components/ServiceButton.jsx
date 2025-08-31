import React, { useState } from 'react';

const ServiceButton = ({ IconComponent, label, colorClass, serviceKey }) => {
  // 1. We add a state to track if the button is currently loading
  const [isLoading, setIsLoading] = useState(false);

  const handleRedirect = async () => {
    // 2. Set loading to true immediately when the user clicks
    setIsLoading(true);

    try {
      const response = await fetch(`https://smarttrip-backend.onrender.com/redirect/${serviceKey}`);
      if (!response.ok) {
        throw new Error('Service not found');
      }
      const data = await response.json();
      window.open(data.url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error("Failed to redirect:", error);
      alert("Sorry, we couldn't find the link for that service.");
    } finally {
      // 3. Set loading back to false after the process completes (success or fail)
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleRedirect}
      disabled={isLoading} // Disable the button while loading to prevent multiple clicks
      className={`group flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ${colorClass} ${isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:brightness-110'}`}
    >
      {/* 4. We now conditionally render the content based on the loading state */}
      {isLoading ? (
        // If loading, show a spinner and "Loading..." text
        <>
          <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="mt-2 text-xs font-semibold text-white text-center">
            Loading...
          </span>
        </>
      ) : (
        // If not loading, show the normal icon and label
        <>
          <IconComponent className="h-8 w-8 text-white" />
          <span className="mt-2 text-sm font-semibold text-white text-center">
            {label}
          </span>
        </>
      )}
    </button>
  );
};

export default ServiceButton;
