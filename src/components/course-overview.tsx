"'use client'"

import { useState } from "'react'"
import { motion } from "'framer-motion'"
import { ChevronRight, Book, Clock, BarChart, Brain, Briefcase } from "'lucide-react'"

export function CourseOverviewComponent() {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null)

  const topics = [
    {
      title: "'Introduction to Modern Forecasting'",
      icon: <Book className="w-6 h-6" />,
      description: "'Learn the fundamentals of modern forecasting techniques and their applications in various industries.'"
    },
    {
      title: "'Time Series Analysis'",
      icon: <Clock className="w-6 h-6" />,
      description: "'Dive deep into time series data, understanding patterns, trends, and seasonality.'"
    },
    {
      title: "'Machine Learning for Forecasting'",
      icon: <BarChart className="w-6 h-6" />,
      description: "'Explore how machine learning algorithms can improve forecasting accuracy and efficiency.'"
    },
    {
      title: "'Deep Learning Models'",
      icon: <Brain className="w-6 h-6" />,
      description: "'Uncover the power of neural networks in handling complex forecasting challenges.'"
    },
    {
      title: "'Case Studies in Industry'",
      icon: <Briefcase className="w-6 h-6" />,
      description: "'Apply your knowledge to real-world scenarios from various industries.'"
    },
  ]

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-gray-100 p-8 rounded-xl shadow-2xl max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-emerald-400">Course Overview</h2>
      <p className="text-xl mb-8 leading-relaxed text-gray-300">
        Embark on a transformative journey into the world of modern forecasting. Get hands-on experience with cutting-edge tools and dive deep into case studies of the most challenging forecasting scenarios in the industry.
      </p>
      
      <div className="bg-slate-800/50 backdrop-blur-md rounded-lg p-6 shadow-lg border border-neutral-200 border-slate-700 dark:border-neutral-800">
        <h3 className="text-2xl font-semibold mb-6 text-pink-400">What You'll Master</h3>
        <div className="space-y-4">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              className="bg-slate-700 rounded-lg overflow-hidden cursor-pointer hover:bg-slate-600 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setExpandedTopic(expandedTopic === index ? null : index)}
            >
              <div className="flex items-center p-4">
                <div className="mr-4 text-emerald-400">{topic.icon}</div>
                <h4 className="text-lg font-medium flex-grow text-gray-100">{topic.title}</h4>
                <ChevronRight
                  className={`w-5 h-5 transform transition-transform text-pink-400 ${
                    expandedTopic === index ? "'rotate-90'" : "''"
                  }`}
                />
              </div>
              {expandedTopic === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "'auto'" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 bg-slate-800"
                >
                  <p className="text-sm text-gray-300">{topic.description}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}