import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TranslateWidget from './TranslateWidget'; // We need to import our widget component

// 1. Import the flag icons as React components
import UsaFlagIcon from '../assets/icons/usa-flag.svg?react';
import SpainFlagIcon from '../assets/icons/spain-flag.svg?react';
import FranceFlagIcon from '../assets/icons/france-flag.svg?react';


const Footer = () => {
  // State to manage the visibility of the language dropdown
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // This effect handles closing the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} SmartTripDeals. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="text-gray-400 hover:text-white flex items-center gap-2" // Increased gap for flags
              >
                {/* 2. Added a container for the flags */}
                <div className="flex items-center -space-x-2">
                  <UsaFlagIcon className="h-5 w-5 rounded-full border-2 border-gray-800" />
                  <SpainFlagIcon className="h-5 w-5 rounded-full border-2 border-gray-800" />
                  <FranceFlagIcon className="h-5 w-5 rounded-full border-2 border-gray-800" />
                </div>
                <span>Language</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </button>

              <div
                className={`google-translate-container absolute bottom-full mb-2 w-48 max-w-xs bg-white rounded-md shadow-lg p-1 overflow-x-auto transition-opacity duration-200 ${isLangDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
              >
                <TranslateWidget />
              </div>
            </div>

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