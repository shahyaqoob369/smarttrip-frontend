import React from 'react';
import Footer from './Footer';
import TranslateWidget from './TranslateWidget'; // 1. Import the new component

const MainLayout = ({ children }) => {
  return (
    <div className="bg-sky-100 min-h-screen flex flex-col">
      <main className="flex-grow">
        {children}
      </main>
      
      {/* 2. Added a footer wrapper for layout */}
      <div className="mt-auto"> {/* Pushes the footer to the bottom */}
        {/* The TranslateWidget is placed just above the main footer content */}
        <div className="flex justify-center py-4 bg-gray-100">
          <TranslateWidget />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;