import { Stethoscope, TrendingUp, Megaphone, ShieldCheck, CalendarCheck, Brain, Code, Package } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Healthcare Web Design",
      description: "Professional, patient-focused websites that build trust and drive conversions"
    },
    {
      icon: TrendingUp,
      title: "SEO & Local SEO",
      description: "Rank higher on Google and attract more patients through proven SEO strategies"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing campaigns to grow your healthcare practice"
    },
    {
      icon: ShieldCheck,
      title: "HIPAA-Compliant ERP Systems",
      description: "Secure, compliant enterprise resource planning tailored for healthcare"
    },
    {
      icon: CalendarCheck,
      title: "Online Appointments & Billing",
      description: "Streamlined booking and payment systems that enhance patient experience"
    },
    {
      icon: Brain,
      title: "AI-Based Patient Monitoring",
      description: "Intelligent monitoring solutions using cutting-edge AI technology"
    },
    {
      icon: Code,
      title: "Custom Healthcare Software",
      description: "Tailored software solutions designed for your specific healthcare needs"
    },
    {
      icon: Package,
      title: "HIPAA-Compliant SaaS Development",
      description: "Build secure, scalable SaaS products for the healthcare industry"
    }
  ];

  return (
    <section id="services" className="section-padding bg-card">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My Healthcare Technology Solutions <span className="gradient-text">for Your Growth</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">
              Comprehensive services designed to transform your healthcare business through technology, security, and digital excellence
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="card-healthcare group animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                    <service.icon className="text-primary" size={32} strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center animate-fade-in">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to transform your healthcare business?
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="btn-primary"
            >
              Let's Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
