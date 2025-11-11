import { Mail, Phone, MapPin } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={contactBg}
          alt="Contact Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Section Header */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities. Reach out through any of the channels below.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4"></div>
          </div>

          {/* Contact Details */}
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
            {/* Email */}
            <div className="flex flex-col items-center gap-4 p-6 rounded-lg shadow-md bg-background hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-4 rounded-full">
                <Mail className="text-primary" size={28} />
              </div>
              <h4 className="text-xl font-semibold">Email</h4>
              <a
                href="mailto:support@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                support@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center gap-4 p-6 rounded-lg shadow-md bg-background hover:shadow-lg transition-shadow">
              <div className="bg-secondary/10 p-4 rounded-full">
                <Phone className="text-secondary" size={28} />
              </div>
              <h4 className="text-xl font-semibold">Phone</h4>
              <a
                href="tel:+8801234568"
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                +880 (123) 456 88
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center gap-4 p-6 rounded-lg shadow-md bg-background hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 p-4 rounded-full">
                <MapPin className="text-accent" size={28} />
              </div>
              <h4 className="text-xl font-semibold">Location</h4>
              <p className="text-muted-foreground">
                Available for Remote Work Worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
