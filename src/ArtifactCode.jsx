import React from 'react';
import { Rocket, BarChart, Users, MessageCircle } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-blue-500 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Boost Your Ad Performance</h1>
        <p className="text-xl mb-8">Create stunning ad creatives that convert with our AI-powered platform</p>
        <button className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full hover:bg-purple-100 transition duration-300">
          Get Started Free
        </button>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Rocket size={32} />}
            title="AI-Powered Designs"
            description="Generate eye-catching ad creatives in seconds"
          />
          <FeatureCard
            icon={<BarChart size={32} />}
            title="Performance Analytics"
            description="Track and optimize your ad performance"
          />
          <FeatureCard
            icon={<Users size={32} />}
            title="Audience Targeting"
            description="Reach the right people with precision"
          />
          <FeatureCard
            icon={<MessageCircle size={32} />}
            title="24/7 Support"
            description="Get help whenever you need it"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white text-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Ads?</h2>
          <p className="text-xl mb-8">Join thousands of businesses already using our platform</p>
          <button className="bg-purple-600 text-white font-bold py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300">
            Start Your Free Trial
          </button>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
      <div className="text-purple-300 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default LandingPage;