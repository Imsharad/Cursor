import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import VideoModal from '@/components/VideoModal';

const HeroSection: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div {...fadeIn} className="text-left max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Master Generative AI with Cursor
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              Unlock the future of coding and supercharge your development skills with our cutting-edge AI course.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="rounded-full w-full sm:w-auto">
                <Link to="/courses" className="flex items-center justify-center">
                  Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full w-full sm:w-auto"
                onClick={() => setVideoModalOpen(true)}
              >
                <span className="flex items-center justify-center">
                  Watch Demo <Play className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="order-first lg:order-last"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/assets/images/orange.png"  // Updated path
              alt="AI-powered coding"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
      {videoModalOpen && (
        <VideoModal onClose={() => setVideoModalOpen(false)} videoId="dQw4w9WgXcQ" />
      )}
    </section>
  );
};

export default HeroSection;