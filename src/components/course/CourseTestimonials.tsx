import React from 'react';
import { Card, CardContent } from "../ui/card";
import { Star } from 'lucide-react';

interface CourseTestimonialsProps {
  course: {
    rating: number;
    students: number;
  };
}

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

const CourseTestimonials: React.FC<CourseTestimonialsProps> = ({ course }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">What students are saying</h3>
        <CourseRating rating={course.rating} students={course.students} />
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const CourseRating: React.FC<{ rating: number; students: number }> = ({ rating, students }) => (
  <div className="flex items-center mb-4">
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <span className="ml-2 text-lg font-semibold text-gray-800">{rating}</span>
    <span className="ml-2 text-gray-600">({students} students)</span>
  </div>
);

const TestimonialCard: React.FC<{ testimonial: any }> = ({ testimonial }) => (
  <div className="border-b border-gray-200 pb-6 last:border-b-0">
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
);

export default CourseTestimonials;