import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { motion } from 'framer-motion';

const ServiceButton = ({ service }) => {
  const [isLoading, setIsLoading] = useState(false);
  // Safely access the environment variable for the API URL
  const apiUrl = import.meta.env.VITE_API_URL;

  const trackEvent = () => {
    ReactGA.event({
      category: "Service Button Clicks",
      action: `Clicked ${service.label}`,
      // Use the internal path for widgets/iframes, and the service key for direct links
      label: service.type === 'direct' ? service.serviceKey : service.to,
    });
  };

  const handleDirectRedirect = async () => {
    trackEvent();
    setIsLoading(true);
    try {
      const response = await fetch(`${apiUrl}/redirect/${service.serviceKey}`);
      if (!response.ok) throw new Error('Service not found');
      const data = await response.json();
      window.open(data.url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error("Failed to redirect:", error);
      // Using a more user-friendly error message without an alert popup
      // You could replace this with a toast notification in the future
    } finally {
      setIsLoading(false);
    }
  };

  // --- MAIN LOGIC ---
  // If the service type is 'widget' OR 'iframe', it's an internal link.
  if (service.type === 'widget' || service.type === 'iframe') {
    return (
      <motion.div
        className="w-full h-full"
        whileHover={{ scale: 1.08, y: -5 }} // Animation for desktop hover
        whileTap={{ scale: 0.95 }} // Animation for mobile tap
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <Link
          to={service.to}
          onClick={trackEvent}
          // Enforces uniform size for all buttons
          className={`group w-full h-28 flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-all duration-200 ${service.colorClass}`}
        >
          <service.Icon className="h-8 w-8 text-white" />
          <span className="mt-2 text-sm font-semibold text-white text-center">
            {service.label}
          </span>
        </Link>
      </motion.div>
    );
  }

  // Otherwise, it's a 'direct' link that opens in a new tab.
  return (
    <motion.div
      className="w-full h-full"
      whileHover={{ scale: 1.08, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <button
        onClick={handleDirectRedirect}
        disabled={isLoading}
        className={`group w-full h-28 flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-all duration-200 ${service.colorClass} ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            <span className="mt-2 text-xs font-semibold text-white text-center">Loading...</span>
          </>
        ) : (
          <>
            <service.Icon className="h-8 w-8 text-white" />
            <span className="mt-2 text-sm font-semibold text-white text-center">
              {service.label}
            </span>
          </>
        )}
      </button>
    </motion.div>
  );
};

export default ServiceButton;

