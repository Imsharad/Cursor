import React from 'react';

const Buy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Purchase a Course</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Select a Course Package</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Basic</h3>
            <p className="text-3xl font-bold mb-4">$99</p>
            <ul className="list-disc list-inside mb-4">
              <li>Access to 1 course</li>
              <li>3 months of access</li>
              <li>Email support</li>
            </ul>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Choose Basic
            </button>
          </div>
          <div className="border p-6 rounded-lg bg-blue-50">
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p className="text-3xl font-bold mb-4">$199</p>
            <ul className="list-disc list-inside mb-4">
              <li>Access to 3 courses</li>
              <li>6 months of access</li>
              <li>Priority email support</li>
              <li>1-on-1 mentoring session</li>
            </ul>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Choose Pro
            </button>
          </div>
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Ultimate</h3>
            <p className="text-3xl font-bold mb-4">$299</p>
            <ul className="list-disc list-inside mb-4">
              <li>Access to all courses</li>
              <li>12 months of access</li>
              <li>24/7 priority support</li>
              <li>3 1-on-1 mentoring sessions</li>
              <li>Job placement assistance</li>
            </ul>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Choose Ultimate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;