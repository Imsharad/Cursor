import React from 'react';

const courses = [
  { id: 1, title: 'Web Development Bootcamp', description: 'Learn full-stack web development from scratch.', price: 99.99 },
  { id: 2, title: 'Data Science Fundamentals', description: 'Master the basics of data analysis and machine learning.', price: 89.99 },
  { id: 3, title: 'Digital Marketing Mastery', description: 'Discover how to create effective online marketing campaigns.', price: 79.99 },
  { id: 4, title: 'Mobile App Development', description: 'Build iOS and Android apps using React Native.', price: 109.99 },
];

const Courses: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <p className="text-xl font-bold mb-4">${course.price.toFixed(2)}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;