import React, { useEffect } from 'react';

const ActivitiesPage = () => {
  // This is the official, working Travelpayouts script for the Viator widget.
  // It is confirmed to be active on the client's account.
  const widgetScript = `//widgets.travelpayouts.com/assets/plugins/widgets/vyater.js?marker=${'661841'}&host=search.jetradar.com&locale=en&currency=usd&powered_by=false`;

  useEffect(() => {
    // This is the reliable script-injection logic we will use going forward.
    const script = document.createElement('script');
    script.src = widgetScript;
    script.async = true;
    
    const container = document.getElementById('activities-widget-container');
    if (container) {
      // Clear previous content to be safe
      container.innerHTML = '';
      container.appendChild(script);
    }

    return () => {
      if (container && container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, [widgetScript]);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Tours & Activities</h1>
        <p className="mb-8 text-gray-600">
          Discover and book unforgettable experiences around the world.
        </p>
        <div className="border-t pt-8">
          {/* The script will inject the Viator widget into this div */}
          <div id="activities-widget-container"></div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;
