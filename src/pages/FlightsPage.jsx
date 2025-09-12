import React, { useEffect, useState, useRef } from 'react';

const FlightsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  // This is the correct and official script URL you provided from the client's dashboard.
  const widgetScript = `//tpwdg.com/content?currency=usd&trs=446991&shmarker=661841&show_hotels=true&powered_by=true&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%2332a8dd&color_button=%2332a8dd&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=0&plain=false&promo_id=7879&campaign_id=100`;

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
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center flex items-center justify-center gap-3">
          <span>✈️</span>
          <span>Flights</span>
        </h1>
        <p className="mb-8 text-gray-600 text-center">
          We’ve found the best flight provider for today.
          Start searching below with our trusted partner.
        </p>
        <div className="border-t pt-8">
          <div id="flights-widget-container" ref={containerRef} className="relative min-h-[350px]">
            {isLoading && (
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-50/50 rounded-lg">
                <svg className="animate-spin h-8 w-8 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="mt-4 text-gray-500">Loading flight search...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightsPage;

