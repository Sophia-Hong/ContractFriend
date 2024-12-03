import Image from 'next/image'
import Navigation from '@/components/Navigation'
import { Users, Scale, Heart, Building2 } from 'lucide-react'

export const metadata = {
  title: 'About ContractFriend | Bridging the Gap in Rental Agreements',
  description: 'Founded by a legal expert with 16 years of experience, ContractFriend makes rental agreements fair and understandable for everyone.',
  keywords: ['about contractfriend', 'rental agreement expert', 'legal tech startup', 'fair housing', 'tenant rights'],
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="container">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Making Rental Agreements
              <span className="text-[#FF6B2C]"> Fair </span>
              for Everyone
            </h1>
            <p className="text-xl text-gray-600">
              We're bridging the gap between tenants and landlords with AI-powered contract analysis and 16 years of legal expertise.
            </p>
          </div>

          {/* Founder's Story */}
          <div className="max-w-4xl mx-auto mb-24">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-1 p-8 md:p-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      After 16 years in the legal field, I've witnessed firsthand how the rental market often creates an imbalance between tenants and landlords. While some services cater exclusively to landlords and others solely to tenants, I saw the need for a solution that could benefit both parties.
                    </p>
                    <p>
                      Throughout my career, I've handled countless rental disputes that could have been prevented if both parties had a clear understanding of their agreement from the start. This realization led to the birth of ContractFriend.
                    </p>
                    <p>
                      By combining my legal expertise with cutting-edge AI technology, we've created a platform that makes rental agreements transparent and fair for everyone involved. Our goal isn't to take sides, but to foster understanding and prevent disputes before they arise.
                    </p>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3"
                          alt="Sophia Hong"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Sophia Hong</div>
                        <div className="text-[#FF6B2C]">Founder & Legal Expert</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3"
                    alt="Office meeting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Mission & Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-[#FF6B2C]/10 rounded-lg flex items-center justify-center mb-6">
                  <Scale className="w-6 h-6 text-[#FF6B2C]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Balance & Fairness
                </h3>
                <p className="text-gray-600">
                  We believe in creating a balanced rental market where both tenants and landlords can thrive through clear understanding and fair agreements.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-[#FF6B2C]/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-[#FF6B2C]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Empowerment Through Knowledge
                </h3>
                <p className="text-gray-600">
                  We empower both parties with clear insights and understanding of their rental agreements, preventing disputes through transparency.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-[#FF6B2C]/10 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-[#FF6B2C]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Innovation in Housing
                </h3>
                <p className="text-gray-600">
                  We leverage AI technology to make rental agreement analysis accessible, affordable, and accurate for everyone in the housing market.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-[#FF6B2C]/10 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-[#FF6B2C]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Community First
                </h3>
                <p className="text-gray-600">
                  We're committed to building better communities by fostering positive relationships between tenants and landlords through mutual understanding.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-[#FF6B2C] mb-2">10k+</div>
                <div className="text-gray-600">Contracts Analyzed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#FF6B2C] mb-2">94%</div>
                <div className="text-gray-600">User Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#FF6B2C] mb-2">85%</div>
                <div className="text-gray-600">Dispute Prevention</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Join Us in Transforming the Rental Market
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the future of rental agreements with ContractFriend
            </p>
            <a
              href="/upload"
              className="inline-flex items-center justify-center px-8 py-4 
                       bg-[#FF6B2C] hover:bg-[#E55A1F] text-white font-medium 
                       rounded-xl transition-all duration-200 
                       shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
