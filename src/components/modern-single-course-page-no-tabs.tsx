"'use client'"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Globe, PlayCircle, Users, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

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
  {
    name: "Giuseppe",
    role: "Software Engineer",
    company: "Freelance",
    cohort: "COHORT Q1 2024",
    rating: 4,
    comment: "I liked the way course has been prepared and present. Tim Jan are certainly knowledgable make full great. live sessions with external guests a plus. Forecasting was fresh topic for me before taking this I'm really happy satisfied from outcome.",
    image: "/placeholder.svg?height=50&width=50"
  },
  {
    name: "Jonathan",
    role: "Statistician",
    company: "Ministère de la Santé et des Services sociaux",
    cohort: "COHORT OCTOBER 2023",
    rating: 5,
    comment: "Great course, it goes through different types of forecasting problem and how you can use for optimal decisions.",
    image: "/placeholder.svg?height=50&width=50"
  },
  {
    name: "Ashwin",
    role: "Data Scientist",
    company: "Delicious Data",
    cohort: "COHORT OCTOBER 2023",
    rating: 5,
    comment: "This course was a great introduction to recent developments in forecasting, best practices and toolkits.",
    image: "/placeholder.svg?height=50&width=50"
  },
]

export function ModernSingleCoursePageNoTabs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-bl-full opacity-10 -z-10" />
              <h1 className="text-4xl font-bold mb-4 text-gray-800">Advanced React and Redux</h1>
              <p className="text-xl text-gray-600 mb-6">
                Master the advanced concepts of React and Redux to build scalable and efficient web applications.
              </p>
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-800">20 hours</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                  <BookOpen className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-800">12 modules</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                  <Users className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-800">5,234 students</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                  <Globe className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-800">English</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Instructor"
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white shadow-lg"
                />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
                  <p className="text-lg text-gray-600">Senior React Developer</p>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Course Overview</h3>
                <p className="text-gray-600 mb-6">
                  This comprehensive course will take you on a deep dive into the advanced concepts of React and Redux.
                  You'll learn how to build complex, scalable applications using the latest features and best practices.
                </p>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">What You'll Learn</h4>
                <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
                  <li>Advanced React Hooks and Custom Hook creation</li>
                  <li>Redux Toolkit and advanced state management techniques</li>
                  <li>Performance optimization in React applications</li>
                  <li>Server-side rendering with Next.js</li>
                  <li>Testing React and Redux applications</li>
                </ul>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Requirements</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Basic knowledge of JavaScript and React</li>
                  <li>Familiarity with ES6+ syntax</li>
                  <li>Understanding of basic state management concepts</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Course Curriculum</h3>
                <div className="space-y-6">
                  {[1, 2, 3, 4].map((module) => (
                    <Card key={module} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-4">
                          <h4 className="font-semibold text-xl text-white">Module {module}: Advanced React Concepts</h4>
                        </div>
                        <ul className="p-4 space-y-3">
                          {[1, 2, 3].map((lesson) => (
                            <li key={lesson} className="flex items-center gap-3 text-gray-700">
                              <PlayCircle className="w-5 h-5 text-gray-500" />
                              <span>Lesson {lesson}: React Hooks Deep Dive</span>
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
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Meet Your Instructor</h3>
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="John Doe"
                    width={200}
                    height={200}
                    className="rounded-full border-4 border-white shadow-xl"
                  />
                  <div>
                    <h3 className="text-3xl font-semibold text-gray-800 mb-2">John Doe</h3>
                    <p className="text-xl text-gray-600 mb-4">Senior React Developer</p>
                    <div className="flex gap-4">
                      <Button variant="outline">View Profile</Button>
                      <Button variant="outline">Contact Instructor</Button>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  John Doe is a seasoned React developer with over 10 years of experience in web development. He has
                  worked with numerous Fortune 500 companies and has been teaching React and Redux for the past 5 years.
                  His passion for clean, efficient code and innovative solutions has made him a respected figure in the
                  React community.
                </p>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Redux", "Next.js", "JavaScript", "TypeScript", "Web Performance"].map((skill) => (
                    <span key={skill} className="bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-sm">
                      {skill}
                    </span>
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
                  <span className="ml-2 text-lg font-semibold text-gray-800">4.9</span>
                  <span className="ml-2 text-gray-600">(14 ratings)</span>
                </div>
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-center mb-2">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full mr-4"
                        />
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
                            className={`w-4 h-4 ${star <= testimonial.rating ? "'text-yellow-400'" : "'text-gray-300'"} fill-current`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">{testimonial.comment}</p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-6">
                  <Button variant="outline" className="flex items-center">
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  <div className="flex space-x-2">
                    <Button variant="outline" className="w-8 h-8 p-0">1</Button>
                    <Button variant="outline" className="w-8 h-8 p-0">2</Button>
                  </div>
                  <Button variant="outline" className="flex items-center">
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="sticky top-4 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-gray-200 to-gray-300 -z-10" />
              <CardContent className="p-6 relative">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Course Preview"
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2 text-gray-800">$99.99</div>
                  <Progress value={33} className="h-2 mb-2" />
                  <p className="text-sm font-medium text-gray-600">
                    <strong className="text-green-600">67% off</strong> - 2 days left at this price!
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
                      <span>20 hours on-demand video</span>
                    </li>
                    <li className="flex items-center gap-3  text-gray-700">
                      <BookOpen className="w-5 h-5 text-gray-500" />
                      <span>15 articles and resources</span>
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
  )
}