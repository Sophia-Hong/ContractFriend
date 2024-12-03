import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import { ArrowRight } from 'lucide-react'

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Things to Check in Your Rental Agreement",
    excerpt: "Before signing your lease, make sure you understand these critical elements of your rental agreement...",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3",
    category: "Lease Tips",
    readTime: "5 min read",
    slug: "essential-rental-agreement-checks"
  },
  {
    id: 2,
    title: "Understanding Your Rights as a Tenant",
    excerpt: "Know your legal rights and responsibilities as a tenant to ensure a fair and comfortable living situation...",
    image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?ixlib=rb-4.0.3",
    category: "Legal Rights",
    readTime: "7 min read",
    slug: "tenant-rights-guide"
  },
  {
    id: 3,
    title: "How to Negotiate Your Rent Like a Pro",
    excerpt: "Expert tips and strategies for negotiating your rent and getting the best possible deal...",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3",
    category: "Negotiation",
    readTime: "6 min read",
    slug: "rent-negotiation-tips"
  },
  {
    id: 4,
    title: "Red Flags to Watch Out for When Viewing a Rental Property",
    excerpt: "Learn to identify potential issues during property viewings to avoid future problems...",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3",
    category: "Property Viewing",
    readTime: "8 min read",
    slug: "rental-property-red-flags"
  },
  {
    id: 5,
    title: "Security Deposit Guide: Getting Your Money Back",
    excerpt: "Everything you need to know about security deposits and how to ensure you get yours back...",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3",
    category: "Financial",
    readTime: "6 min read",
    slug: "security-deposit-guide"
  },
  {
    id: 6,
    title: "Creating a Perfect Rental Application",
    excerpt: "Stand out from other applicants with these tips for creating a strong rental application...",
    image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3",
    category: "Applications",
    readTime: "5 min read",
    slug: "rental-application-tips"
  }
]

export const metadata = {
  title: 'Renter Tips & Guides | ContractFriend',
  description: 'Expert advice and guides for renters. Learn about tenant rights, lease agreements, and how to navigate the rental process successfully.',
  keywords: ['renter tips', 'tenant rights', 'lease agreement guide', 'rental advice', 'apartment hunting tips'],
  openGraph: {
    title: 'Renter Tips & Guides | ContractFriend',
    description: 'Expert advice and guides for renters. Learn about tenant rights, lease agreements, and how to navigate the rental process successfully.',
    images: ['/og-image.jpg'],
  },
}

export default function RenterTipsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="container">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Renter Tips & Guides
            </h1>
            <p className="text-lg text-gray-600">
              Expert advice and practical tips to help you navigate the rental process with confidence
            </p>
          </div>

          {/* Featured Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Lease Tips', 'Legal Rights', 'Financial', 'Property Viewing', 'Applications'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-[#FF6B2C] hover:text-[#FF6B2C] transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/renter-tips/${post.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-medium text-[#FF6B2C]">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-[#FF6B2C] font-medium">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="max-w-2xl mx-auto bg-[#FF6B2C]/5 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Get Expert Renting Tips in Your Inbox
            </h2>
            <p className="text-gray-600 mb-6">
              Join thousands of renters receiving our weekly insights on making the most of your rental experience.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B2C]/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#FF6B2C] hover:bg-[#E55A1F] text-white font-medium rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
