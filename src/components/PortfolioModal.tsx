// src/components/PortfolioModal.tsx
import { X } from "lucide-react";

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
  };
}

const PortfolioModal = ({ isOpen, onClose, project }: PortfolioModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-card w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] rounded-xl shadow-xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-border">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <button onClick={onClose} className="p-1 hover:text-accent transition">
            <X size={24} />
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center p-4 border-b border-border">
          <img
            src={project.img}
            alt={project.title}
            className="max-w-full max-h-80 object-contain rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-4">
          <p className="text-muted-foreground">{project.description}</p>

          {project.features && (
            <div>
              <h4 className="font-semibold mb-2">Included Features:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.system && (
            <div>
              <h4 className="font-semibold mb-2">Asset Management System:</h4>
              <p className="text-muted-foreground">{project.system}</p>
            </div>
          )}

          {project.workOrder && (
            <div>
              <h4 className="font-semibold mb-2">Work Order Management:</h4>
              <p className="text-muted-foreground">{project.workOrder}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
