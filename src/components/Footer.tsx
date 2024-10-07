import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">CourseHub</h3>
            <p className="mt-2">Empowering learners worldwide</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><Facebook size={24} /></a>
            <a href="#" className="hover:text-blue-400"><Twitter size={24} /></a>
            <a href="#" className="hover:text-blue-400"><Instagram size={24} /></a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 CourseHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;