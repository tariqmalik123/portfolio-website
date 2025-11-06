import { Linkedin, Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Mail, href: "mailto:support@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Name */}
          <div className="text-2xl font-bold">
            Tariq Malik
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="bg-background/10 hover:bg-accent hover:text-accent-foreground p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-background/80 text-sm">
            <p className="flex items-center gap-2 justify-center">
              © 2025 Tariq Malik. All Rights Reserved. Made with 
              <Heart size={16} className="text-accent fill-accent" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
