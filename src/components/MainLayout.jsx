import React from 'react';
import Navbar from './Navbar'; // Step 1: Import the component
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Step 2: Replace the header placeholder */}
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;