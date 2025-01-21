import React, { useState } from 'react';
import { Plane as Planet, Rocket, Zap, Globe, MessageSquare, ArrowRight, CheckCircle, Stars, Sparkles, TestTube, Workflow, Users } from 'lucide-react';

function App() {
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: 'email',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.eu2.make.com/7ztvuldygfe5xpjy43ki387qy2tjcqvy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          contactMethod: 'email',
        });
        togglePopup();
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-neon-dark">
      {/* Popup Form */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-2xl font-bold text-neon-dark mb-4">Contact Us</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-green"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-green"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-green"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Contact Method</label>
                <select
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-green"
                >
                  <option value="email">Email</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-neon-green text-neon-dark w-full py-2 rounded-lg font-semibold hover:bg-opacity-90 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            <button
              className="mt-4 text-sm text-gray-500 hover:underline w-full text-center"
              onClick={togglePopup}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <header className="cosmic-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col items-center text-center">
            <Planet className="w-16 h-16 text-neon-green mb-6 animate-pulse" />
            <h1 className="text-5xl font-bold text-white mb-6 graffiti-text">
              Transform Your Content with <span className="text-neon-green neon-glow">Contenta Studio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-8">
              Blast off into the future of content creation with our AI-powered cosmic solutions. From ideation to publication, we make it stellar.
            </p>
            <button onClick={togglePopup} className="bg-neon-green text-neon-dark px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-colors neon-box">
              Launch Your Journey <Rocket className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 graffiti-text">Why Choose <span className="text-neon-green neon-glow">Contenta</span>?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-neon-green" />}
              title="Cosmic Speed"
              description="Generate light-years of content in minutes with our advanced AI algorithms"
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8 text-neon-green" />}
              title="Universal Publishing"
              description="Distribute your content across all dimensions of the social media universe"
            />
            <FeatureCard
              icon={<MessageSquare className="w-8 h-8 text-neon-green" />}
              title="Stellar Optimization"
              description="AI-powered suggestions that make your content shine bright"
            />
          </div>
        </div>
      </section>


            {/* Services Section */}
      <section className="bg-neon-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 graffiti-text">Our <span className="text-neon-green neon-glow">Services</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Sparkles className="w-8 h-8 text-neon-green" />}
              title="Content Without Subscriptions"
              description="Launch into content creation with ready-to-publish, custom pieces crafted for your brand"
            />
            <ServiceCard
              icon={<TestTube className="w-8 h-8 text-neon-green" />}
              title="Test Before You Pay"
              description="Experience our stellar quality with 1-3 test posts before your journey begins"
            />
            <ServiceCard
              icon={<Workflow className="w-8 h-8 text-neon-green" />}
              title="Content Automation"
              description="One-time setup for infinite possibilities - streamline your posting process across the content universe"
            />
            <ServiceCard
              icon={<Users className="w-8 h-8 text-neon-green" />}
              title="Lead Automation"
              description="Nebula Plan exclusive: Advanced AI systems managing audience interactions and lead generation workflows"
              featured={true}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 graffiti-text">Our <span className="text-neon-green neon-glow">Process</span></h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Analysis", desc: "Map your content universe" },
              { step: "2", title: "Strategy", desc: "Plot your cosmic journey" },
              { step: "3", title: "Creation", desc: "Generate stellar content" },
              { step: "4", title: "Distribution", desc: "Launch across platforms" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-neon-green text-neon-dark rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold neon-box">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-neon-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 graffiti-text">Stellar <span className="text-neon-green neon-glow">Reviews</span></h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            See what cosmic explorers say about their journey with Contenta Studio
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Our content reached new galaxies while maintaining stellar quality. Absolute game changer!"
              author="Sarah Johnson"
              role="Marketing Director"
              company="TechCorp Inc."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200"
            />
            <TestimonialCard
              quote="The AI-driven suggestions helped us discover new content dimensions we never knew existed."
              author="Michael Chen"
              role="Content Strategist"
              company="Growth Dynamics"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200"
            />
            <TestimonialCard
              quote="Contenta Studio's AI solution accelerated our content creation to light speed."
              author="Emma Rodriguez"
              role="CEO"
              company="Digital First Media"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 graffiti-text">Choose Your <span className="text-neon-green neon-glow">Mission</span></h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            One-time investment for long-term content success. No monthly subscriptions, just pure value
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Orbit"
              price="699"
              oneTime={true}
              features={[
                "30 pieces of custom-tailored content",
                "Automation setup for 3 platforms",
                "Basic analytics",
                "Email support"
              ]}
              togglePopup={togglePopup}
            />
            <PricingCard
              title="Nebula"
              price="1,199"
              featured={true}
              oneTime={true}
              features={[
                "50 pieces of premium content",
                "Automation for 5 platforms",
                "Advanced analytics",
                "Priority support",
                "Custom lead automation tools"
              ]}
              togglePopup={togglePopup}
            />
            <PricingCard
              title="Galaxy"
              price="Custom"
              features={[
                "Custom content volume",
                "Tailored automation solutions",
                "Multi-platform support",
                "Dedicated account manager",
                "Advanced lead generation",
                "24/7 priority support"
              ]}
              togglePopup={togglePopup}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neon-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neon-dark mb-6 graffiti-text">Ready to Create Stellar Content?</h2>
          <p className="text-neon-dark/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of brands already exploring new content frontiers
          </p>
          <button onClick={togglePopup} className="bg-neon-dark text-neon-green px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-colors mx-auto neon-box">
            Start Your Mission <Stars className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neon-dark text-gray-400 py-12 border-t border-neon-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Contenta Studio</h3>
              <p className="text-sm">Exploring new frontiers in content creation</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>Content Generation</li>
                <li>Social Media Management</li>
                <li>SEO Optimization</li>
                <li>Analytics & Reporting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neon-green/20 mt-12 pt-8 text-sm text-center">
            © 2024 Contenta Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-neon-light p-6 rounded-xl border border-neon-green/20 hover:border-neon-green/40 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role, company, image }) {
  return (
    <div className="bg-neon-light p-8 rounded-xl border border-neon-green/20 hover:border-neon-green/40 transition-colors">
      <div className="flex items-center mb-6">
        <img
          src={image}
          alt={author}
          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-neon-green"
        />
        <div>
          <h4 className="font-semibold text-white">{author}</h4>
          <p className="text-sm text-gray-400">{role}</p>
          <p className="text-sm text-neon-green">{company}</p>
        </div>
      </div>
      <blockquote className="text-gray-300 italic">"{quote}"</blockquote>
    </div>
  );
}

