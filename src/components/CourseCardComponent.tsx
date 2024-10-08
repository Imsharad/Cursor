import React from 'react'
import { Star, ArrowRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Link } from 'react-router-dom'

interface CourseCardProps {
  id: number;  // Add this line
  title: string;
  rating: number;
  startDate: string;
  instructors: string[];
  description: string;
}

export function CourseCardComponent({ id, title, rating, startDate, instructors, description }: CourseCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-300 opacity-30 z-0"></div>
          <div 
            className="absolute inset-0 z-10"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
            }}
          ></div>
          <div 
            className="absolute inset-0 z-20"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 20%),
                radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 20%)
              `,
              backgroundSize: '60% 60%, 60% 60%',
              animation: 'moveBackground 20s ease-in-out infinite alternate'
            }}
          ></div>
          <style>{`
            @keyframes moveBackground {
              0% {
                background-position: 0% 0%, 100% 100%;
              }
              100% {
                background-position: 100% 100%, 0% 0%;
              }
            }
          `}</style>
          <div className="p-8 relative z-30 backdrop-blur-sm bg-white/40">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">{title}</h1>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-xl font-semibold text-gray-900">{rating.toFixed(1)}</span>
              <span className="ml-2 text-xl text-gray-500">·</span>
              <span className="ml-2 text-xl text-gray-500">Starts {startDate}</span>
            </div>
            <div className="flex items-center mb-6">
              {instructors.map((instructor, index) => (
                <React.Fragment key={index}>
                  <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
                </React.Fragment>
              ))}
              <span className="text-xl font-semibold text-gray-900">{instructors.join(' and ')}</span>
            </div>
            <p className="text-gray-600 text-lg mb-6">{description}</p>
            <Button className="w-full" variant="default" asChild>
              <Link to={`/courses/${id}`}>
                <span>View course</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}