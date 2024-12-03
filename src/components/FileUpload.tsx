'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = {
  'application/pdf': ['.pdf'],
  'application/msword': ['.doc'],
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
} as const;

type AcceptedFileTypes = typeof ACCEPTED_FILE_TYPES;

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError(null);
    const selectedFile = acceptedFiles[0];

    if (!selectedFile) return;

    if (selectedFile.size > MAX_FILE_SIZE) {
      setError('File size must be less than 10MB');
      return;
    }

    setFile(selectedFile);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_FILE_TYPES,
    maxFiles: 1,
    multiple: false,
    maxSize: MAX_FILE_SIZE
  });

  const removeFile = () => {
    setFile(null);
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    try {
      // Simulate file upload delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // TODO: Implement actual file upload logic here
      
      // Navigate to review page
      router.push('/review');
    } catch (error) {
      console.error('Upload failed:', error);
      // TODO: Add error handling
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-200
          ${isDragActive 
            ? 'border-[#FF6B2C] bg-[#FF6B2C]/5' 
            : 'border-gray-200 hover:border-[#FF6B2C] hover:bg-[#FF6B2C]/5'
          }
          ${error ? 'border-red-500 bg-red-50' : ''}
          ${file ? 'border-[#FF6B2C]/50 bg-[#FF6B2C]/5' : ''}
        `}
      >
        <input {...getInputProps()} />
        
        {file ? (
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <span className="text-gray-700">{file.name}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  removeFile()
                }}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleUpload()
              }}
              disabled={uploading}
              className={`mt-6 w-full py-4 px-6 rounded-xl text-white font-medium flex items-center justify-center group
                ${uploading
                  ? 'bg-[#FF6B2C]/70 cursor-not-allowed'
                  : 'bg-[#FF6B2C] hover:bg-[#E55A1F]'
                }`}
            >
              {uploading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Analyzing Contract...</span>
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  <span>Analyze Contract</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-center">
              <Upload className="w-12 h-12 text-gray-400" />
            </div>
            <div>
              <p className="text-lg font-medium text-gray-700">
                {isDragActive
                  ? 'Drop your contract here...'
                  : 'Drag & drop your contract here'}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                or click to browse your files
              </p>
              <p className="mt-4 text-sm text-gray-400">
                Supported formats: PDF, DOC, DOCX (Max 10MB)
              </p>
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-xl flex items-center">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
