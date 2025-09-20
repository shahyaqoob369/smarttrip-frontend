import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const ServicePageLayout = ({ children }) => {
  return (
    <div className="bg-sky-100 min-h-screen flex flex-col">
      {/* This is the simple header for service pages */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* 1. NEW: Back to Home Arrow Link */}
          <Link to="/" className="text-gray-500 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
          </Link>

          {/* 2. The logo remains and also links to home */}
          <Link to="/" className="text-2xl font-bold">
            <span className="text-blue-600">Smart</span>
            <span className="text-orange-500">Trip</span>
            <span className="text-blue-600">Deals</span>
          </Link>

          {/* 3. An empty div to balance the layout */}
          <div className="w-6 h-6"></div>
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