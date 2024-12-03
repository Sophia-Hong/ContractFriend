import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { ArrowLeft, Clock, Share2 } from 'lucide-react'

// This would typically come from a CMS or database
const post = {
  title: "10 Essential Things to Check in Your Rental Agreement",
  publishDate: "2024-01-15",
  author: {
    name: "Sarah Johnson",
    role: "Legal Expert",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
  },
  readTime: "5 min read",
  category: "Lease Tips",
  heroImage: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3",
  content: `
    <p class="mb-6">
      When it comes to renting a property, the lease agreement is one of the most important documents you'll need to understand thoroughly. Here are the essential elements you should always check before signing:
    </p>

    <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Rent and Payment Terms</h2>
    <p class="mb-6">
      Carefully review the monthly rent amount, when it's due, and acceptable payment methods. Check if there are any late payment penalties or grace periods. Also, verify if utilities are included in the rent or if they're your responsibility.
    </p>

    <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Lease Duration and Renewal Terms</h2>
    <p class="mb-6">
      Confirm the start and end dates of your lease. Understanding the renewal process is crucial - check if there's an automatic renewal clause and how much notice you need to give if you plan to move out.
    </p>

    <h2 class="text-2xl font-bold text-gray-900 mb-4">3. Security Deposit Details</h2>
    <p class="mb-6">
      The security deposit amount should be clearly stated, along with conditions for its return. Look for information about what could cause deductions from your deposit and the timeline for its return after move-out.
    </p>

    <h2 class="text-2xl font-bold text-gray-900 mb-4">4. Maintenance and Repairs</h2>
    <p class="mb-6">
      Understand who's responsible for various types of maintenance and repairs. The agreement should specify how to request repairs and the expected response time for maintenance issues.
    </p>

    <h2 class="text-2xl font-bold text-gray-900 mb-4">5. Pet Policy</h2>
    <p class="mb-6">
      If you have or plan to have pets, review the pet policy carefully. Check for any pet deposits, monthly pet rent, or restrictions on types and sizes of pets allowed.
    </p>

    <div class="bg-[#FF6B2C]/5 rounded-xl p-6 my-8">
      <h3 class="text-xl font-semibold text-gray-900 mb-3">Pro Tip</h3>
      <p class="text-gray-700">
        Always get any verbal agreements in writing. If your landlord promises to make repairs or improvements before you move in, make sure these are documented in the lease or in a signed addendum.
      </p>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 mb-4">6. Alterations and Decorating</h2>
    <p class="mb-6">
      Check what modifications you're allowed to make to the property. This includes painting walls, hanging pictures, and making other cosmetic changes.
    </p>

    <h2 class="text-2xl font-bold text-gray-900 mb-4">7. Subletting and Guest Policies</h2>
    <p class="mb-6">
      Understand the rules about having long-term guests and subletting the property. This is especially important if you might need to move before the lease ends.
    </p>

    <h2 class="text-2xl font-bold text-gray-900 mb-4">8. Insurance Requirements</h2>
    <p class="mb-6">
      Review any requirements for renter's insurance. Some landlords require tenants to maintain a certain level of liability coverage.
    </p>

    <h2 class="text-2xl font-bold text-gray-900 mb-4">9. Access and Notice</h2>
    <p class="mb-6">
      The lease should specify when and how the landlord can enter the property. Most states require landlords to give notice before entering, except in emergencies.
    </p>

    <h2 class="text-2xl font-bold text-gray-900 mb-4">10. Early Termination Conditions</h2>
    <p class="mb-6">
      Understand the conditions under which you or the landlord can terminate the lease early, and any associated penalties or fees.
    </p>
  `
}

export const metadata = {
  title: '10 Essential Things to Check in Your Rental Agreement | ContractFriend',
  description: 'Learn about the crucial elements you should review in your lease agreement before signing. Expert tips on rent terms, security deposits, maintenance responsibilities, and more.',
  keywords: ['rental agreement checklist', 'lease agreement tips', 'what to check in lease', 'rental contract guide'],
  openGraph: {
    title: '10 Essential Things to Check in Your Rental Agreement',
    description: 'Essential guide to reviewing your lease agreement. Learn what to look for before signing.',
    images: ['/og-image.jpg'],
  },
}

export default function BlogPost() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <article className="container max-w-4xl">
          {/* Back Button */}
          <Link 
            href="/renter-tips"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tips
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-medium text-[#FF6B2C]">
                {post.category}
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{post.author.name}</div>
                  <div className="text-sm text-gray-500">{post.author.role}</div>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Share article">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
            <Image
              src={post.heroImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Related Articles */}
          <div className="mt-16 border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Add related articles here */}
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
