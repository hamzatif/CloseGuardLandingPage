import React, { useState, useEffect, useRef } from "react";

// Modern color scheme based on trust psychology
const colors = {
  primary: "#2563EB", // Bright blue - trust, stability
  primaryDark: "#1E40AF",
  secondary: "#10B981", // Green - growth, positive outcomes  
  accent: "#8B5CF6", // Purple - premium, sophisticated
  dark: "#0F172A", // Rich dark blue-black
  light: "#F8FAFC",
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6", 
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827"
  },
  success: "#10B981",
  warning: "#F59E0B",
  danger: "#EF4444"
};

// Animated counter component
function AnimatedCounter({ end, duration = 2000, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start > end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={countRef}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

// Feature card with hover effect
function FeatureCard({ icon, title, description, delay = 0 }) {
  return (
    <div 
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
      <div className="relative z-10">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// Step process with modern design
function ProcessStep({ number, title, description, isLast }) {
  return (
    <div className="relative">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
              {number}
            </div>
            {!isLast && (
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-blue-500 to-transparent"></div>
            )}
          </div>
        </div>
        <div className="ml-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

// Testimonial card
function TestimonialCard({ quote, author, role, rating = 5 }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
      </div>
      <p className="text-gray-700 text-lg mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
          {author[0]}
        </div>
        <div className="ml-4">
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

// FAQ item with smooth animation
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left hover:text-blue-600 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        <svg
          className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

// Savings example card
function SavingsCard({ title, description, example, savings, icon }) {
  return (
    <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
      <div className="flex items-start mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 ml-4">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-4">
        <p className="text-sm font-semibold text-blue-900 mb-2">Real Example:</p>
        <div className="space-y-1 text-sm text-gray-700">
          {example.map((item, index) => (
            <div key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">Potential Savings</span>
        <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          ${savings.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

// Navigation with modern design
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">CG</span>
            </div>
            <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              CloseGuard
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`font-medium transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
            }`}>Features</a>
            <a href="#how-it-works" className={`font-medium transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
            }`}>How It Works</a>
            <a href="#savings" className={`font-medium transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
            }`}>Savings</a>
            <a href="#testimonials" className={`font-medium transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
            }`}>Reviews</a>
            <button className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Get Started Free
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">How It Works</a>
              <a href="#savings" className="text-gray-700 hover:text-blue-600 font-medium">Savings</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">Reviews</a>
              <button className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full">
                Get Started Free
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Main component
export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleGetStarted = () => {
    setIsUploading(true);
    setTimeout(() => setIsUploading(false), 2000);
  };

  return (
    <div className="bg-white text-gray-900 font-sans overflow-x-hidden">
      <Navigation />

      {/* Hero Section with gradient background */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Trusted by 2,500+ Texas Homebuyers
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Save Thousands on Your
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Texas Home Closing
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            AI-powered analysis catches hidden fees, predatory lending, and costly errors in your closing documents — protecting your biggest investment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button 
              onClick={handleGetStarted}
              className="group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-full text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200"
            >
              <span className="relative z-10">
                {isUploading ? "Processing..." : "Upload Documents Now"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-full text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-200">
              Watch 2-Min Demo
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 text-white">
            <div className="text-center">
              <p className="text-3xl font-bold"><AnimatedCounter end={73} suffix="%" /></p>
              <p className="text-sm opacity-90">Documents with errors</p>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <p className="text-3xl font-bold">$<AnimatedCounter end={2500} /></p>
              <p className="text-sm opacity-90">Average savings</p>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <p className="text-3xl font-bold"><AnimatedCounter end={60} />s</p>
              <p className="text-sm opacity-90">Analysis time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <span className="text-gray-600 font-semibold">Featured in:</span>
            <span className="text-2xl font-bold text-gray-400">Texas Monthly</span>
            <span className="text-2xl font-bold text-gray-400">Austin Business Journal</span>
            <span className="text-2xl font-bold text-gray-400">Houston Chronicle</span>
            <span className="text-2xl font-bold text-gray-400">D Magazine</span>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              The Hidden Cost of Home Buying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most Texas homebuyers don't realize they're overpaying until it's too late. 
              Our AI technology reveals what others miss.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-red-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">$1,500-$3,000</h3>
              <p className="text-gray-600">Average overpayment at closing due to errors and hidden fees</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">156 Pages</h3>
              <p className="text-gray-600">Average closing document length filled with complex legal terms</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-yellow-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">24 Hours</h3>
              <p className="text-gray-600">Typical review time before signing life-changing documents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
              Powerful Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Protect Your Investment
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="🎯"
              title="Forensic Score™"
              description="Get an instant 0-100 risk assessment with clear HIGH/MODERATE/LOW indicators and actionable insights."
              delay={0}
            />
            <FeatureCard
              icon="🔍"
              title="Line-by-Line Analysis"
              description="Every fee, charge, and term examined against Texas regulations and industry standards."
              delay={100}
            />
            <FeatureCard
              icon="💡"
              title="Plain English Explanations"
              description="Complex legal terms translated into clear, understandable language you can act on."
              delay={200}
            />
            <FeatureCard
              icon="⚡"
              title="60-Second Results"
              description="Upload your documents and get comprehensive analysis in under a minute."
              delay={300}
            />
            <FeatureCard
              icon="🛡️"
              title="Bank-Level Security"
              description="Your documents are encrypted, private, and can be deleted anytime you want."
              delay={400}
            />
            <FeatureCard
              icon="📊"
              title="Comparison Reports"
              description="See how your costs compare to Texas averages and identify outliers instantly."
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm font-medium mb-4">
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Three Steps to Peace of Mind
            </h2>
            <p className="text-xl text-gray-600">
              From upload to insights in minutes, not hours
            </p>
          </div>

          <div className="space-y-12">
            <ProcessStep
              number="1"
              title="Upload Your Documents"
              description="Simply drag and drop your Closing Disclosure, Loan Estimate, or other closing documents. Our secure system accepts PDFs and images."
              isLast={false}
            />
            <ProcessStep
              number="2"
              title="AI Analysis Begins"
              description="Our proprietary AI examines every line, comparing against Texas regulations, TRID rules, and our database of common errors and predatory practices."
              isLast={false}
            />
            <ProcessStep
              number="3"
              title="Get Your Action Plan"
              description="Receive your Forensic Score, detailed findings, and step-by-step guidance on what to ask your lender or title company before signing."
              isLast={true}
            />
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to protect your closing?</h3>
            <p className="mb-6 text-white/90">Join thousands of Texas homebuyers who saved money with CloseGuard</p>
            <button className="px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Start Free Analysis
            </button>
          </div>
        </div>
      </section>

      {/* Savings Examples */}
      <section id="savings" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-600 text-sm font-medium mb-4">
              Real Savings
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Common Violations We Catch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are actual errors found in Texas closing documents that cost buyers thousands
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <SavingsCard
              icon="$"
              title="Simultaneous Title Insurance"
              description="When both owner's and lender's policies are issued together, the lender's should only cost $100."
              example={[
                "Owner's Title: $2,432",
                "Lender's Title charged: $2,178",
                "Should be: $100"
              ]}
              savings={2078}
            />
            <SavingsCard
              icon="⚠"
              title="POC Double-Charging"
              description="Fees already paid outside closing sometimes appear again in final documents."
              example={[
                "Appraisal (POC): $550 already paid",
                "Credit Report (POC): $45 already paid",
                "Both charged again at closing"
              ]}
              savings={595}
            />
            <SavingsCard
              icon="📋"
              title="Seller's Costs to Buyer"
              description="Texas contracts typically require sellers to pay owner's title policy."
              example={[
                "Owner's Policy: $2,174",
                "Contract: Seller pays (Para 6(A)(1))",
                "Incorrectly charged to buyer"
              ]}
              savings={2174}
            />
            <SavingsCard
              icon="🔄"
              title="Title Company Double-Dipping"
              description="Title premiums include closing services, yet extra fees get added."
              example={[
                "Title Premium: $2,432 (includes services)",
                "Extra Settlement Fee: $395",
                "Extra Doc Prep: $150"
              ]}
              savings={545}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              *Examples from actual Texas closings. Your results may vary.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Numbers Don't Lie
            </h2>
            <p className="text-xl text-white/90">
              Our impact on Texas home closings
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">
                <AnimatedCounter end={2500} prefix="+" />
              </p>
              <p className="text-white/80">Happy Homebuyers</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">
                $<AnimatedCounter end={6.2} suffix="M" />
              </p>
              <p className="text-white/80">Total Saved</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </p>
              <p className="text-white/80">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">
                <AnimatedCounter end={4.9} suffix="/5" />
              </p>
              <p className="text-white/80">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Buyers, Real Savings
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="CloseGuard found $2,800 in errors on my closing disclosure. The title company fixed everything before closing. Best $100 I ever spent!"
              author="Sarah Mitchell"
              role="First-time Homebuyer, Austin"
            />
            <TestimonialCard
              quote="I almost paid for the owner's title policy that the seller should have covered. CloseGuard caught it and saved me $2,174."
              author="James Rodriguez"
              role="Home Buyer, Houston"
            />
            <TestimonialCard
              quote="The plain English explanations finally helped me understand what I was signing. No more confusion or anxiety at closing."
              author="Emily Chen"
              role="Condo Buyer, Dallas"
            />
            <TestimonialCard
              quote="They found duplicate charges and incorrect fee allocations. Saved $1,650 and gave me confidence at the closing table."
              author="Michael Thompson"
              role="Investment Property, San Antonio"
            />
            <TestimonialCard
              quote="The forensic score showed HIGH risk - turned out the lender made multiple errors. Fixed them all thanks to CloseGuard."
              author="Lisa Park"
              role="Townhome Buyer, Fort Worth"
            />
            <TestimonialCard
              quote="60 seconds to analyze what would have taken me hours to understand. Found issues I never would have caught myself."
              author="David Williams"
              role="Second Home, Plano"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Questions Answered
            </h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <FAQItem
              question="How quickly will I get my results?"
              answer="Most analyses complete in under 60 seconds. Complex documents with multiple addenda may take up to 2 minutes. You'll receive an email as soon as your report is ready."
            />
            <FAQItem
              question="What documents can I upload?"
              answer="We accept Closing Disclosures, Loan Estimates, HUD-1 forms, Notes, Deeds of Trust, title commitments, and most other closing-related documents. Files can be PDFs or images (JPG, PNG)."
            />
            <FAQItem
              question="Is my information secure?"
              answer="Absolutely. We use bank-level 256-bit encryption for all documents. Your files are stored securely and you can delete them anytime. We never share your information with third parties."
            />
            <FAQItem
              question="What if I don't find any errors?"
              answer="While 73% of documents contain errors, even a clean report provides peace of mind. You'll know you're getting a fair deal and can proceed with confidence. Plus, you'll have documentation if issues arise later."
            />
            <FAQItem
              question="Can CloseGuard replace a real estate attorney?"
              answer="No, CloseGuard is a tool to help you identify potential issues and understand your documents better. For legal advice specific to your situation, we recommend consulting with a qualified Texas real estate attorney."
            />
            <FAQItem
              question="What's included in the free analysis?"
              answer="The free analysis includes your Forensic Score, identification of major red flags, and basic guidance. Premium features include detailed line-by-line analysis, downloadable reports, and priority support."
            />
            <FAQItem
              question="Do you work with specific lenders or title companies?"
              answer="No, we're completely independent. We don't receive commissions or referral fees from any lenders, title companies, or real estate professionals. Our only goal is protecting homebuyers."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-48 -mt-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mb-48"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Don't Leave Money on the Closing Table
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Join 2,500+ Texas homebuyers who've saved an average of $2,500
          </p>
          
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-2xl font-bold mb-2">Limited Time Offer</p>
            <p className="text-xl mb-6 text-white/90">First analysis FREE</p>
            
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-3 rounded-full text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                Start Free Analysis →
              </button>
            </div>
            
            <p className="text-sm mt-4 text-white/80">
              No credit card required • 60-second results • Delete anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CG</span>
                </div>
                <span className="text-2xl font-bold text-white">CloseGuard</span>
              </div>
              <p className="text-sm">
                Protecting Texas homebuyers from costly closing errors since 2021.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm">© 2024 CloseGuard. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 14.002-7.496 14.002-13.986 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}