import FileUpload from '@/components/FileUpload'
import Navigation from '@/components/Navigation'
import { ArrowRight } from 'lucide-react'

export default function UploadPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Upload Your Contract
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Let our AI analyze your rental agreement and highlight important terms and potential issues
            </p>

            {/* File Upload Component */}
            <div className="mb-8">
              <FileUpload />
            </div>

            {/* Start Analyzing Button */}
            <div className="flex justify-center">
              <button
                className="group inline-flex items-center justify-center px-8 py-4 
                           bg-[#FF6B2C] hover:bg-[#E55A1F] text-white font-medium 
                           rounded-xl transition-all duration-200 
                           shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Start Analyzing
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Features Grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-[#FF6B2C]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#FF6B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Analysis</h3>
                <p className="text-gray-600">Get insights about your contract in minutes, not hours</p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-[#FF6B2C]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#FF6B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
                <p className="text-gray-600">Your documents are encrypted and never stored</p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-[#FF6B2C]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#FF6B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Insights</h3>
                <p className="text-gray-600">AI-powered analysis of key terms and conditions</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
