import { useState, useEffect } from "react";
import { ArrowRight, Calendar, Star, Shield, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [counters, setCounters] = useState({ 
    experience: 0, 
    projects: 0, 
    healthcare: 0,
    satisfaction: 0 
  });

  useEffect(() => {
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

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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
                Secure Technology Solutions
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
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <Calendar size={20} />
                Book Free Consultation
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
                View My Work
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6">
              <div className="flex items-center gap-2">
                <Shield className="text-green-500" size={20} />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-yellow-500" size={20} />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">13+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="text-red-500" size={20} />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Patient-First Approach</span>
              </div>
            </div>

            {/* Stats Counters */}
            <div id="hero" className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {counters.experience}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">Years Experience</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  {counters.projects}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">Projects Complete</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  {counters.healthcare}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">Healthcare Projects</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                  {counters.satisfaction}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Tariq Malik - Healthcare Technology Specialist" 
                className="w-full h-[600px] object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-blue-500/10"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">TM</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 dark:text-white">Tariq Malik</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Healthcare Tech Specialist</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Building secure, compliant healthcare solutions that improve patient care and practice efficiency.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-28 h-28 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-teal-500/15 rounded-full blur-2xl"></div>
            
            {/* Decorative Badges */}
            <div className="absolute -top-2 -left-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              HIPAA Certified
            </div>
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Available for Projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;