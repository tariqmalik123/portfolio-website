import { X, ExternalLink, Star } from "lucide-react";
import React from "react";

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    img: string;
    description: string;
    features: string[];
    system?: string;
    workOrder?: string;
    link?: string;
    technologies?: string[];
  };
}

const PortfolioModal = ({ isOpen, onClose, project }: PortfolioModalProps) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from { 
              opacity: 0;
              transform: translateY(20px) scale(0.95);
            }
            to { 
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
          
          .animate-slideUp {
            animation: slideUp 0.4s ease-out;
          }
          
          .portfolio-modal-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          
          .portfolio-modal-scrollbar::-webkit-scrollbar-track {
            background: #f1f5f9;
          }
          
          .portfolio-modal-scrollbar::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 3px;
          }
          
          .portfolio-modal-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
          }
          
          .dark .portfolio-modal-scrollbar::-webkit-scrollbar-track {
            background: #374151;
          }
          
          .dark .portfolio-modal-scrollbar::-webkit-scrollbar-thumb {
            background: #4b5563;
          }
          
          .dark .portfolio-modal-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #6b7280;
          }
        `}
      </style>

      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
        onClick={handleBackdropClick}
      >
        <div className="bg-white dark:bg-gray-900 w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700 transform transition-all duration-300 scale-100 animate-slideUp">
          
          {/* Enhanced Header */}
          <div className="flex justify-between items-center px-6 py-5 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Star className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                {project.technologies && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 text-xs bg-white/60 dark:bg-gray-600/60 rounded-full text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-500"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies && project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-white/60 dark:bg-gray-600/60 rounded-full text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-500">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 rounded-full hover:bg-white/70 dark:hover:bg-gray-600/70 transition-all duration-200 group"
            >
              <X size={24} className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white" />
            </button>
          </div>

          {/* Enhanced Image Section */}
          <div className="flex justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="w-full max-w-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl pointer-events-none"></div>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto max-h-80 object-cover rounded-xl shadow-lg mx-auto transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="overflow-y-auto px-6 py-6 space-y-6 bg-white dark:bg-gray-900 portfolio-modal-scrollbar">
            {/* Project Overview */}
            <div className="bg-gradient-to-r from-blue-50/50 to-transparent dark:from-gray-800/50 p-4 rounded-xl">
              <h4 className="font-semibold mb-3 text-lg text-gray-800 dark:text-white flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3 shadow-sm"></div>
                Project Overview
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="bg-gradient-to-r from-green-50/50 to-transparent dark:from-gray-800/50 p-4 rounded-xl">
                <h4 className="font-semibold mb-3 text-lg text-gray-800 dark:text-white flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-3 shadow-sm"></div>
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300 group">
                      <span className="text-green-500 mr-3 mt-1 transform group-hover:scale-110 transition-transform">✓</span>
                      <span className="group-hover:text-gray-800 dark:group-hover:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Asset Management System */}
            {project.system && (
              <div className="bg-gradient-to-r from-purple-50/50 to-transparent dark:from-gray-800/50 p-4 rounded-xl">
                <h4 className="font-semibold mb-3 text-lg text-gray-800 dark:text-white flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mr-3 shadow-sm"></div>
                  Asset Management System
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500 shadow-sm">
                  {project.system}
                </p>
              </div>
            )}

            {/* Work Order Management */}
            {project.workOrder && (
              <div className="bg-gradient-to-r from-amber-50/50 to-transparent dark:from-gray-800/50 p-4 rounded-xl">
                <h4 className="font-semibold mb-3 text-lg text-gray-800 dark:text-white flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mr-3 shadow-sm"></div>
                  Work Order Management
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-amber-500 shadow-sm">
                  {project.workOrder}
                </p>
              </div>
            )}

            {/* Project Link */}
            {project.link && (
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-center">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <ExternalLink size={18} />
                  View Live Project
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioModal;