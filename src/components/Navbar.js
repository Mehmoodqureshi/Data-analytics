import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 ${
        scrolling ? 'bg-gray-800' : 'bg-transparent'
      } p-4`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo - Left */}
        <div className="flex items-center">
          <img src="/path-to-your-logo/logo.png" alt="Logo" className="h-8" />
          <span className="text-white text-lg font-semibold">12th Analytics</span>
        </div>

        {/* Navigation Links for Desktop (if needed) */}
        <div className="hidden lg:flex items-center space-x-12">
          <a href="#" className="text-white hover:text-gray-300">Achievements</a>
          <a href="#" className="text-white hover:text-gray-300">Blogs</a>
          <a href="#" className="text-white hover:text-gray-300">Our Team</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="#" className="text-white hover:text-gray-300">Contact Us</a>
        </div>

        {/* Search Bar - Right */}
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-white text-gray-700 px-4 py-2 pl-10 rounded-md focus:outline-none"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hamburger Icon for Mobile (if needed) */}
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none focus:text-gray-300"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive Navigation Links (if needed) */}
      {isOpen && (
        <div className="lg:hidden mt-4">
          <a href="#" className="block text-white py-2 px-4 border-b border-gray-700">Achievements</a>
          <a href="#" className="block text-white py-2 px-4 border-b border-gray-700">Blogs</a>
          <a href="#" className="block text-white py-2 px-4 border-b border-gray-700">Our Team</a>
          <a href="#" className="block text-white py-2 px-4 border-b border-gray-700">About</a>
          <a href="#" className="block text-white py-2 px-4">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
