"use client"

import React, { useState } from 'react';
import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Sparkles, Clock, FileText, Globe, Award } from "lucide-react"

interface CourseEnrollmentProps {
  course: {
    price: number;
    discount: number;
    duration: string;
    modules: string[];
  };
}

const CourseEnrollment: React.FC<CourseEnrollmentProps> = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="sticky top-4">
      <motion.div
        className="w-full max-w-md mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CardContent className="p-8">
          <PricingInfo price={course.price} discount={course.discount} />
          <EnrollmentButton isHovered={isHovered} setIsHovered={setIsHovered} />
          <CourseIncludes duration={course.duration} modulesCount={course.modules.length} />
        </CardContent>
      </motion.div>
    </div>
  );
};

const PricingInfo: React.FC<{ price: number; discount: number }> = ({ price, discount }) => (
  <>
    <motion.h2 
      className="text-4xl font-bold text-white mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      ${price}
    </motion.h2>
    <div className="flex items-center mb-6">
      <div className="h-2 flex-grow rounded-full bg-blue-300">
        <motion.div 
          className="h-full rounded-full bg-orange-400"
          initial={{ width: 0 }}
          animate={{ width: `${discount}%` }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </div>
      <span className="ml-4 text-orange-300 font-semibold">{discount}% off</span>
    </div>
    <p className="text-blue-100 mb-6">2 days left at this price!</p>
  </>
);

const EnrollmentButton: React.FC<{ isHovered: boolean; setIsHovered: (value: boolean) => void }> = ({ isHovered, setIsHovered }) => (
  <motion.button
    className="w-full py-3 px-6 text-lg font-semibold text-blue-600 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out flex items-center justify-center"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onHoverStart={() => setIsHovered(true)}
    onHoverEnd={() => setIsHovered(false)}
  >
    {isHovered ? "Let's Go!" : "Enroll Now"}
    <Sparkles className={`ml-2 ${isHovered ? "animate-ping" : ""}`} size={20} color="#f97316" />
  </motion.button>
);

const CourseIncludes: React.FC<{ duration: string; modulesCount: number }> = ({ duration, modulesCount }) => (
  <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-t-3xl mt-6">
    <h3 className="text-xl font-semibold text-white mb-4">This course includes:</h3>
    <ul className="space-y-3">
      {[
        { icon: Clock, text: `${duration} on-demand video` },
        { icon: FileText, text: `${modulesCount} articles and resources` },
        { icon: Globe, text: "Full lifetime access" },
        { icon: Award, text: "Certificate of completion" },
      ].map((item, index) => (
        <motion.li 
          key={index}
          className="flex items-center text-blue-50"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
        >
          <item.icon className="mr-3 h-5 w-5 text-teal-300" />
          {item.text}
        </motion.li>
      ))}
    </ul>
  </div>
);

export default CourseEnrollment;