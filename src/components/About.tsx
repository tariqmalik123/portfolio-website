import { Code2, Palette, TrendingUp, Stethoscope, ShieldCheck, CalendarCheck, Mail, Phone } from "lucide-react";

const About = () => {
  const focusAreas = [
    { icon: Palette, title: "Branding & Design", color: "text-primary" },
    { icon: TrendingUp, title: "Digital Marketing", color: "text-secondary" },
    { icon: TrendingUp, title: "SEO & Local SEO", color: "text-accent" },
    { icon: Code2, title: "Web Development", color: "text-primary" },
    { icon: Stethoscope, title: "Healthcare Web Design", color: "text-secondary" },
    { icon: ShieldCheck, title: "HIPAA-Compliant ERP Systems", color: "text-accent" },
    { icon: CalendarCheck, title: "Online Appointment & Billing", color: "text-primary" },
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Turning Complex Ideas into <span className="gradient-text">Simple, Scalable Products</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6"></div>
          </div>

          {/* About Content */}
          <div className="space-y-12">
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                I'm a <span className="text-primary font-semibold">Full Stack Developer</span> with <span className="text-primary font-semibold">13+ years of experience</span> specializing in creating <span className="font-semibold">SEO-optimized, HIPAA-compliant healthcare solutions</span> that drive real business growth. From custom ERP systems to patient appointment platforms, I help healthcare businesses scale securely and efficiently.
              </p>
            </div>

            {/* Key Focus Areas Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {focusAreas.map((area, index) => (
                <div 
                  key={index}
                  className="card-healthcare animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${area.color} mt-1`}>
                      <area.icon size={28} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{area.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="card-healthcare animate-slide-in-left">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <a href="mailto:support@gmail.com" className="font-semibold hover:text-primary transition-colors">
                      support@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-healthcare animate-slide-in-right">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Phone className="text-secondary" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Call</div>
                    <a href="tel:+8801234568" className="font-semibold hover:text-secondary transition-colors">
                      +880 (123) 456 88
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
