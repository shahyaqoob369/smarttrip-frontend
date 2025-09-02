import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const ServicePageLayout = ({ children }) => {
  return (
    <div className="bg-sky-100 min-h-screen flex flex-col">
      {/* This is the simple header for service pages */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-blue-600">Smart</span>
            <span className="text-orange-500">Trip</span>
            <span className="text-blue-600">Deals</span>
          </Link>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
