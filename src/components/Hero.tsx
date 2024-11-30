import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Background" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative pb-8 bg-transparent sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <motion.h1 
                className="tracking-tight font-extrabold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="block text-4xl sm:text-5xl md:text-6xl mb-4">
                  Simplify Your
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-600">
                  Contract Review Process
                </span>
              </motion.h1>

              <motion.p 
                className="mt-8 text-base text-gray-500 sm:mt-10 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Let AI analyze your lease agreements in seconds. Get comprehensive insights, 
                identify red flags, and understand your obligations with ContractFriend.
              </motion.p>

              <motion.div 
                className="mt-8 sm:mt-12 space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to="/upload" className="btn-primary">
                  Start Free Analysis
                </Link>
                <Link to="/about" className="btn-secondary">
                  Learn More
                </Link>
              </motion.div>

              <motion.div
                className="mt-16 sm:mt-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
                  <p className="text-sm text-gray-500 mb-4">TRUSTED BY COMPANIES WORLDWIDE</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
                    {/* Replace with actual company logos */}
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-8 w-24 bg-gray-300 rounded"></div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;
