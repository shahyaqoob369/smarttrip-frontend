import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            {/* 2. Wrap the logo in a Link to the homepage */}
            <Link to="/" className="text-4xl font-bold">
              <span className="text-blue-600">Smart</span>
              <span className="text-orange-500">Trip</span>
              <span className="text-blue-600">Deals</span>
            </Link>
          </div>
          
          {/* 3. Add an "About" link */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;