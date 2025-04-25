
import React from "react";
import MaintenanceActivities from "./MaintenanceActivities";

interface MaintenanceTypeDetailProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gardenAnalogy: string;
  activities: {
    title: string;
    description: string;
    icon: React.ReactNode;
    gardenParallel: string;
  }[];
}

const MaintenanceTypeDetail = ({
  id,
  title,
  description,
  icon,
  color,
  gardenAnalogy,
  activities,
}: MaintenanceTypeDetailProps) => {
  return (
    <div id={id} className="mb-20 scroll-mt-20">
      <div className={`border-l-4 border-${color} pl-6`}>
        <div className="flex items-center">
          <div className={`text-${color} mr-3`}>{icon}</div>
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        <p className="text-lg my-4">{description}</p>
        <div className="bg-garden-green-light bg-opacity-10 p-6 rounded-md my-6">
          <p className="text-lg italic">
            <span className="font-bold text-garden-green-dark">Garden Analogy:</span> {gardenAnalogy}
          </p>
        </div>
      </div>
      <MaintenanceActivities activities={activities} color={color} />
    </div>
  );
};

export default MaintenanceTypeDetail;
