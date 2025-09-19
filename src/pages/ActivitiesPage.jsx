import React, { useEffect, useState, useRef } from 'react';

const ActivitiesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  // This is the widget script from your screenshot for New York tours.
  const widgetScript = `//tpwdg.com/content?currency=usd&trs=446991&shmarker=661841&locale=en&id=3947&destination=263532&layout=horizontal&powered_by=true`;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // This observer watches for the widget to add content to our page.
    // When it does, we know it has loaded, and we can hide the spinner.
    const observer = new MutationObserver(() => {
      if (container.innerHTML.trim() !== '') {
        setIsLoading(false);
        observer.disconnect();
      }
    });

    observer.observe(container, { childList: true });

    // Create and inject the script tag into the page
    const script = document.createElement('script');
    script.src = widgetScript;
    script.async = true;
    script.charset = 'utf-8';
    container.appendChild(script);

    return () => {
      // Clean up the observer and script when the component unmounts
      observer.disconnect();
      if (container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, [widgetScript]);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-yellow-600 mb-6 text-center">
          Popular Tours & Activities
        </h1>
        <p className="mb-8 text-gray-600 text-center">
          Explore bestselling attractions and book your tickets with our trusted partner, Tiqets.
        </p>
        <div className="border-t pt-8">
          {/* This container is where the widget will be rendered */}
          <div ref={containerRef} className="relative min-h-[400px]">
            {/* Show a loading spinner until the widget is ready */}
            {isLoading && (
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-50/50 rounded-lg">
                <svg className="animate-spin h-8 w-8 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="mt-4 text-gray-500">Loading popular tours...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;