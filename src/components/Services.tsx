import { Stethoscope, TrendingUp, Megaphone, ShieldCheck, CalendarCheck, Brain, Code, Package, Heart, ArrowRight, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Healthcare Web Design",
      description: "Professional, patient-focused websites that build trust and drive conversions for medical practices",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      features: ["Patient-Centric Design", "Medical Branding", "Mobile Responsive"]
    },
    {
      icon: TrendingUp,
      title: "SEO & Local SEO",
      description: "Rank higher on Google and attract more patients through proven healthcare SEO strategies",
      color: "from-teal-500 to-emerald-600",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      features: ["Local Listings", "Medical Keywords", "Review Management"]
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing campaigns to grow your healthcare practice online",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      features: ["Social Media", "Content Marketing", "PPC Campaigns"]
    },
    {
      icon: ShieldCheck,
      title: "HIPAA-Compliant ERP Systems",
      description: "Secure, compliant enterprise resource planning tailored for healthcare organizations",
      color: "from-green-500 to-lime-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      features: ["Data Encryption", "Audit Trails", "Access Controls"]
    },
    {
      icon: CalendarCheck,
      title: "Online Appointments & Billing",
      description: "Streamlined booking and payment systems that enhance patient experience",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      features: ["Online Scheduling", "Payment Processing", "Reminder Systems"]
    },
    {
      icon: Brain,
      title: "AI-Based Patient Monitoring",
      description: "Intelligent monitoring solutions using cutting-edge AI technology for better care",
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-50 dark:bg-violet-900/20",
      features: ["Predictive Analytics", "Remote Monitoring", "Health Insights"]
    },
    {
      icon: Code,
      title: "Custom Healthcare Software",
      description: "Tailored software solutions designed for your specific healthcare needs and workflows",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      features: ["Custom Workflows", "Integration Ready", "Scalable Architecture"]
    },
    {
      icon: Package,
      title: "HIPAA-Compliant SaaS Development",
      description: "Build secure, scalable SaaS products for the healthcare industry with full compliance",
      color: "from-sky-500 to-cyan-600",
      bgColor: "bg-sky-50 dark:bg-sky-900/20",
      features: ["Cloud Hosting", "Multi-tenant", "API Development"]
    }
  ];

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
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Heart size={16} />
            Healthcare Solutions
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
            Healthcare Technology Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare technology solutions designed to transform medical practices 
            through secure, compliant, and patient-focused digital experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/80 dark:border-gray-700/80 hover:border-blue-300 dark:hover:border-cyan-500 backdrop-blur-sm transform hover:-translate-y-2"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`p-3 rounded-xl ${service.bgColor} text-gray-700 dark:text-gray-200 group-hover:text-white transition-colors duration-300 inline-flex mb-4`}>
                <service.icon size={28} />
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <ArrowRight size={16} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Healthcare Focus Section */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8 md:p-12 border border-blue-200 dark:border-blue-800 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                <Zap size={16} />
                Why Healthcare Technology?
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Building the Future of Healthcare
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                With over 13 years of experience in healthcare technology, I understand the unique challenges 
                and compliance requirements of the medical industry. Every solution is built with patient safety, 
                data security, and regulatory compliance as top priorities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-green-500" size={20} />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="text-red-500" size={20} />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Patient-First</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-blue-500" size={20} />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Growth Focused</span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="text-purple-500" size={20} />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">AI Powered</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 text-center border border-blue-100 dark:border-blue-800">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Healthcare Projects</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 text-center border border-blue-100 dark:border-blue-800">
                <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">HIPAA Compliance</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 text-center border border-blue-100 dark:border-blue-800">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">13+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 text-center border border-blue-100 dark:border-blue-800">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to Transform Your Healthcare Practice?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's discuss how technology can improve patient care, streamline operations, and grow your practice
            </p>
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
            >
              <CalendarCheck size={20} />
              Schedule Free Consultation
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;