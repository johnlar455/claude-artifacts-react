import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Mail, Users, Globe, Star, ChevronRight, Menu, X } from 'lucide-react'

export default function UpdatedGetResponseLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const affiliateLink1 = "https://www.getresponse.com?a=XQNkv3gkQK"
  const affiliateLink2 = "https://www.getresponse.com?ab=QTPDJANkKH"

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/placeholder.svg?height=40&width=40" height={40} width={40} alt="GetResponse Logo" className="mr-2" />
            <span className="font-bold text-xl text-green-700">GetResponse</span>
          </div>
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 md:left-auto bg-white md:bg-transparent w-full md:w-auto p-4 md:p-0 shadow-md md:shadow-none z-50 space-y-4 md:space-y-0 md:space-x-6 transition-all duration-300 ease-in-out`}>
            <Link href={affiliateLink1} className="text-gray-600 hover:text-green-700 transition-colors duration-200">Features</Link>
            <Link href={affiliateLink1} className="text-gray-600 hover:text-green-700 transition-colors duration-200">Pricing</Link>
            <Link href={affiliateLink1} className="text-gray-600 hover:text-green-700 transition-colors duration-200">Resources</Link>
            <Link href={affiliateLink1} className="text-gray-600 hover:text-green-700 transition-colors duration-200">Enterprise</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:inline-flex hover:bg-green-50 transition-colors duration-200" onClick={() => window.open(affiliateLink1, '_blank')}>Log in</Button>
            <Button className="bg-green-600 text-white hover:bg-green-700 transition-colors duration-200" onClick={() => window.open(affiliateLink1, '_blank')}>Start free trial</Button>
            <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <section className="text-center py-12 md:py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
            Elevate Your Email Marketing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create, send, and analyze campaigns that resonate. Perfect for businesses ready to make an impact.
          </p>
          <Button className="bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 text-lg px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105" onClick={() => window.open(affiliateLink1, '_blank')}>
            Start your journey
          </Button>
          <p className="mt-4 text-sm text-gray-500">No credit card required. 30-day free trial.</p>
        </section>

        <section className="mb-20">
          <div className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-70 shadow-xl rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Powerful Analytics for Smarter Campaigns</h2>
                <p className="text-gray-600 mb-6">Track opens, clicks, and conversions in real-time. Use data-driven insights to optimize your email performance and boost ROI.</p>
                <Button className="bg-green-600 text-white hover:bg-green-700 transition-all duration-200 transform hover:scale-105" onClick={() => window.open(affiliateLink1, '_blank')}>
                  Explore Analytics
                </Button>
              </div>
              <div className="md:w-1/2">
                <Image src="/placeholder.svg?height=300&width=500" width={500} height={300} alt="Analytics Dashboard" className="rounded-lg shadow-md w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="font-bold text-3xl md:text-4xl text-green-600 mb-2">350,000+</div>
            <p className="text-gray-600">Customers worldwide</p>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="font-bold text-3xl md:text-4xl text-green-600 mb-2">1B+</div>
            <p className="text-gray-600">Emails sent monthly</p>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="font-bold text-3xl md:text-4xl text-green-600 mb-2">99.9%</div>
            <p className="text-gray-600">Deliverability rate</p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Why Choose GetResponse?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <Mail className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="font-bold text-xl mb-4 text-gray-800">Easy Email Creation</h3>
              <p className="text-gray-600">Design stunning emails with our intuitive drag-and-drop editor. No coding skills required.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <Users className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="font-bold text-xl mb-4 text-gray-800">Advanced Segmentation</h3>
              <p className="text-gray-600">Target the right audience with precision using our powerful segmentation tools.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <Globe className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="font-bold text-xl mb-4 text-gray-800">Global Reach</h3>
              <p className="text-gray-600">Connect with customers worldwide with our robust international delivery network.</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Unlock Your Email Marketing Potential</h2>
            <p className="text-xl md:text-2xl text-center mb-8">
              Join thousands of successful marketers and skyrocket your email campaigns today!
            </p>
            <div className="flex justify-center">
              <Button className="bg-white text-green-600 hover:bg-green-50 transition-colors duration-200 text-lg px-8 py-4 rounded-full transform hover:scale-105" onClick={() => window.open(affiliateLink2, '_blank')}>
                Start Your Success Story
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                <div className="flex items-center mb-6">
                  <Image src={`/placeholder.svg?height=60&width=60&text=User${i}`} width={60} height={60} alt={`User ${i}`} className="rounded-full mr-4" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">John Doe</h3>
                    <p className="text-sm text-gray-500">Marketing Manager</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">"GetResponse has transformed our email marketing strategy. The ease of use and powerful features have helped us increase our engagement rates significantly."</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to boost your email marketing?</h2>
                <p className="mb-4 md:mb-0 text-lg">Join thousands of businesses that trust GetResponse for their email campaigns.</p>
              </div>
              <Button className="bg-white text-green-600 hover:bg-green-50 transition-colors duration-200 text-lg px-8 py-4 rounded-full transform hover:scale-105" onClick={() => window.open(affiliateLink1, '_blank')}>
                Start free trial <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <Image src="/placeholder.svg?height=40&width=40" height={40} width={40} alt="GetResponse Logo" className="mb-4" />
              <p className="text-sm text-gray-400">GetResponse provides powerful, simplified tools to send emails, create pages, and automate your marketing.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href={affiliateLink1} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Features</Link></li>
                <li><Link href={affiliateLink1} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Integrations</Link></li>
                <li><Link href={affiliateLink1} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Pricing</Link></li>
                <li><Link href={affiliateLink1} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Enterprise</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href={affiliateLink1} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Blog</Link></li>
                <li><Link href={affiliateLink1} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Help Center</Link></li>
                <li><Link href={affiliateLink1} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Guides</Link></li>
                <li><Link href={affiliateLink1} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">API Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href={affiliateLink1} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">About Us</Link></li>
                <li><Link href={affiliateLink1} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Careers</Link></li>
                <li><Link href={affiliateLink1} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Press</Link></li>
                <li><Link href={affiliateLink1} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} GetResponse. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href={affiliateLink1} className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href={affiliateLink1} className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href={affiliateLink1} className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
