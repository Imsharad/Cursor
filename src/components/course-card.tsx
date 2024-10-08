"use client"

import { useState } from "'react'"
import { motion, AnimatePresence } from "'framer-motion'"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, BookOpen, Users, Globe, ChevronDown, ChevronUp, Zap } from "'lucide-react'"

interface Instructor {
  name: string
  role: string
  avatar: string
}

interface CourseCardProps {
  title: string
  description: string
  duration: string
  modules: number
  students: number
  language: string
  instructors: Instructor[]
  level: string
  skills: string[]
}

export function CourseCardComponent({
  title,
  description,
  duration,
  modules,
  students,
  language,
  instructors,
  level,
  skills
}: CourseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="w-full max-w-2xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 mb-2">
            {level}
          </Badge>
          <Zap className="w-6 h-6 text-yellow-500" />
        </div>
        <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
          {title}
        </CardTitle>
        <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
            <Clock className="w-5 h-5 text-indigo-500" />
            <span className="font-medium">{duration}</span>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
            <BookOpen className="w-5 h-5 text-indigo-500" />
            <span className="font-medium">{modules} modules</span>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
            <Users className="w-5 h-5 text-indigo-500" />
            <span className="font-medium">{students.toLocaleString()} students</span>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
            <Globe className="w-5 h-5 text-indigo-500" />
            <span className="font-medium">{language}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              {skill}
            </Badge>
          ))}
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "'auto'" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pt-4 border-t border-indigo-200 dark:border-indigo-800">
                <h4 className="font-semibold mb-4 text-lg text-indigo-700 dark:text-indigo-300">Course Instructors</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {instructors.map((instructor, index) => (
                    <div key={index} className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <Avatar className="w-16 h-16 border-2 border-indigo-300 dark:border-indigo-600">
                        <AvatarImage src={instructor.avatar} alt={instructor.name} />
                        <AvatarFallback className="bg-indigo-200 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-200">
                          {instructor.name.split("'").map(n => n[0]).join("''")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-lg text-gray-800 dark:text-gray-200">{instructor.name}</p>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400">{instructor.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
      <CardFooter className="flex justify-between items-center bg-indigo-50 dark:bg-indigo-900/50 py-4">
        <Button 
          onClick={() => setIsExpanded(!isExpanded)} 
          variant="ghost" 
          className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="mr-2 h-4 w-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="mr-2 h-4 w-4" />
              Show More
            </>
          )}
        </Button>
        <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  )
}