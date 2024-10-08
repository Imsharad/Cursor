import React from 'react';
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { PlayCircle, BookOpen, Globe, Users } from 'lucide-react';

interface CourseEnrollmentProps {
  course: {
    price: number;
    discount: number;
    duration: string;
    modules: string[];
  };
}

const CourseEnrollment: React.FC<CourseEnrollmentProps> = ({ course }) => {
  return (
    <Card className="sticky top-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-gray-200 to-gray-300 -z-10" />
      <CardContent className="p-6 relative">
        <CoursePreview />
        <PricingInfo price={course.price} discount={course.discount} />
        <EnrollmentButtons />
        <CourseIncludes duration={course.duration} modulesCount={course.modules.length} />
      </CardContent>
    </Card>
  );
};

const CoursePreview: React.FC = () => (
  <div className="aspect-video mb-6 rounded-lg overflow-hidden shadow-lg">
    <div className="w-full h-full bg-gray-300"></div>
  </div>
);

const PricingInfo: React.FC<{ price: number; discount: number }> = ({ price, discount }) => (
  <div className="mb-6">
    <div className="text-4xl font-bold mb-2 text-gray-800">${price}</div>
    <Progress value={discount} className="h-2 mb-2" />
    <p className="text-sm font-medium text-gray-600">
      <strong className="text-green-600">{discount}% off</strong> - 2 days left at this price!
    </p>
  </div>
);

const EnrollmentButtons: React.FC = () => (
  <div className="space-y-4 mb-6">
    <Button className="w-full text-lg py-6 bg-gray-800 hover:bg-gray-700 text-white">Enroll Now</Button>
    <Button variant="outline" className="w-full text-lg py-6">
      Add to Cart
    </Button>
  </div>
);

const CourseIncludes: React.FC<{ duration: string; modulesCount: number }> = ({ duration, modulesCount }) => (
  <div className="bg-gray-50 rounded-lg p-4">
    <h4 className="font-semibold text-lg mb-4 text-gray-800">This course includes:</h4>
    <ul className="space-y-3">
      <CourseIncludeItem icon={PlayCircle} text={`${duration} on-demand video`} />
      <CourseIncludeItem icon={BookOpen} text={`${modulesCount} articles and resources`} />
      <CourseIncludeItem icon={Globe} text="Full lifetime access" />
      <CourseIncludeItem icon={Users} text="Certificate of completion" />
    </ul>
  </div>
);

const CourseIncludeItem: React.FC<{ icon: React.ElementType; text: string }> = ({ icon: Icon, text }) => (
  <li className="flex items-center gap-3 text-gray-700">
    <Icon className="w-5 h-5 text-gray-500" />
    <span>{text}</span>
  </li>
);

export default CourseEnrollment;