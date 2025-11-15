import { Mail, Phone, MapPin, MessageCircle, Calendar, Zap } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "hello@example.com",
      link: "mailto:hello@example.com",
      description: "Send me a detailed message",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      hoverColor: "hover:from-blue-600 hover:to-cyan-700"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      description: "Let's have a quick chat",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      hoverColor: "hover:from-green-600 hover:to-emerald-700"
    },
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp",
      value: "+1 (555) 123-4567",
      link: "https://wa.me/15551234567",
      description: "Instant messaging",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      hoverColor: "hover:from-green-500 hover:to-green-700"
    },
    {
      icon: <Calendar size={24} />,
      title: "Meeting",
      value: "Schedule a call",
      link: "#",
      description: "Book a consultation",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      hoverColor: "hover:from-purple-600 hover:to-indigo-700"
    }
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Zap size={16} />
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss how we can work together 
            to create something amazing.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className="group relative bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/80 dark:border-gray-700/80 hover:border-transparent backdrop-blur-sm transform hover:-translate-y-2"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${method.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`p-3 rounded-xl ${method.bgColor} text-gray-700 dark:text-gray-200 group-hover:text-white transition-colors duration-300 inline-flex mb-4`}>
                  {method.icon}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white group-hover:text-white transition-colors duration-300 mb-2">
                  {method.title}
                </h3>

                {/* Value */}
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-white/90 transition-colors duration-300 font-medium mb-2">
                  {method.value}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white/70 transition-colors duration-300">
                  {method.description}
                </p>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center`}>
                    <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent transform group-hover:translate-x-0.5 transition-transform"></div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Info & CTA */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-gray-800/80 dark:to-gray-700/80 rounded-3xl p-12 border border-blue-200/50 dark:border-gray-600/50 backdrop-blur-sm relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <MapPin className="text-blue-500" size={24} />
                <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  Available for Remote Work Worldwide
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Let's Build Something Extraordinary Together
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you have a project in mind, need technical consultation, or just want to explore potential collaborations, 
                I'm here to help bring your vision to life.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:hello@example.com"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-3"
                >
                  <Mail size={20} />
                  Send Me an Email
                </a>
                <a
                  href="#"
                  className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm flex items-center gap-3"
                >
                  <Calendar size={20} />
                  Schedule a Call
                </a>
              </div>

              {/* Response Time */}
              <div className="mt-8 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-600 backdrop-blur-sm inline-flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  Typically respond within 2-4 hours
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <p className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider font-semibold mb-4">
            Trusted by teams worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-bold text-gray-400 dark:text-gray-500">✓ 100+ Projects</div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="text-lg font-bold text-gray-400 dark:text-gray-500">✓ 50+ Clients</div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="text-lg font-bold text-gray-400 dark:text-gray-500">✓ 13+ Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;