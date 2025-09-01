import React from 'react';
import { Link } from 'react-router-dom';

const ServiceButton = ({ IconComponent, label, colorClass, to }) => {
  return (
    // This is now a Link component from react-router-dom
    <Link
      to={to}
      className={`group flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ${colorClass} hover:brightness-110`}
    >
      <IconComponent className="h-8 w-8 text-white" />
      <span className="mt-2 text-sm font-semibold text-white text-center">
        {label}
      </span>
    </Link>
  );
};

export default ServiceButton;