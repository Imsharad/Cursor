import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Zap, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection: React.FC = () => {
  const features = [
    { icon: BookOpen, title: 'Comprehensive Curriculum', description: 'Cover all aspects of generative AI and its applications in coding.' },
    { icon: Code, title: 'Hands-on Projects', description: 'Build real-world applications using Cursor and other AI tools.' },
    { icon: Zap, title: 'Cutting-edge Techniques', description: 'Learn the latest AI-driven development methodologies.' },
    { icon: Users, title: 'Expert Instructors', description: 'Learn from industry professionals with years of experience.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Course?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <feature.icon className="w-12 h-12 mb-4 text-blue-600" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;