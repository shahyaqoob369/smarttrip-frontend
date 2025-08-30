import React from 'react';

const ServiceButton = ({ IconComponent, label, href, colorClass }) => {
  return (
    // This is now a link tag that opens in a new tab
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ${colorClass} hover:brightness-110`}
    >
      <IconComponent className="h-8 w-8 text-white" />
      <span className="mt-2 text-sm font-semibold text-white text-center">
        {label}
      </span>
    </a>
  );
};

export default ServiceButton;