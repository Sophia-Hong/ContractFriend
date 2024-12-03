import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import { ArrowRight, Shield, Clock, FileSearch, Upload, Brain, FileText } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2946&auto=format&fit=crop"
            alt="Modern apartment interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl text-white">
            <h1 className="mb-6">
              <span className="text-[var(--primary-light)]">Smart Contract Analysis</span>{' '}
              for Modern Renters
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 md:mb-12">
              Understand your rental agreement in minutes. Our AI-powered analysis helps you make informed decisions and protect your rights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/upload" className="btn-primary">
                Analyze Your Contract
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/about" className="btn-secondary-light">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Why Choose ContractFriend?</h2>
            <p className="text-xl text-gray-600">
              We make understanding your rental agreement simple, fast, and reliable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quick Analysis</h3>
              <p className="text-gray-600">
                Get detailed insights about your rental agreement in minutes, not hours.
              </p>
            </div>

            <div className="feature-card">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Know Your Rights</h3>
              <p className="text-gray-600">
                Understand your rights and obligations as a tenant with clear explanations.
              </p>
            </div>

            <div className="feature-card">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-6">
                <FileSearch className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Detection</h3>
              <p className="text-gray-600">
                Identify potential issues and unfair terms before signing your lease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">How It Works</h2>
            <p className="text-xl text-gray-600">
              Get insights about your rental agreement in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="feature-card group hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=1000&auto=format&fit=crop"
                  alt="Upload document"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Upload className="w-6 h-6 text-[var(--primary)]" />
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-3xl font-bold text-[var(--primary)] mr-4">1</span>
                <div>
                  <h3 className="text-xl font-bold mb-3">Upload</h3>
                  <p className="text-gray-600">
                    Simply upload your rental agreement in PDF or Word format. We support all standard document formats.
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-card group hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
                  alt="AI Analysis"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-[var(--primary)]" />
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-3xl font-bold text-[var(--primary)] mr-4">2</span>
                <div>
                  <h3 className="text-xl font-bold mb-3">Analyze</h3>
                  <p className="text-gray-600">
                    Our AI thoroughly analyzes your document, identifying key terms, potential issues, and important clauses.
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-card group hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop"
                  alt="Review results"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[var(--primary)]" />
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-3xl font-bold text-[var(--primary)] mr-4">3</span>
                <div>
                  <h3 className="text-xl font-bold mb-3">Review</h3>
                  <p className="text-gray-600">
                    Get a comprehensive report with clear explanations, recommendations, and potential negotiation points.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Ready to Understand Your Rental Agreement?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Don't sign a lease without understanding it first. Let ContractFriend help you make an informed decision.
            </p>
            <Link href="/upload" className="btn-primary">
              Analyze Your Contract Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
