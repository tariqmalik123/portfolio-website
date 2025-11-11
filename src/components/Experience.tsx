import { Briefcase, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      period: "Aug 2023 – Present",
      title: "Lead Full Stack Developer",
      company: "Meta IT – Evitals",
      location: "USA, Remote",
      description: "Leading healthcare platform development with focus on HIPAA compliance and scalable architecture"
    },
    {
      period: "Oct 2021 – Jul 2023",
      title: "Full Stack Developer",
      company: "Cartlow",
      location: "UAE, Dubai",
      description: "Built e-commerce solutions with modern tech stack and optimized performance"
    },
    {
      period: "Jun 2021 – Oct 2022",
      title: "Full Stack Web Developer",
      company: "Source Code",
      location: "UK",
      description: "Developed custom web applications with focus on user experience and SEO"
    },
    {
      period: "Jan 2020 – May 2021",
      title: "Software Engineer & Product Developer",
      company: "MR Bio Med",
      location: "USA (Remote)",
      description: "Created healthcare management systems with advanced features and secure data handling"
    },
    {
      period: "2018 – 2020",
      title: "Full Stack Developer & Digital Strategist",
      company: "Freelance / Remote Projects",
      location: "Remote",
      description: "Delivered diverse projects including SEO optimization, digital marketing, and custom development"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Delivering Real Solutions Through <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-secondary"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative animate-fade-in ${
                    index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className={`hidden md:block absolute top-0 ${
                    index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
                  }`}>
                    <div className="w-4 h-4 rounded-full bg-accent border-4 border-background"></div>
                  </div>

                  <div 
                    className="relative group overflow-hidden bg-card rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card) / 0.95) 100%)',
                      boxShadow: 'var(--shadow-card)',
                      border: '1px solid hsl(var(--border) / 0.5)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = 'var(--shadow-navbar)';
                      e.currentTarget.style.borderColor = 'hsl(var(--accent) / 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                      e.currentTarget.style.borderColor = 'hsl(var(--border) / 0.5)';
                    }}
                  >
                    {/* Gradient Background Effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at top right, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.05), transparent 70%)',
                      }}
                    ></div>
                    
                    {/* Animated Border Glow */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.2), hsl(var(--secondary) / 0.2))',
                        filter: 'blur(20px)',
                        transform: 'scale(0.95)',
                      }}
                    ></div>

                    <div className="relative z-10 flex items-start gap-4 md:gap-0 md:block">
                      <div className="hidden md:block mb-3">
                        <div 
                          className={`inline-flex p-3 rounded-lg transition-all duration-300 group-hover:scale-110 ${
                            index % 2 === 0 ? "ml-auto" : ""
                          }`}
                          style={{
                            background: 'linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.1))',
                            boxShadow: '0 4px 12px hsl(var(--primary) / 0.2)',
                          }}
                        >
                          <Briefcase className="text-primary group-hover:animate-pulse" size={24} />
                        </div>
                      </div>
                      
                      <div className="md:hidden">
                        <div 
                          className="inline-flex p-3 rounded-lg transition-all duration-300 group-hover:scale-110"
                          style={{
                            background: 'linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.1))',
                            boxShadow: '0 4px 12px hsl(var(--primary) / 0.2)',
                          }}
                        >
                          <Briefcase className="text-primary group-hover:animate-pulse flex-shrink-0" size={24} />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div 
                          className="inline-block text-sm font-semibold mb-2 px-3 py-1 rounded-full transition-all duration-300"
                          style={{
                            background: 'var(--gradient-primary)',
                            color: 'white',
                            boxShadow: '0 2px 8px hsl(var(--primary) / 0.3)',
                          }}
                        >
                          {exp.period}
                        </div>
                        <h3 className="text-xl font-bold mb-1 group-hover:gradient-text transition-all duration-300">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-3 justify-start md:justify-end">
                          <span className="font-semibold group-hover:text-accent transition-colors duration-300">{exp.company}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} className="group-hover:text-accent transition-colors duration-300" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
