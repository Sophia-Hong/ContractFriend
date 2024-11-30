import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';

const Upload: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState('');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      handleFileUpload(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1
  });

  const handleFileUpload = async (file: File) => {
    setIsAnalyzing(true);
    
    // Simulate analysis steps
    const steps = [
      'Scanning document...',
      'Analyzing maintenance section...',
      'Reviewing payment terms...',
      'Checking legal compliance...',
      'Identifying key dates...',
      'Generating report...'
    ];

    for (const step of steps) {
      setAnalysisStep(step);
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    setIsAnalyzing(false);
    // Here you would typically navigate to results page
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Upload Your Contract</h2>
        <p className="mt-2 text-gray-600">
          Drag and drop your contract file or click to browse
        </p>
      </div>

      {!isAnalyzing ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors
            ${isDragActive ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-orange-500'}`}
        >
          <input {...getInputProps()} />
          <div className="space-y-4">
            <div className="flex justify-center">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <p className="text-gray-600">
              {isDragActive
                ? "Drop your file here"
                : "Drag and drop your contract, or click to select"}
            </p>
            <p className="text-sm text-gray-500">
              Supported formats: PDF, DOC, DOCX
            </p>
          </div>
        </div>
      ) : (
        <motion.div
          className="text-center p-12 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <h3 className="text-xl font-semibold text-gray-900">{analysisStep}</h3>
          <p className="text-gray-600">Please wait while we analyze your contract...</p>
        </motion.div>
      )}
    </div>
  );
};

export default Upload;
