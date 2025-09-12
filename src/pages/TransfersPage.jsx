import React, { useEffect, useState, useRef } from 'react';

const TransfersPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  // This is the correct script URL for the Welcome Pickups widget.
  const widgetScript = `//tpwdg.com/content?trs=446991&shmarker=661841&locale=en&show_header=true&powered_by=true&campaign_id=627&promo_id=8951`;

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

    // --- We add a check to prevent adding the script multiple times ---
    const existingScript = document.querySelector(`script[src="${widgetScript}"]`);
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = widgetScript;
      script.async = true;
      container.appendChild(script);
    } else {
      // If script exists but our component re-mounted, we might need to re-init
      // For now, we assume it's okay and just stop our loader
      setIsLoading(false);
      observer.disconnect();
    }


    // --- THIS IS THE ONLY CHANGE ---
    // The new cleanup function is simpler and safer.
    // It only disconnects the observer and leaves the script in place.
    return () => {
      observer.disconnect();
    };
  }, [widgetScript]);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        {/* Centered title with emoji */}
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center flex items-center justify-center gap-3">
          <span>🚚</span>
          <span>Airport Transfers</span>
        </h1>
        {/* Centered paragraph */}
        <p className="mb-8 text-gray-600 text-center">
          We’ve picked the best airport transfer provider for today.
          Secure your ride below in just a few clicks.
        </p>
        <div className="border-t pt-8">
          <div id="transfers-widget-container" ref={containerRef} className="relative min-h-[400px]">
            {isLoading && (
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-50/50 rounded-lg">
                <svg className="animate-spin h-8 w-8 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                <p className="mt-4 text-gray-500">Loading transfer search...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransfersPage;