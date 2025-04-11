import React from 'react';
import { Lock, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-white dark:bg-gray-950 text-gray-800 dark:text-white pt-60 pb-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Secure. Smart. Seamless.
          </h1>
          <p className="text-lg mb-6">
            Introducing <span className="font-semibold text-blue-600 dark:text-blue-400">SmartLocker</span> – your modern storage solution designed for efficiency, safety, and remote access.
          </p>
          <div className="flex gap-4">
            <a
              href="#features"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Explore Features <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative p-6 bg-gray-100 dark:bg-gray-800 rounded-3xl shadow-lg flex items-center justify-center">
              <Lock className="w-24 h-24 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
