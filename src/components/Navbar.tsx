import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-500">
              ContractFriend
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/review" className="nav-link">Review Contract</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/upload" className="btn-primary">
              Upload your Contract
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/review"
              className="block px-3 py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              Review Contract
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/upload"
              className="block px-3 py-2 btn-primary text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Upload your Contract
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
