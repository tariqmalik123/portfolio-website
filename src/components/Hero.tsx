import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [counters, setCounters] = useState({ experience: 0, projects: 0, satisfaction: 0 });

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
        animateCounter(8, "projects");
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
    <section id="home" className="min-h-screen flex items-center pt-20 section-padding bg-gradient-to-br from-background to-muted">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-block">
              <span className="text-primary font-semibold text-lg">Hello, I'm</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Tariq Malik
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary/90">
              Helping Healthcare Businesses Grow with Smart Websites, SEO, and Scalable Tech Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transforming Healthcare Websites into Patient-Generating Powerhouses with SEO, HIPAA-Compliant ERP, Online Appointments, and Secure Design.
            </p>
            <button 
              onClick={scrollToContact}
              className="btn-accent inline-flex items-center gap-2 group"
            >
              Book Free Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            {/* Stats Counters */}
            <div id="hero" className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center animate-counter">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {counters.experience}+
                </div>
                <div className="text-sm text-muted-foreground mt-2">Years Experience</div>
              </div>
              <div className="text-center animate-counter" style={{ animationDelay: "0.1s" }}>
                <div className="text-4xl md:text-5xl font-bold text-secondary">
                  {counters.projects}+
                </div>
                <div className="text-sm text-muted-foreground mt-2">Projects Complete</div>
              </div>
              <div className="text-center animate-counter" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl md:text-5xl font-bold text-accent">
                  {counters.satisfaction}%
                </div>
                <div className="text-sm text-muted-foreground mt-2">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={heroImage} 
                alt="Tariq Malik - Healthcare Technology Developer" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
