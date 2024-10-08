import React from 'react';
import { useParams } from 'react-router-dom';
import CourseHeader from '../components/course/CourseHeader';
import CourseOverview from '../components/course/CourseOverview';
import CourseCurriculum from '../components/course/CourseCurriculum';
import CourseTestimonials from '../components/course/CourseTestimonials';
import CourseEnrollment from '../components/course/CourseEnrollment';
import { getCourseById } from '../services/courseService';
import { Book, BarChart, Zap, Lightbulb, Briefcase } from 'lucide-react';

const CourseSinglePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = getCourseById(id || '');

  // Define the modules with the new structure
  const modules = [
    {
      title: "Foundations of Modern Forecasting",
      icon: <Book className="w-6 h-6" />,
      duration: "2 weeks",
      lessons: [
        { title: "The Evolution of Forecasting in the AI Era", duration: "30 min" },
        { title: "Key Concepts and Terminology in Modern Prediction", duration: "45 min" },
        { title: "Ethical Considerations in AI-Driven Forecasting", duration: "40 min" },
      ],
    },
    {
      title: "Advanced Time Series Analysis",
      icon: <BarChart className="w-6 h-6" />,
      duration: "3 weeks",
      lessons: [
        { title: "Stationarity and Differencing in Time Series", duration: "50 min" },
        { title: "ARIMA Models and Their Applications", duration: "55 min" },
        { title: "Handling Seasonality and Trend in Forecasting", duration: "45 min" },
      ],
    },
    {
      title: "Machine Learning for Predictive Analytics",
      icon: <Zap className="w-6 h-6" />,
      duration: "4 weeks",
      lessons: [
        { title: "Feature Engineering for Time-Based Data", duration: "60 min" },
        { title: "Ensemble Methods in Forecasting", duration: "55 min" },
        { title: "Hyperparameter Tuning for Optimal Performance", duration: "50 min" },
      ],
    },
    {
      title: "Deep Learning Models in Forecasting",
      icon: <Lightbulb className="w-6 h-6" />,
      duration: "4 weeks",
      lessons: [
        { title: "RNNs and LSTMs for Sequence Prediction", duration: "65 min" },
        { title: "Attention Mechanisms and Transformers in Forecasting", duration: "70 min" },
        { title: "Transfer Learning in Time Series Analysis", duration: "55 min" },
      ],
    },
    {
      title: "Real-World Applications and Case Studies",
      icon: <Briefcase className="w-6 h-6" />,
      duration: "3 weeks",
      lessons: [
        { title: "Financial Market Prediction Strategies", duration: "60 min" },
        { title: "Demand Forecasting in Supply Chain Management", duration: "55 min" },
        { title: "Energy Consumption Forecasting for Smart Grids", duration: "50 min" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            <CourseHeader course={course} />
            <CourseOverview course={course} />
            <CourseCurriculum modules={modules} progress={33} />
            <CourseTestimonials course={course} />
          </div>
          <div>
            <CourseEnrollment course={course} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSinglePage;