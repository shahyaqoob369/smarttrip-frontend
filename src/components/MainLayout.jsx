import React from 'react';

// This is our main layout component.
// The 'children' prop is a special React prop that will render
// whatever components are nested inside <MainLayout> in App.jsx.
const MainLayout = ({ children }) => {
  return (
    <div className="bg-white text-gray-800">
      {/* We will add a Navbar component here later */}
      <header className="h-16 bg-gray-100 shadow-md">
        <p className="p-4 font-bold">Navbar Placeholder</p>
      </header>

      {/* The main content of our pages will be rendered here */}
      <main>
        {children}
      </main>

      {/* We will add a Footer component here later */}
      <footer className="h-16 bg-gray-100 mt-8">
        <p className="p-4 font-semibold">Footer Placeholder</p>
      </footer>
    </div>
  );
};

export default MainLayout;