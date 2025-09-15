import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} SmartTripDeals. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            {/* --- CORRECTED LINKS --- */}
            <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
            
            <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
            <Link to="/login" className="text-gray-400 hover:text-white">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;