"use client"

import React from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { ArrowRight, Book, Users, Zap, RefreshCw, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const AnimatedText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {text}
      </motion.span>
    </span>
  );
};

const ParallaxImage: React.FC<{ scrollYProgress: MotionValue<number> }> = ({ scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  return (
    <motion.div style={{ y }} className="relative overflow-hidden rounded-lg shadow-2xl">
      <motion.img 
        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
        alt="Students engaged in online learning" 
        className="w-full h-full object-cover"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </motion.div>
  );
};

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const values = [
    { icon: <Book className="w-6 h-6" />, title: "Excellence in Education", description: "Providing the highest quality courses and learning materials." },
    { icon: <Zap className="w-6 h-6" />, title: "Innovation", description: "Embracing cutting-edge technologies and teaching methods." },
    { icon: <Globe className="w-6 h-6" />, title: "Accessibility", description: "Making education available to everyone, everywhere." },
    { icon: <Users className="w-6 h-6" />, title: "Community", description: "Fostering a supportive and collaborative learning environment." },
    { icon: <RefreshCw className="w-6 h-6" />, title: "Continuous Improvement", description: "Constantly evolving based on student feedback and industry trends." },
  ];

  return (
    <div className="bg-gradient-to-b from-cyan-50 to-white min-h-screen relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-50"
        style={{ scaleX }}
      />
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-6xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-teal-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AnimatedText text="About CourseHub" />
        </motion.h1>
        
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl text-gray-700 mb-6">
            <AnimatedText text="At CourseHub, we're passionate about making high-quality education accessible to everyone. Our mission is to empower learners worldwide by providing expert-led courses in various fields, from technology to business and beyond." />
          </p>
          <motion.a 
            href="#learn-more" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-cyan-700">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              <AnimatedText text="We believe that education is the key to personal and professional growth, and we're committed to helping our students achieve their goals through innovative online learning experiences." />
            </p>
            <p className="text-lg text-gray-700">
              <AnimatedText text="Through innovative technology and passionate educators, we're creating a world where learning knows no bounds." />
            </p>
          </motion.div>
          <ParallaxImage scrollYProgress={scrollYProgress} />
        </div>

        <motion.div 
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-8 text-cyan-700"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="text-cyan-500 mb-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-700">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white p-12 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            <AnimatedText text="Join Us on Your Learning Journey" />
          </h2>
          <p className="text-lg mb-6">
            <AnimatedText text="Whether you're looking to advance your career, learn a new skill, or explore a passion, CourseHub is here to support you every step of the way. Join our community of learners and start your educational journey today!" />
          </p>
          <Button 
            asChild
            className="bg-white text-cyan-700 hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <motion.a 
              href="/courses" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Courses <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;