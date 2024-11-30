import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ResultSection {
  title: string;
  items: string[];
  isPremium?: boolean;
}

const Results: React.FC = () => {
  const [isPaid, setIsPaid] = useState(false);

  const sections: ResultSection[] = [
    {
      title: 'Red Flags',
      items: [
        'Maintenance responsibilities are not clearly defined',
        'Late payment penalty exceeds legal limit',
        'No clear process for security deposit return',
        'Automatic renewal clause without notice requirement',
      ],
      isPremium: true
    },
    {
      title: 'Your Obligations',
      items: [
        'Monthly rent payment of $2,000 due on the 1st',
        'Maintain rental insurance throughout lease term',
        'Report maintenance issues within 24 hours',
        'Obtain written approval for any modifications'
      ]
    },
    {
      title: 'Important Dates',
      items: [
        'Lease Start: January 1, 2024',
        'Lease End: December 31, 2024',
        'Renewal Notice Required: October 1, 2024',
        'Annual Inspection: June 15, 2024'
      ]
    },
    {
      title: 'Negotiation Points',
      items: [
        'Security deposit amount (currently above market average)',
        'Maintenance response time commitment',
        'Pet policy restrictions',
        'Utility responsibility allocation'
      ]
    }
  ];

  const handleUnlock = () => {
    setIsPaid(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Contract Analysis Results</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              {section.title}
            </h3>
            
            {section.isPremium && !isPaid ? (
              <div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  {section.items.slice(0, 2).map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-4">
                  <p className="text-gray-600 mb-4">
                    Unlock {section.items.length - 2} more {section.title.toLowerCase()} and full analysis
                  </p>
                  <button
                    onClick={handleUnlock}
                    className="btn-primary w-full"
                  >
                    Unlock Full Report
                  </button>
                </div>
              </div>
            ) : (
              <ul className="space-y-2 text-gray-600">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Results;
