import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen size={32} className="text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">CourseHub</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Home</Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Blog</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Contact</Link>
            <Link to="/courses" className="text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Courses</Link>
          </nav>
          
          <div className="hidden md:block">
            <Link to="/buy" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300" onClick={handleLinkClick}>
              Get Started
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <Link to="/" className="block py-2 text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Home</Link>
            <Link to="/blog" className="block py-2 text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Blog</Link>
            <Link to="/about" className="block py-2 text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>About</Link>
            <Link to="/contact" className="block py-2 text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Contact</Link>
            <Link to="/courses" className="block py-2 text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Courses</Link>
            <Link to="/buy" className="block mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 text-center" onClick={handleLinkClick}>
              Get Started
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;