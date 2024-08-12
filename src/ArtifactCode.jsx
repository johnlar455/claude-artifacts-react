import React, { useState } from 'react';
import { Rocket, BarChart, Users, MessageCircle, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-600 to-blue-500 text-white">
      {/* Navigation */}
      <nav className="bg-white bg-opacity-10 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">AdCreative.ai</a>
          <div className="hidden md:flex space-x-6">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-10 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <NavLink href="#features" onClick={toggleMenu}>Features</NavLink>
            <NavLink href="#pricing" onClick={toggleMenu}>Pricing</NavLink>
            <NavLink href="#about" onClick={toggleMenu}>About</NavLink>
            <NavLink href="#contact" onClick={toggleMenu}>Contact</NavLink>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="flex-grow flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Boost Your Ad Performance</h1>
          <p className="text-xl mb-8">Create stunning ad creatives that convert with our AI-powered platform</p>
          <a 
            href="https://free-trial.adcreative.ai/500-free-google-ads-credits4620721" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full hover:bg-purple-100 transition duration-300"
          >
            Get Started Free
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="bg-white text-purple-600 py-16">
        <div className="container mx-auto px-4">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Ads?</h2>
          <p className="text-xl mb-8">Join thousands of businesses already using our platform</p>
          <a 
            href="https://free-trial.adcreative.ai/500-free-google-ads-credits4620721" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full hover:bg-purple-100 transition duration-300"
          >
            Start Your Free Trial
          </a>
        </div>
      </section>
    </div>
  );
};

const NavLink = ({ href, children, onClick }) => (
  <a href={href} className="hover:text-purple-300 transition duration-300" onClick={onClick}>{children}</a>
);

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-purple-100 p-6 rounded-lg text-center">
      <div className="text-purple-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-purple-800">{description}</p>
    </div>
  );
};

export default LandingPage;