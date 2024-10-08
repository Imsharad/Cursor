import React, { useState } from 'react';
import { CourseCardComponent } from '../components/CourseCardComponent';

const courses = [
  {
    id: 1,
    title: 'Modern Forecasting in Practice',
    description: 'Get hands-on experience with modern forecasting tools & learn from case studies of the toughest forecasting challenges in the industry',
    rating: 4.9,
    startDate: 'Feb 24',
    instructors: ['Tim Januschowski', 'Jan Gasthaus'],
    category: 'Data Science',
  },
  {
    id: 2,
    title: 'Generative AI with Large Language Models',
    description: 'Learn the fundamentals of how generative AI works, and how to deploy it in real-world applications.',
    rating: 4.8,
    startDate: 'Mar 1',
    instructors: ['Andrew Ng', 'Sharon Zhou'],
    category: 'Artificial Intelligence',
  },
  {
    id: 3,
    title: 'AI Product Management',
    description: 'Master the skills needed to build AI-powered products that create value for customers and businesses.',
    rating: 4.7,
    startDate: 'Mar 15',
    instructors: ['Cem Dilmegani', 'Mariya Yao'],
    category: 'Product Management',
  },
  {
    id: 4,
    title: 'Generative AI for Everyone',
    description: 'Understand the capabilities and limitations of generative AI, and how to apply it in various industries.',
    rating: 4.9,
    startDate: 'Apr 1',
    instructors: ['Andrew Ng'],
    category: 'Artificial Intelligence',
  },
  {
    id: 5,
    title: 'Prompt Engineering for ChatGPT',
    description: 'Learn advanced techniques to craft effective prompts and get the most out of ChatGPT and other language models.',
    rating: 4.8,
    startDate: 'Apr 10',
    instructors: ['Riley Tomasek'],
    category: 'Artificial Intelligence',
  },
  {
    id: 6,
    title: 'Building AI-Powered Chatbots',
    description: 'Explore the world of conversational AI and learn to build intelligent chatbots using the latest technologies.',
    rating: 4.7,
    startDate: 'Apr 20',
    instructors: ['Chip Huyen', 'Aakash Nain'],
    category: 'Artificial Intelligence',
  },
];

const categories = ['All', ...new Set(courses.map(course => course.category))];

const Courses: React.FC = () => {
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const filterCourses = (category: string) => {
    if (category === 'All') {
      setFilteredCourses(courses);
    } else {
      const newCourses = courses.filter((course) => course.category === category);
      setFilteredCourses(newCourses);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Courses</h1>
      <div className="flex justify-center mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className="mx-2 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={() => filterCourses(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <CourseCardComponent
            key={course.id}
            id={course.id}  // Add this line
            title={course.title}
            rating={course.rating}
            startDate={course.startDate}
            instructors={course.instructors}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;