function ServiceCard({ icon, title, description, featured = false }) {
  return (
    <div className={`bg-neon-dark p-8 rounded-xl ${featured ? 'border-2 border-neon-green neon-box' : 'border border-neon-green/20'} hover:border-neon-green/40 transition-colors h-full`}>
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
      {featured && <span className="inline-block mt-4 text-sm text-neon-green">Nebula Plan Exclusive</span>}
    </div>
  );
}

function PricingCard({ title, price, features, featured = false, oneTime = false, togglePopup }) {
  return (
    <div className={`rounded-xl p-8 ${featured ? 'bg-neon-green/10 border-2 border-neon-green neon-box' : 'bg-neon-dark border border-neon-green/20'}`}>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <div className="mb-6">
        {price === 'Custom' ? (
          <span className="text-4xl font-bold text-neon-green">$Custom</span>
        ) : (
          <>
            <span className="text-4xl font-bold text-neon-green">${price}</span>
            {oneTime && <span className="text-gray-400 text-sm ml-2">one-time</span>}
          </>
        )}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-300">
            <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button onClick={togglePopup} className={`w-full py-3 rounded-lg font-semibold ${featured ? 'bg-neon-green text-neon-dark hover:bg-opacity-90' : 'bg-neon-light text-white hover:bg-neon-green/10'} transition-colors`}>
        Start Your Journey
      </button>
    </div>
  );
}

export default App;