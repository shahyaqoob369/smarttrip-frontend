import React from 'react';

const ServiceButton = ({ IconComponent, label, colorClass, serviceKey }) => {
  const handleRedirect = async () => {
    try {
      // Calls our LIVE backend API
      const response = await fetch(`https://smarttrip-backend.onrender.com/redirect/${serviceKey}`);
      if (!response.ok) {
        throw new Error('Service not found');
      }
      const data = await response.json();
      // Opens the link received from the backend
      window.open(data.url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error("Failed to redirect:", error);
      alert("Sorry, we couldn't find the link for that service.");
    }
  };

  return (
    <button
      onClick={handleRedirect}
      className={`group flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ${colorClass} hover:brightness-110 text-left`}
    >
      <IconComponent className="h-8 w-8 text-white" />
      <span className="mt-2 text-sm font-semibold text-white text-center">
        {label}
      </span>
    </button>
  );
};

export default ServiceButton;