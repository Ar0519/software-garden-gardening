
import React from "react";
import { LucideIcon } from "lucide-react";

interface MaintenanceTypeCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gardenAnalogy: string;
}

const MaintenanceTypeCard = ({
  id,
  title,
  description,
  icon,
  color,
  gardenAnalogy,
}: MaintenanceTypeCardProps) => {
  return (
    <a 
      href={`#${id}`}
      className={`p-6 rounded-lg text-black bg-gradient-to-r hover:shadow-lg transition-all duration-300 from-${color} to-${color}/70`}
    >
      <div className="flex items-center mb-4">
        <div className="mr-3 bg-white/20 p-2 rounded-full">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="mb-3 text-gray-800">{description}</p>
      <div className="text-sm font-medium text-gray-700">
        <span className="font-bold">Garden Parallel:</span> {gardenAnalogy}
      </div>
    </a>
  );
};

export default MaintenanceTypeCard;
