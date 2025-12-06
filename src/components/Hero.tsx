import { useState, useEffect } from "react";
import { ArrowRight, Calendar, Star, Shield, Heart, Stethoscope, Activity, Users, Zap } from "lucide-react";
import heroImage from "@/assets/tariq.png";

const Hero = () => {
  const [counters, setCounters] = useState({ 
    experience: 0, 
    projects: 0, 
    healthcare: 0,
    satisfaction: 0 
  });

  const [animatedIcons, setAnimatedIcons] = useState<Array<{icon: JSX.Element, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    // Initialize floating icons
    const icons = [
      { icon: <Stethoscope className="text-blue-400/20" size={24} />, x: 10, y: 20, delay: 0 },
      { icon: <Heart className="text-red-400/20" size={20} />, x: 85, y: 15, delay: 2 },
      { icon: <Shield className="text-green-400/20" size={22} />, x: 15, y: 80, delay: 4 },
      { icon: <Activity className="text-purple-400/20" size={26} />, x: 90, y: 75, delay: 6 },
      { icon: <Users className="text-cyan-400/20" size={18} />, x: 25, y: 45, delay: 1 },
      { icon: <Zap className="text-yellow-400/20" size={24} />, x: 75, y: 50, delay: 3 },
    ];
    setAnimatedIcons(icons);

    // Counter animation
    const animateCounter = (target: number, key: keyof typeof counters) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounters(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 30);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounter(13, "experience");
        animateCounter(50, "projects");
        animateCounter(30, "healthcare");
        animateCounter(99, "satisfaction");
      }
    });

    const heroSection = document.getElementById("hero");
    if (heroSection) observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Healthcare Icons */}
        {animatedIcons.map((item, index) => (
          <div
            key={index}
            className="absolute animate-float"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              animationDelay: `${item.delay}s`,
              animationDuration: '15s'
            }}
          >
            {item.icon}
          </div>
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
           

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                Tariq Malik
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white leading-tight">
              Transforming Healthcare Through{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Secure Technology
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Full Stack Developer specializing in{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">HIPAA-compliant healthcare solutions</span>, 
              creating patient-focused websites, secure ERP systems, and digital platforms that drive growth and improve patient care.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToContact}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                <Calendar size={20} />
                Book Free Consultation
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button 
                onClick={scrollToPortfolio}
                className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:shadow-lg"
              >
                View My Work
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6">
              <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 px-3 py-2 rounded-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <Shield className="text-green-500" size={18} />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 px-3 py-2 rounded-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <Star className="text-yellow-500" size={18} />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">13+ Years Exp</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 px-3 py-2 rounded-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <Heart className="text-red-500" size={18} />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Patient-First</span>
              </div>
            </div>

            {/* Stats Counters */}
            <div id="hero" className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              <div className="text-center bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {counters.experience}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Years Experience</div>
              </div>
              
              <div className="text-center bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  {counters.projects}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Projects Complete</div>
              </div>
              
              <div className="text-center bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  {counters.healthcare}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Healthcare Projects</div>
              </div>
              
              <div className="text-center bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                  {counters.satisfaction}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 border border-white/20">
              <img 
                src={heroImage} 
                alt="Tariq Malik - Healthcare Technology Specialist" 
                className="w-full h-[500px] object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-blue-500/5"></div>
              
              {/* Animated Pulse Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-blue-400/20 animate-ping-slow pointer-events-none"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className=" dark:bg-gray-800/90 rounded-2xl p-6 border border-white/20 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                      <Stethoscope className="text-white" size={20} />
                    </div>
                    <div>
                     <h3 className="font-bold text-white">Tariq Malik</h3>
                      <p className="text-sm text-white/90">Healthcare Tech Specialist</p> 
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-3 -left-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce-slow">
              HIPAA Certified
            </div>
            <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce-slow" style={{animationDelay: '1s'}}>
              Available
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        @keyframes ping-slow {
          75%, 100% { transform: scale(1.1); opacity: 0; }
        }
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s infinite; }
      `}</style>
    </section>
  );
};

export default Hero;