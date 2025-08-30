import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} SmartTripDeals. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            {/* We can add social media or other links here later */}
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            {/* Add the new link below */}
            <Link to="/login" className="text-gray-400 hover:text-white">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;