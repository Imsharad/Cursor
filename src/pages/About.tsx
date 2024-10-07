import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About CourseHub</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            At CourseHub, we're passionate about making high-quality education accessible to everyone. Our mission is to empower learners worldwide by providing expert-led courses in various fields, from technology to business and beyond.
          </p>
          <p className="mb-4">
            We believe that education is the key to personal and professional growth, and we're committed to helping our students achieve their goals through innovative online learning experiences.
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Students learning" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside">
          <li>Excellence in Education: We strive to provide the highest quality courses and learning materials.</li>
          <li>Innovation: We embrace new technologies and teaching methods to enhance the learning experience.</li>
          <li>Accessibility: We believe education should be available to everyone, regardless of location or background.</li>
          <li>Community: We foster a supportive learning environment where students can connect and collaborate.</li>
          <li>Continuous Improvement: We're always looking for ways to improve our courses and platform based on student feedback.</li>
        </ul>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Join Us on Your Learning Journey</h2>
        <p>
          Whether you're looking to advance your career, learn a new skill, or explore a passion, CourseHub is here to support you every step of the way. Join our community of learners and start your educational journey today!
        </p>
      </div>
    </div>
  );
};

export default About;