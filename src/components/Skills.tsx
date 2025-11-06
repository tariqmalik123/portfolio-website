import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "Laravel", level: 95, color: "bg-primary" },
    { name: "React.js", level: 92, color: "bg-accent" },
    { name: "Node.js", level: 85, color: "bg-secondary" },
    { name: "Python", level: 80, color: "bg-primary" },
    { name: "Next.js", level: 88, color: "bg-accent" },
    { name: "SEO & Local SEO", level: 90, color: "bg-secondary" },
    { name: "Digital Marketing", level: 87, color: "bg-primary" },
    { name: "Figma", level: 93, color: "bg-accent" },
    { name: "Adobe Photoshop", level: 85, color: "bg-secondary" },
    { name: "AI Tools & Automation", level: 78, color: "bg-primary" },
    { name: "Healthcare ERP Systems", level: 89, color: "bg-accent" },
    { name: "Appointment & Billing Platforms", level: 91, color: "bg-secondary" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) observer.observe(skillsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Explore <span className="gradient-text">Popular Skills & Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">
              A comprehensive skill set built through years of hands-on development and successful project delivery
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="font-bold text-primary">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.05}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="card-healthcare text-center animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Technologies Mastered</div>
            </div>
            <div className="card-healthcare text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-secondary mb-2">13+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="card-healthcare text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
