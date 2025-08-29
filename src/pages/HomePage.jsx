import React from 'react';
import Hero from '../components/Hero';
import ServiceButtons from '../components/ServiceButtons';

const HomePage = () => {
  return (
    // This new div will act as the container for our page content
    <div className="max-w-7xl mx-auto">
      <Hero />
      <ServiceButtons />
    </div>
  );
};

export default HomePage;