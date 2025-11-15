import { Code2, Palette, TrendingUp, Stethoscope, ShieldCheck, CalendarCheck, Mail, Phone, Heart, Zap, Target } from "lucide-react";

const About = () => {
  const focusAreas = [
    { 
      icon: Palette, 
      title: "Branding & Design", 
      description: "Professional healthcare branding that builds trust",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    { 
      icon: TrendingUp, 
      title: "Digital Marketing", 
      description: "Growth-focused marketing strategies for healthcare",
      color: "from-teal-500 to-emerald-600",
      bgColor: "bg-teal-50 dark:bg-teal-900/20"
    },
    { 
      icon: TrendingUp, 
      title: "SEO & Local SEO", 
      description: "Rank higher and attract more patients online",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    { 
      icon: Code2, 
      title: "Web Development", 
      description: "Custom healthcare websites and applications",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20"
    },
    { 
      icon: Stethoscope, 
      title: "Healthcare Web Design", 
      description: "Patient-focused designs that convert",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20"
    },
    { 
      icon: ShieldCheck, 
      title: "HIPAA-Compliant Systems", 
      description: "Secure, compliant healthcare solutions",
      color: "from-green-500 to-lime-600",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    { 
      icon: CalendarCheck, 
      title: "Online Appointment & Billing", 
      description: "Streamlined patient management systems",
      color: "from-sky-500 to-cyan-600",
      bgColor: "bg-sky-50 dark:bg-sky-900/20"
    },
  ];

  const stats = [
    { number: "13+", label: "Years Experience", color: "from-blue-500 to-cyan-600" },
    { number: "50+", label: "Healthcare Projects", color: "from-teal-500 to-emerald-600" },
    { number: "100%", label: "HIPAA Compliance", color: "from-green-500 to-lime-600" },
    { number: "24/7", label: "Support Available", color: "from-purple-500 to-indigo-600" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Heart size={16} />
            About My Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
            Healthcare Technology Specialist
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transforming healthcare practices through secure, compliant, and patient-focused digital solutions 
            that drive growth and improve patient care.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                My Mission in Healthcare Technology
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                I'm a <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack Developer</span> with{" "}
                <span className="font-semibold text-teal-600 dark:text-teal-400">13+ years of experience</span> specializing in creating{" "}
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">SEO-optimized, HIPAA-compliant healthcare solutions</span>. 
                From custom ERP systems to patient appointment platforms, I help healthcare businesses scale securely and efficiently.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                My focus is on building technology that not only meets compliance standards but also enhances 
                patient experience and streamlines healthcare operations.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
                >
                  <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Focus Areas */}
          <div className="grid md:grid-cols-2 gap-4">
            {focusAreas.map((area, index) => (
              <div 
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-cyan-500 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${area.color} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                      {area.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Healthcare Values */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Healthcare-Focused Development Approach
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Every solution is built with patient safety, data security, and regulatory compliance as top priorities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">HIPAA Compliant</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                All solutions built with healthcare compliance and data security as foundation
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-3 rounded-xl bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mb-4">
                <Target size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Patient-First</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Designs and systems focused on enhancing patient experience and care
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-3 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 mb-4">
                <Zap size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Future-Ready</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Scalable solutions that grow with your practice and adapt to new technologies
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to Transform Your Healthcare Practice?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's discuss how technology can improve patient care and grow your practice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
                Send Email
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-lg font-semibold transition-all duration-300"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;