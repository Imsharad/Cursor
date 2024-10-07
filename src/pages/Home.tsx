import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Welcome to CourseHub</h1>
      <p className="text-xl mb-8">Discover a world of knowledge with our expert-led courses.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Featured Courses</h2>
          <ul className="list-disc list-inside">
            <li>Web Development Bootcamp</li>
            <li>Data Science Fundamentals</li>
            <li>Digital Marketing Mastery</li>
          </ul>
          <Link to="/courses" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View All Courses
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Latest Blog Posts</h2>
          <ul className="list-disc list-inside">
            <li>10 Tips for Successful Online Learning</li>
            <li>The Future of Education: AI and Machine Learning</li>
            <li>How to Build a Successful Career in Tech</li>
          </ul>
          <Link to="/blog" className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Read Our Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;