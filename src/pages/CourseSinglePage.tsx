import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { BookOpen, Clock, Globe, PlayCircle, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';

// This should be replaced with actual data fetching logic
const getCourseById = (id: string) => {
  // Placeholder data
  return {
    id,
    title: 'Modern Forecasting in Practice',
    description: 'Get hands-on experience with modern forecasting tools & learn from case studies of the toughest forecasting challenges in the industry',
    rating: 4.9,
    startDate: 'Feb 24',
    instructors: ['Tim Januschowski', 'Jan Gasthaus'],
    category: 'Data Science',
    duration: '20 hours',
    students: 5234,
    modules: [
      'Introduction to Modern Forecasting',
      'Time Series Analysis',
      'Machine Learning for Forecasting',
      'Deep Learning Models',
      'Case Studies in Industry',
    ],
    price: 99.99,
    discount: 67,
    language: 'English',
  };
};

const testimonials = [
  {
    name: "Nate",
    role: "Data Scientist",
    company: "SP Plus",
    cohort: "COHORT Q1 2024",
    rating: 4.5,
    comment: "Covers SOTA methods as well proper baselines and processes to start with consider. Very practical course, great for a working data scientist or advanced analyst.",
    image: "/placeholder.svg?height=50&width=50"
  },
  // ... (add more testimonials as needed)
];

const CourseSinglePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = getCourseById(id || '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-bl-full opacity-10 -z-10" />
              <h1 className="text-4xl font-bold mb-4 text-gray-800">{course.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{course.description}</p>
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-800">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                  <BookOpen className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-800">{course.modules.length} modules</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                  <Users className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-800">{course.students} students</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                  <Globe className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-800">{course.language}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {course.instructors.map((instructor, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800">{instructor}</h2>
                      <p className="text-lg text-gray-600">Course Instructor</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Course Overview</h3>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">What You'll Learn</h4>
                <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
                  {course.modules.map((module, index) => (
                    <li key={index}>{module}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Course Curriculum</h3>
                <div className="space-y-6">
                  {course.modules.map((module, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-4">
                          <h4 className="font-semibold text-xl text-white">Module {index + 1}: {module}</h4>
                        </div>
                        <ul className="p-4 space-y-3">
                          {[1, 2, 3].map((lesson) => (
                            <li key={lesson} className="flex items-center gap-3 text-gray-700">
                              <PlayCircle className="w-5 h-5 text-gray-500" />
                              <span>Lesson {lesson}: {module} Concepts</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">What students are saying</h3>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-lg font-semibold text-gray-800">{course.rating}</span>
                  <span className="ml-2 text-gray-600">({course.students} students)</span>
                </div>
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-center mb-2">
                        <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                          <p className="text-sm text-gray-500">{testimonial.cohort}</p>
                        </div>
                      </div>
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${star <= testimonial.rating ? "text-yellow-400" : "text-gray-300"} fill-current`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">{testimonial.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="sticky top-4 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-gray-200 to-gray-300 -z-10" />
              <CardContent className="p-6 relative">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-gray-300"></div>
                </div>
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2 text-gray-800">${course.price}</div>
                  <Progress value={course.discount} className="h-2 mb-2" />
                  <p className="text-sm font-medium text-gray-600">
                    <strong className="text-green-600">{course.discount}% off</strong> - 2 days left at this price!
                  </p>
                </div>
                <div className="space-y-4 mb-6">
                  <Button className="w-full text-lg py-6 bg-gray-800 hover:bg-gray-700 text-white">Enroll Now</Button>
                  <Button variant="outline" className="w-full text-lg py-6">
                    Add to Cart
                  </Button>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-4 text-gray-800">This course includes:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700">
                      <PlayCircle className="w-5 h-5 text-gray-500" />
                      <span>{course.duration} on-demand video</span>
                    </li>
                    <li className="flex items-center gap-3  text-gray-700">
                      <BookOpen className="w-5 h-5 text-gray-500" />
                      <span>{course.modules.length} articles and resources</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <Globe className="w-5 h-5 text-gray-500" />
                      <span>Full lifetime access</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <Users className="w-5 h-5 text-gray-500" />
                      <span>Certificate of completion</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSinglePage;