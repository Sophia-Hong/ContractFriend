import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaClock } from 'react-icons/fa';

const ValueProposition: React.FC = () => {
  const features = [
    {
      icon: <FaRocket className="w-12 h-12 text-orange-500" />,
      title: "Smart Contract Analysis",
      description: "Our AI-powered system analyzes your lease agreements in minutes, not hours."
    },
    {
      icon: <FaShieldAlt className="w-12 h-12 text-orange-500" />,
      title: "Risk Identification",
      description: "Instantly identify potential risks and unfavorable terms in your contracts."
    },
    {
      icon: <FaClock className="w-12 h-12 text-orange-500" />,
      title: "Time Efficiency",
      description: "Save valuable time with automated contract review and clear summaries."
    }
  ];

  return (
    <>
      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Why Choose ContractFriend?</h2>
          <p className="section-subtitle">
            Transform your contract review process with our AI-powered solution
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Get your contract reviewed in three simple steps
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                step: "1",
                title: "Upload Your Contract",
                description: "Simply drag and drop your lease agreement in PDF or Word format"
              },
              {
                step: "2",
                title: "AI Analysis",
                description: "Our AI system analyzes the document and identifies key elements"
              },
              {
                step: "3",
                title: "Get Results",
                description: "Receive a comprehensive report with key findings and recommendations"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative p-6 bg-white rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-4 left-6 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ValueProposition;
