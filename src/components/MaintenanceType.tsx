
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface MaintenanceTypeProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gardenAnalogy: string;
  borderColor: string;
  detailLink: string;
}

const MaintenanceType = ({
  title,
  description,
  icon,
  gardenAnalogy,
  borderColor,
  detailLink,
}: MaintenanceTypeProps) => {
  // Map string color names to proper Tailwind classes
  const getBorderColorClass = (color: string) => {
    switch (color) {
      case "red-500": return "border-red-500";
      case "blue-500": return "border-blue-500";
      case "purple-500": return "border-purple-500";
      case "green-500": return "border-green-500";
      default: return "border-garden-green-mid";
    }
  };
  
  // Map string color names to text color classes
  const getTextColorClass = (color: string) => {
    switch (color) {
      case "red-500": return "text-red-500";
      case "blue-500": return "text-blue-500";
      case "purple-500": return "text-purple-500";
      case "green-500": return "text-green-500";
      default: return "text-garden-green-dark";
    }
  };

  return (
    <div
      className={cn(
        "maintenance-card h-full flex flex-col",
        getBorderColorClass(borderColor)
      )}
    >
      <div className="flex items-center mb-4">
        <div className={cn(getTextColorClass(borderColor), "mr-3")}>{icon}</div>
        <h3 className="text-xl font-serif font-bold">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-3">{description}</p>
      
      <div className="bg-garden-green-light bg-opacity-10 p-4 rounded-md my-2">
        <p className="text-sm italic font-medium">
          <span className="font-bold text-garden-green-dark">Garden Analogy:</span> {gardenAnalogy}
        </p>
      </div>
      
      <div className="mt-auto pt-4">
        <Link to={detailLink}>
          <Button variant="outline" className="w-full hover:bg-garden-green-light hover:text-garden-green-dark">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MaintenanceType;
