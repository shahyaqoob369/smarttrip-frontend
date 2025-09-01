import React from 'react';

// This is a generic placeholder page for our services.
const ServicePage = ({ title }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">{title}</h1>
        <p className="text-gray-600">The search widget for this service will be embedded here soon.</p>
      </div>
    </div>
  );
};

export default ServicePage;