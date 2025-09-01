import React, { useEffect, useRef } from 'react';

// This is a more robust component for embedding Travelpayouts widgets.
const TravelpayoutsWidget = ({ scriptSrc }) => {
  // We use a ref to get a direct reference to our div element
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    // Check if a script with this source already exists
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;

    // We append the script to the document body, which is a more standard practice
    document.body.appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [scriptSrc]); // Re-run only if the script source changes

  // The Travelpayouts script will automatically find this div and inject the form
  return <div ref={widgetContainerRef}></div>;
};

export default TravelpayoutsWidget;
