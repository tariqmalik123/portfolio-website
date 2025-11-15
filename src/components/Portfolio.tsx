// src/pages/Portfolio.tsx
import { useState } from "react";
import PortfolioModal from "@/components/PortfolioModal";
import CartlowImage from "@/assets/portfolio/cartlow.png";
import VitalsImage from "@/assets/portfolio/e-vitals.png";
import BioMedImage from "@/assets/portfolio/mr-bio-med.png";

export const projects = [
  {
    id: 1,
    title: "Cartlow",
    img: {CartlowImage},
    shortDesc: "High-Performance E-commerce Solution for Reverse Logistics.",
    description: "Developed a robust, scalable e-commerce platform specifically tailored for reverse logistics (refurbished goods). Focused on building a seamless user experience while optimizing for high traffic, fast load times, and complex inventory management. **Key contribution areas include API integration and front-end performance tuning.**",
    features: [
      "End-to-end **Product Lifecycle Management** (New, Open-Box, Refurbished)",
      "Secure and efficient **Order Processing & Fulfillment** workflows",
      "Multiple **Payment Gateway Integrations** (e.g., Stripe, PayPal, local payment methods)",
      "Real-time **Inventory and Stock Management** across various grades",
      "Customizable **Analytics Dashboard** for sales and operational insights",
      "Optimized site performance using **modern web technologies** (e.g., React/Vue, Next.js/Nuxt.js)",
    ],
  },
  {
    id: 2,
    title: "E-Vitals (Remote Patient Monitoring Platform)",
    img: {VitalsImage},
    shortDesc: "HIPAA-Compliant Remote Patient Monitoring (RPM) Platform.",
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
  },
  {
    id: 3,
    title: "MR BioMed (Medical Asset Management)",
    img: {BioMedImage},
    shortDesc: "Cloud-Based Medical Equipment and Asset Management System.",
    description: "Developed a robust system for a healthcare company specializing in medical equipment management. The platform offers hospitals a cloud-based solution for tracking assets, scheduling maintenance, and ensuring compliance, moving their operations from manual tracking to a highly efficient digital system. **This directly contributes to patient safety and operational cost reduction for hospitals.**",
    features: [
      "Digital tracking for **Biomedical Inspection** schedules and history",
      "Workflow management for **Equipment Sale, Refurbishing, and Calibration** services",
      "Detailed tracking and logging of **Repairs and Corrective Maintenance**",
      "Management of active **Service Contracts and Warranties** for hospital equipment",
      "Intuitive system for **Work Order Creation, Assignment, and Real-time Tracking**",
      "Cloud-based asset registry with location and utilization tracking.",
    ],
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="portfolio" className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Projects <span className="gradient-text">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.img} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{project.shortDesc}</p>
              </div>
            </div>
          ))}
        </div>

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
