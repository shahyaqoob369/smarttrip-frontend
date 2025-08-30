import React from 'react';
import Hero from '../components/Hero';
import ServiceButtons from '../components/ServiceButtons';

const HomePage = () => {
  return (
    // This container will hold our main content sections
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <Hero />
      <ServiceButtons />
    </div>
  );
};

export default HomePage;