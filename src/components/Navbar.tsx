import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Services", id: "services" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/70 dark:bg-card/70 backdrop-blur-xl" 
          : "bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-md"
      }`}
      style={{
        boxShadow: isScrolled ? 'var(--shadow-navbar)' : 'none',
        borderBottom: isScrolled ? '1px solid hsl(var(--border) / 0.5)' : 'none',
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => scrollToSection("home")}
            className="group relative flex items-center gap-2 text-2xl font-bold transition-all duration-300 hover:scale-105"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-secondary rounded-lg opacity-0 group-hover:opacity-20 blur transition-all duration-500"></div>
            <Sparkles className="relative w-6 h-6 text-accent animate-glow-pulse" />
            <span className="relative gradient-text">Tariq Malik</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative px-4 py-2 text-foreground/80 hover:text-primary font-medium transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                <span 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-300 group-hover:w-full"
                  style={{ boxShadow: 'var(--shadow-glow)' }}
                ></span>
              </button>
            ))}
            <button 
              onClick={() => scrollToSection("contact")}
              className="relative ml-4 px-8 py-3 font-semibold text-white rounded-lg overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: 'var(--gradient-navbar)',
                boxShadow: 'var(--shadow-glow)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-glow-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
              }}
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: isMobileMenuOpen ? 'var(--gradient-primary)' : 'transparent',
              borderRadius: '0.5rem',
              color: isMobileMenuOpen ? 'white' : undefined,
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden py-4 animate-slide-down"
            style={{
              background: 'linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--card) / 0.95) 100%)',
              borderRadius: '1rem',
              marginBottom: '1rem',
              boxShadow: 'var(--shadow-navbar)',
            }}
          >
            <div className="flex flex-col space-y-2 px-4">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="relative text-foreground/80 hover:text-primary font-medium transition-all duration-300 text-left py-3 px-4 rounded-lg group hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10"
                  style={{ 
                    animationDelay: `${index * 0.05}s`,
                    animation: 'fade-in 0.4s ease-out forwards',
                  }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-primary to-accent rounded-full transition-all duration-300 group-hover:h-full"></span>
                </button>
              ))}
              <button 
                onClick={() => scrollToSection("contact")}
                className="relative mt-4 px-8 py-3 font-semibold text-white rounded-lg text-center overflow-hidden group"
                style={{
                  background: 'var(--gradient-navbar)',
                  boxShadow: 'var(--shadow-glow)',
                  animation: 'scale-in 0.4s ease-out forwards',
                  animationDelay: '0.3s',
                }}
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-active:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
