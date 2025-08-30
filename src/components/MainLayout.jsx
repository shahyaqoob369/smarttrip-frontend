import React from 'react';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    // This creates the light blue background for the entire page
    <div className="bg-sky-100 min-h-screen">
      {/* Navbar is removed from here as it will be inside our new search card */}
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;