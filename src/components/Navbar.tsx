import { useState, useEffect } from "react";
import { Menu, X, Stethoscope, Heart, Phone } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "experience", "services", "portfolio", "skills", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "home", icon: <Heart size={16} /> },
    { name: "About", id: "about", icon: <Stethoscope size={16} /> },
    { name: "Experience", id: "experience", icon: <Heart size={16} /> },
    { name: "Services", id: "services", icon: <Stethoscope size={16} /> },
    { name: "Portfolio", id: "portfolio", icon: <Heart size={16} /> },
    { name: "Skills", id: "skills", icon: <Stethoscope size={16} /> },
    { name: "Contact", id: "contact", icon: <Phone size={16} /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 shadow-lg" 
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <Stethoscope className="text-white" size={20} />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
            </div>
            <div className="text-left">
              <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Tariq Malik
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                Healthcare Tech
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative flex items-center gap-2 px-4 py-2 font-medium transition-all duration-300 group rounded-lg ${
                  activeSection === link.id
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                }`}
              >
                <span className={`transition-colors duration-300 ${
                  activeSection === link.id ? "text-blue-500" : "text-gray-400 group-hover:text-blue-400"
                }`}>
                  {link.icon}
                </span>
                <span>{link.name}</span>
                
                {/* Active indicator */}
                {activeSection === link.id && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
                )}
              </button>
            ))}
            
            {/* CTA Button */}
            <button 
              onClick={() => scrollToSection("contact")}
              className="ml-4 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              <Phone size={16} />
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative p-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl mb-4">
            <div className="flex flex-col space-y-2 px-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`flex items-center gap-3 py-3 px-4 rounded-xl font-medium transition-all duration-300 text-left ${
                    activeSection === link.id
                      ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  <span className={`transition-colors duration-300 ${
                    activeSection === link.id ? "text-blue-500" : "text-gray-400"
                  }`}>
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                </button>
              ))}
              
              {/* Mobile CTA */}
              <button 
                onClick={() => scrollToSection("contact")}
                className="mt-4 flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
              >
                <Phone size={16} />
                Schedule Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;