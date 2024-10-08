import React from 'react';
import { Clock, BookOpen, Users, Globe } from 'lucide-react';

interface CourseHeaderProps {
  course: {
    title: string;
    description: string;
    duration: string;
    modules: string[];
    students: number;
    language: string;
    instructors: string[];
  };
}

const CourseHeader: React.FC<CourseHeaderProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-bl-full opacity-10 -z-10" />
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{course.title}</h1>
      <p className="text-xl text-gray-600 mb-6">{course.description}</p>
      <div className="flex flex-wrap items-center gap-6 mb-8">
        <CourseInfoBadge icon={Clock} text={course.duration} />
        <CourseInfoBadge icon={BookOpen} text={`${course.modules.length} modules`} />
        <CourseInfoBadge icon={Users} text={`${course.students} students`} />
        <CourseInfoBadge icon={Globe} text={course.language} />
      </div>
      <div className="flex items-center gap-4">
        {course.instructors.map((instructor, index) => (
          <InstructorInfo key={index} name={instructor} />
        ))}
      </div>
    </div>
  );
};

const CourseInfoBadge: React.FC<{ icon: React.ElementType; text: string }> = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
    <Icon className="w-5 h-5 text-gray-600" />
    <span className="text-gray-800">{text}</span>
  </div>
);

const InstructorInfo: React.FC<{ name: string }> = ({ name }) => (
  <div className="flex items-center">
    <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-lg text-gray-600">Course Instructor</p>
    </div>
  </div>
);

export default CourseHeader;