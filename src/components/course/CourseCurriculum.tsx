import React from 'react';
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Play, Book, Lightbulb, Zap, BarChart, Briefcase } from 'lucide-react';

interface Lesson {
  title: string;
  duration: string;
}

interface Module {
  title: string;
  icon: React.ReactNode;
  duration: string;
  lessons: Lesson[];
}

interface CourseCurriculumProps {
  modules: Module[];
  progress: number;
}

const CourseCurriculum: React.FC<CourseCurriculumProps> = ({ modules, progress }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        Course Curriculum
      </h2>
      <Progress value={progress} className="w-full" />
      <div className="space-y-6">
        {modules.map((module, index) => (
          <Card key={index} className="overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white flex items-center">
                {module.icon}
                <span className="ml-2">{module.title}</span>
              </h3>
              <Badge variant="secondary">{module.duration}</Badge>
            </div>
            <CardContent className="p-4 space-y-4">
              {module.lessons.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Play className="w-4 h-4 text-purple-500" />
                    <span>{lesson.title}</span>
                  </div>
                  <Badge>{lesson.duration}</Badge>
                </div>
              ))}
              <Button className="w-full mt-4">Start Module</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseCurriculum;