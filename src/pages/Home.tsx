import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <HeroSection />
      <FeaturesSection />
      
      {/* Course Overview Section */}
      {/* ... (Keep the existing Course Overview Section) */}

      {/* Testimonials Section */}
      {/* ... (Keep the existing Testimonials Section) */}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Coding Skills?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our course today and become a master of AI-driven development with Cursor.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full">
            <Link to="/buy">Enroll Now <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;