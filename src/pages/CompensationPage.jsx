import React, { useEffect, useState, useRef } from 'react';

const CompensationPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  const widgetScript = `//tpwdg.com/content?trs=446991&shmarker=661841&lang=en&powered_by=true&campaign_id=120&promo_id=8679`;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new MutationObserver((mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          setIsLoading(false);
          observer.disconnect();
          return;
        }
      }
    });

    observer.observe(container, { childList: true });

    const script = document.createElement('script');
    script.src = widgetScript;
    script.async = true;
    container.appendChild(script);

    return () => {
      observer.disconnect();
      if (container && container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, [widgetScript]);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 flex items-center justify-center gap-3">
          <span>✈️</span>
          <span>Flight Compensation</span>
        </h1>
        <p className="mb-8 text-gray-600 text-center">
          Check if you are eligible for compensation for a delayed or canceled flight.
        </p>
        <div className="border-t pt-8">
          {/* 1. We've ensured this container has a minimum height */}
          <div id="compensation-widget-container" ref={containerRef} className="relative min-h-[300px]">
            {isLoading && (
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-50/50 rounded-lg">
                {/* 2. The spinner color is now 'text-orange-500' */}
                <svg className="animate-spin h-8 w-8 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="mt-4 text-gray-500">Loading search form...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompensationPage;