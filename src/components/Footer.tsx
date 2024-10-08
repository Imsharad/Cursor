"use client"

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Twitter, Github, Linkedin, Youtube, ArrowRight, Mail, Sparkles, Globe, Zap, Book, Users, Sun, Moon } from "lucide-react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundColor: isDarkMode ? "#111827" : "#f3f4f6",
      color: isDarkMode ? "#ffffff" : "#1f2937",
      transition: { duration: 0.5 }
    });
  }, [isDarkMode, controls]);

  const footerSections = [
    {
      title: "CourseHub",
      links: [
        { name: "About Us", href: "/about", icon: <Users className="w-4 h-4 mr-2" /> },
        { name: "Careers", href: "/careers", icon: <Zap className="w-4 h-4 mr-2" /> },
        { name: "Help Center", href: "/help", icon: <Book className="w-4 h-4 mr-2" /> },
        { name: "Privacy & Terms", href: "/privacy-terms", icon: <Globe className="w-4 h-4 mr-2" /> },
      ],
    },
    {
      title: "Explore",
      links: [
        { name: "AI Courses", href: "/courses", icon: <Sparkles className="w-4 h-4 mr-2" /> },
        { name: "Blog", href: "/blog", icon: <Mail className="w-4 h-4 mr-2" /> },
        { name: "Resources", href: "/resources", icon: <Book className="w-4 h-4 mr-2" /> },
        { name: "Pricing", href: "/buy", icon: <Zap className="w-4 h-4 mr-2" /> },
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubscribed(true);
      setEmail("");
    }, 1000);
  };

  return (
    <motion.footer
      animate={controls}
      className="relative overflow-hidden py-16"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              CourseHub
            </h2>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} mb-8 text-lg`}>
              Empowering learners worldwide with cutting-edge courses and resources.
            </p>
            <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300`}>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Sparkles className="mr-2 text-yellow-400" />
                Stay Ahead of the Curve
              </h3>
              <AnimatePresence>
                {!isSubscribed ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-2"
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"} px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow`}
                      required
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-md transition duration-300 ease-in-out flex items-center justify-center transform hover:scale-105"
                    >
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-green-400 font-semibold flex items-center"
                  >
                    <Sparkles className="mr-2" />
                    Thanks for subscribing!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition duration-300 ease-in-out flex items-center group`}
                    >
                      <span className="transform group-hover:scale-110 transition-transform duration-300 mr-2">
                        {link.icon}
                      </span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm mb-4 sm:mb-0`}>
            © {new Date().getFullYear()} CourseHub Learning, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {[
              { icon: <Twitter className="h-6 w-6" />, href: "https://twitter.com/coursehub" },
              { icon: <Github className="h-6 w-6" />, href: "https://github.com/coursehub" },
              { icon: <Linkedin className="h-6 w-6" />, href: "https://linkedin.com/company/coursehub" },
              { icon: <Youtube className="h-6 w-6" />, href: "https://youtube.com/coursehub" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className={`${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition duration-300 ease-in-out`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="absolute top-4 right-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full ${isDarkMode ? "bg-yellow-400 text-gray-900" : "bg-gray-800 text-yellow-400"}`}
          >
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </motion.div>
      </div>
      <div className="mt-8 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="whitespace-nowrap"
        >
          <span className="text-sm font-medium mr-8">New Course: Advanced AI Ethics</span>
          <span className="text-sm font-medium mr-8">Student Spotlight: Sarah's Journey to Tech Lead</span>
          <span className="text-sm font-medium mr-8">Upcoming Webinar: Future of EdTech</span>
          <span className="text-sm font-medium mr-8">CourseHub Partners with Top Tech Companies</span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;