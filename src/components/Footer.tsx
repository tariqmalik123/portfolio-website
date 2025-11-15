import { Linkedin, Github, Mail, Heart, ArrowUp, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/tariqmalik", 
      label: "LinkedIn",
      color: "hover:bg-blue-500 hover:border-blue-500",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-400"
    },
    { 
      icon: Github, 
      href: "https://github.com/tariqmalik", 
      label: "GitHub",
      color: "hover:bg-gray-800 hover:border-gray-800",
      bgColor: "bg-gray-500/10",
      iconColor: "text-gray-400"
    },
    { 
      icon: Mail, 
      href: "mailto:hello@tariqmalik.com", 
      label: "Email",
      color: "hover:bg-red-500 hover:border-red-500",
      bgColor: "bg-red-500/10",
      iconColor: "text-red-400"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900/50 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 border-b border-gray-700/50">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TM</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Tariq Malik
                  </h3>
                  <p className="text-gray-400 text-sm">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md mb-6">
                Crafting digital experiences with clean code and innovative solutions. 
                Let's build something amazing together.
              </p>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span className="text-sm">Available Worldwide</span>
                </div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span className="text-sm">Remote Work</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Section */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-white">Let's Connect</h4>
              <p className="text-gray-300 mb-6">
                Ready to start your next project? Reach out and let's discuss how we can work together.
              </p>
              <a 
                href="mailto:hello@tariqmalik.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                <Mail size={18} />
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Tariq Malik. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Made with 
                <Heart size={14} className="text-red-400 fill-red-400 animate-pulse" />
                and passion
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`group p-3 rounded-xl border border-gray-700 ${social.bgColor} ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                >
                  <social.icon 
                    size={20} 
                    className={`${social.iconColor} group-hover:text-white transition-colors`} 
                  />
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-700"
              aria-label="Back to top"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </footer>
  );
};

export default Footer;