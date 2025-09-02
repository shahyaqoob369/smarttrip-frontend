// TravelpayoutsWidget.jsx
import React, { useEffect, useRef } from 'react';

const TravelpayoutsWidget = ({ scriptSrc }) => {
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    console.log('[TP Widget] Mounting with script:', scriptSrc);

    // Prevent duplicates
    if (document.querySelector(`script[src="${scriptSrc}"]`)) {
      console.log('[TP Widget] Script already loaded.');
      return;
    }

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;

    script.onload = () => {
      console.log('[TP Widget] Script loaded successfully.');
    };
    script.onerror = (err) => {
      console.error('[TP Widget] Failed to load script:', scriptSrc, err);
    };

    document.body.appendChild(script);

    return () => {
      console.log('[TP Widget] Cleaning up script');
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [scriptSrc]);

  // Placeholder for widget injection
  return <div ref={widgetContainerRef} className="tp-widget-container"></div>;
};

export default TravelpayoutsWidget;
