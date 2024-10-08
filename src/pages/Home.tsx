import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "../components/ui/button";
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <HeroSection />
      <FeaturesSection />
      
      {/* Course Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Explore Our Courses</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover our wide range of AI and programming courses designed to boost your skills.
          </p>
          <Button asChild size="lg" variant="default">
            <Link to="/courses">View All Courses <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      {/* ... (keep existing sections) */}
    </div>
  );
};

export default Home;