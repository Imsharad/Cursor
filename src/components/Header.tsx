import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronDown, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCoursesDropdown = () => setIsCoursesDropdownOpen(!isCoursesDropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCoursesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsCoursesDropdownOpen(false);
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
            <div className="relative group" ref={dropdownRef}>
              <button 
                className="text-gray-600 hover:text-blue-600 flex items-center"
                onClick={toggleCoursesDropdown}
              >
                Courses <ChevronDown size={16} className="ml-1" />
              </button>
              {isCoursesDropdownOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48">
                  <Link to="/courses" className="block px-4 py-2 text-gray-800 hover:bg-blue-50" onClick={handleLinkClick}>All Courses</Link>
                  <Link to="/courses" className="block px-4 py-2 text-gray-800 hover:bg-blue-50" onClick={handleLinkClick}>Web Development</Link>
                  <Link to="/courses" className="block px-4 py-2 text-gray-800 hover:bg-blue-50" onClick={handleLinkClick}>Data Science</Link>
                  <Link to="/courses" className="block px-4 py-2 text-gray-800 hover:bg-blue-50" onClick={handleLinkClick}>Digital Marketing</Link>
                  <Link to="/courses" className="block px-4 py-2 text-gray-800 hover:bg-blue-50" onClick={handleLinkClick}>Mobile App Development</Link>
                </div>
              )}
            </div>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Blog</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Contact</Link>
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
            <button 
              className="w-full text-left py-2 text-gray-600 hover:text-blue-600 flex items-center justify-between"
              onClick={toggleCoursesDropdown}
            >
              Courses <ChevronDown size={16} />
            </button>
            {isCoursesDropdownOpen && (
              <div className="pl-4">
                <Link to="/courses" className="block py-2 text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>All Courses</Link>
                <Link to="/courses" className="block py-2 text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Web Development</Link>
                <Link to="/courses" className="block py-2 text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Data Science</Link>
                <Link to="/courses" className="block py-2 text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Digital Marketing</Link>
                <Link to="/courses" className="block py-2 text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Mobile App Development</Link>
              </div>
            )}
            <Link to="/blog" className="block py-2 text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Blog</Link>
            <Link to="/about" className="block py-2 text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>About</Link>
            <Link to="/contact" className="block py-2 text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Contact</Link>
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