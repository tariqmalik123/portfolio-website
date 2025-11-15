// src/pages/Portfolio.tsx
import { useState } from "react";
import PortfolioModal from "@/components/PortfolioModal";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import CartlowImage from "@/assets/portfolio/cartlow.png";
import VitalsImage from "@/assets/portfolio/e-vitals.png";
import BioMedImage from "@/assets/portfolio/mr-bio-med.png";

export const projects = [
  {
    id: 1,
    title: "Cartlow",
    img: CartlowImage,
    shortDesc: "High-Performance E-commerce Solution for Reverse Logistics",
    description: "Developed a robust, scalable e-commerce platform specifically tailored for reverse logistics (refurbished goods). Focused on building a seamless user experience while optimizing for high traffic, fast load times, and complex inventory management. **Key contribution areas include API integration and front-end performance tuning.**",
    features: [
      "End-to-end **Product Lifecycle Management** (New, Open-Box, Refurbished)",
      "Secure and efficient **Order Processing & Fulfillment** workflows",
      "Multiple **Payment Gateway Integrations** (e.g., Stripe, PayPal, local payment methods)",
      "Real-time **Inventory and Stock Management** across various grades",
      "Customizable **Analytics Dashboard** for sales and operational insights",
      "Optimized site performance using **modern web technologies** (e.g., React/Vue, Next.js/Nuxt.js)",
    ],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "AWS"],
    category: "E-commerce",
    githubLink: "#",
    liveLink: "#"
  },
  {
    id: 2,
    title: "E-Vitals (Remote Patient Monitoring Platform)",
    img: VitalsImage,
    shortDesc: "HIPAA-Compliant Remote Patient Monitoring (RPM) Platform",
    description: "Designed and implemented a secure, scalable Remote Patient Monitoring (RPM) platform. This system facilitates real-time tracking of patient vitals, significantly enhancing the quality of care and ensuring high patient compliance. The architecture is built with strict adherence to **HIPAA/HITECH compliance standards** to safeguard sensitive patient data.",
    features: [
      "Secure **Patient Monitoring System** with real-time data aggregation (Blood Pressure, Glucose, Weight, etc.)",
      "**HIPAA-Compliant Architecture** and data encryption for patient privacy",
      "Automated and manual **Appointment Scheduling** for virtual consultations",
      "Comprehensive **Analytics Dashboard** for clinicians to monitor trends and risk scores",
      "Interactive **Patient Education Modules** on device usage and adherence",
      "Managed workflow for **Device Troubleshooting and Replacement**",
      "Generation of detailed, monthly **Individual Patient Reports** for clinicians",
      "Streamlined **Monthly Billing and Coding** (CPT codes) for insurance claims",
    ],
    technologies: ["React", "Python", "PostgreSQL", "Docker", "HIPAA Compliance"],
    category: "Healthcare",
    githubLink: "#",
    liveLink: "#"
  },
  {
    id: 3,
    title: "MR BioMed (Medical Asset Management)",
    img: BioMedImage,
    shortDesc: "Cloud-Based Medical Equipment and Asset Management System",
    description: "Developed a robust system for a healthcare company specializing in medical equipment management. The platform offers hospitals a cloud-based solution for tracking assets, scheduling maintenance, and ensuring compliance, moving their operations from manual tracking to a highly efficient digital system. **This directly contributes to patient safety and operational cost reduction for hospitals.**",
    features: [
      "Digital tracking for **Biomedical Inspection** schedules and history",
      "Workflow management for **Equipment Sale, Refurbishing, and Calibration** services",
      "Detailed tracking and logging of **Repairs and Corrective Maintenance**",
      "Management of active **Service Contracts and Warranties** for hospital equipment",
      "Intuitive system for **Work Order Creation, Assignment, and Real-time Tracking**",
      "Cloud-based asset registry with location and utilization tracking.",
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS", "REST APIs"],
    category: "Healthcare",
    githubLink: "#",
    liveLink: "#"
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "E-commerce", "Healthcare", "Full Stack"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A collection of projects showcasing my expertise in full-stack development, 
            with a focus on scalable solutions and exceptional user experiences.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 dark:text-gray-200">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-center text-white p-4">
                    <ArrowRight size={32} className="mx-auto mb-2 transform group-hover:translate-x-1 transition-transform" />
                    <p className="font-semibold">View Project Details</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.shortDesc}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100 dark:border-gray-600">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
                Get In Touch
              </button>
              <button className="px-8 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg font-semibold transition-all duration-300">
                Download Resume
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedProject && (
          <PortfolioModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={selectedProject}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;