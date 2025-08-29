import React from 'react';

// This component now accepts a 'colorClass' to set its background color
const ServiceButton = ({ IconComponent, label, href, colorClass }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      // The colorClass is now used here. We've also added a subtle hover effect.
      className={`group flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ${colorClass} hover:brightness-110`}
    >
      {/* The icon and text are now white for better contrast */}
      <IconComponent className="h-8 w-8 text-white" />
      <span className="mt-2 text-sm font-semibold text-white text-center">
        {label}
      </span>
    </a>
  );
};

export default ServiceButton;