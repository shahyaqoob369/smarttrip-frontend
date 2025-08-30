import React from 'react';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    // Changed bg-sky-100 to bg-blue-600 for a deep blue background
    <div className="bg-blue-400 min-h-screen">
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;