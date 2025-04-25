
import React from "react";
import { LucideIcon } from "lucide-react";

interface Activity {
  title: string;
  description: string;
  icon: React.ReactNode;
  gardenParallel: string;
}

interface MaintenanceActivitiesProps {
  activities: Activity[];
  color: string;
}

const MaintenanceActivities = ({ activities, color }: MaintenanceActivitiesProps) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-6">Key Activities:</h3>
      <div className="grid md:grid-cols-3 gap-6 pl-6">
        {activities.map((activity, index) => (
          <div 
            key={index}
            className="garden-card h-full"
          >
            <div className="flex items-center mb-3">
              <div className={`text-${color} mr-3`}>{activity.icon}</div>
              <h4 className="text-lg font-bold">{activity.title}</h4>
            </div>
            <p className="text-gray-600 mb-4">{activity.description}</p>
            <div className="mt-auto pt-3 border-t border-gray-100">
              <p className="text-sm italic">
                <span className="font-medium text-garden-green-dark">Garden Parallel:</span> {activity.gardenParallel}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenanceActivities;
