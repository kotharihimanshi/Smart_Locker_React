import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            SmartLocker
          </Link>
         
          <div className="hidden md:flex items-center space-x-6 text-gray-700 dark:text-gray-200">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#how-it-works" className="hover:text-blue-600">How It Works</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <Link to="/find-lockers" className="hover:text-blue-600">Find Lockers</Link>
          </div>
     
          <div className="flex items-center space-x-4">      
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              Login
            </Link>
         
            <button
              className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200">
            <a href="#home" className="block py-2 hover:text-blue-600">Home</a>
            <a href="#features" className="block py-2 hover:text-blue-600">Features</a>
            <a href="#how-it-works" className="block py-2 hover:text-blue-600">How It Works</a>
            <a href="#contact" className="block py-2 hover:text-blue-600">Contact</a>
            <Link to="/find-lockers" className="block py-2 hover:text-blue-600">Find Lockers</Link>
            <Link to="/login" className="block py-2 hover:text-blue-600">Login</Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
