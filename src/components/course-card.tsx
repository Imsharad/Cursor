"'use client'"

import { Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CourseCardComponent() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-300 opacity-30 z-0"></div>
      <div 
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "'20px 20px'",
        }}
      ></div>
      <div 
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 20%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 20%)
          `,
          backgroundSize: "'60% 60%, 60% 60%'",
          animation: "'moveBackground 20s ease-in-out infinite alternate'"
        }}
      ></div>
      <style jsx>{`
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
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Modern Forecasting in Practice</h1>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
          <span className="ml-2 text-xl font-semibold text-gray-900">4.9</span>
          <span className="ml-2 text-xl text-gray-500">·</span>
          <span className="ml-2 text-xl text-gray-500">Starts Feb 24</span>
        </div>
        <div className="flex items-center mb-6">
          <Image
            src="/placeholder.svg?height=64&width=64"
            alt="Tim Januschowski"
            width={64}
            height={64}
            className="rounded-full mr-4"
          />
          <Image
            src="/placeholder.svg?height=64&width=64"
            alt="Jan Gasthaus"
            width={64}
            height={64}
            className="rounded-full mr-4"
          />
          <span className="text-xl font-semibold text-gray-900">Tim Januschowski and Jan Gasthaus</span>
        </div>
        <p className="text-gray-600 text-lg mb-6">
          Get hands-on experience with modern forecasting tools & learn from case studies of the
          toughest forecasting challenges in the industry
        </p>
        <Button className="w-full text-lg py-6 bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300">
          <span>View course</span>
          <ArrowRight className="w-6 h-6 ml-2" />
        </Button>
      </div>
    </div>
  )
}