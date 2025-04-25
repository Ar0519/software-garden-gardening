
import React from "react";
import { 
  CheckCircle, 
  Sprout, 
  Flower, 
  Shield, 
  Bug, 
  FileCode, 
  AlertTriangle, 
  Scissors, 
  CloudRain,
  Shovel,
  Palette,
  Zap,
  Lock,
  Scale
} from "lucide-react";

const MaintenanceTypes = () => {
  const maintenanceTypes = [
    {
      id: "corrective",
      title: "Corrective Maintenance",
      description: "Fixing bugs and errors in existing software to ensure it functions as intended.",
      icon: <CheckCircle size={28} />,
      color: "red-500",
      gardenAnalogy: "Weeding and removing pests",
      activities: [
        {
          title: "Bug Fixing",
          description: "Identifying and resolving errors in code.",
          icon: <Bug size={24} />,
          gardenParallel: "Removing harmful insects that damage plants."
        },
        {
          title: "Emergency Repairs",
          description: "Addressing critical failures that cause system downtime.",
          icon: <AlertTriangle size={24} />,
          gardenParallel: "Dealing with sudden plant diseases or infestations."
        },
        {
          title: "Code Cleanup",
          description: "Removing obsolete or redundant code that causes problems.",
          icon: <Scissors size={24} />,
          gardenParallel: "Pruning dead branches to improve plant health."
        }
      ]
    },
    {
      id: "adaptive",
      title: "Adaptive Maintenance",
      description: "Modifying software to function properly in a changing environment.",
      icon: <Sprout size={28} />,
      color: "blue-500",
      gardenAnalogy: "Changing soil composition for new climate conditions",
      activities: [
        {
          title: "Platform Updates",
          description: "Updating software to work with new operating systems or devices.",
          icon: <CloudRain size={24} />,
          gardenParallel: "Adapting watering schedules based on changing seasons."
        },
        {
          title: "API Changes",
          description: "Modifying code to work with updated external services.",
          icon: <FileCode size={24} />,
          gardenParallel: "Adjusting soil nutrients as neighboring plants change."
        },
        {
          title: "Technology Migrations",
          description: "Moving to new frameworks or languages as technologies evolve.",
          icon: <Shovel size={24} />,
          gardenParallel: "Transplanting plants to new areas as garden conditions change."
        }
      ]
    },
    {
      id: "perfective",
      title: "Perfective Maintenance",
      description: "Enhancing features and improving performance based on user needs.",
      icon: <Flower size={28} />,
      color: "purple-500",
      gardenAnalogy: "Adding flowers and features to improve garden beauty",
      activities: [
        {
          title: "UI Improvements",
          description: "Enhancing the user interface for better experience.",
          icon: <Palette size={24} />,
          gardenParallel: "Arranging flowers for better aesthetic appeal."
        },
        {
          title: "Performance Optimization",
          description: "Making software run faster and use fewer resources.",
          icon: <Zap size={24} />,
          gardenParallel: "Optimizing plant spacing for better growth and resource use."
        },
        {
          title: "New Features",
          description: "Adding capabilities based on user feedback and needs.",
          icon: <Flower size={24} />,
          gardenParallel: "Adding new plant varieties to enhance garden diversity."
        }
      ]
    },
    {
      id: "preventive",
      title: "Preventive Maintenance",
      description: "Making changes to prevent future problems before they occur.",
      icon: <Shield size={28} />,
      color: "green-500",
      gardenAnalogy: "Building fences and adding mulch to protect the garden",
      activities: [
        {
          title: "Code Refactoring",
          description: "Restructuring code for better maintainability without changing functionality.",
          icon: <FileCode size={24} />,
          gardenParallel: "Rearranging garden beds to prevent future overcrowding."
        },
        {
          title: "Security Updates",
          description: "Strengthening software against potential vulnerabilities.",
          icon: <Lock size={24} />,
          gardenParallel: "Installing fences to protect against future garden threats."
        },
        {
          title: "Technical Debt Reduction",
          description: "Addressing shortcuts taken during development that could cause future issues.",
          icon: <Scale size={24} />,
          gardenParallel: "Balancing soil pH to prevent long-term nutrient problems."
        }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-garden-green-mid text-white py-16">
        <div className="garden-container">
          <h1 className="text-center">Types of Software Maintenance</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Just as gardens require different types of care throughout the seasons, 
            software needs various forms of maintenance to stay healthy and functional.
          </p>
        </div>
      </section>

      {/* Maintenance Types Overview */}
      <section className="garden-section">
        <div className="garden-container">
          <div className="mb-16">
            <h2 className="text-center text-garden-green-dark mb-4">The Four Types of Maintenance</h2>
            <p className="text-center text-lg max-w-3xl mx-auto text-gray-600 mb-10">
              Through gardening metaphors, we can better understand the different 
              approaches to keeping software healthy and thriving.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {maintenanceTypes.map((type) => (
                <a 
                  key={type.id} 
                  href={`#${type.id}`}
                  className={`p-6 rounded-lg text-black bg-gradient-to-r hover:shadow-lg transition-all duration-300 from-${type.color} to-${type.color}/70`}
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-3 bg-white/20 p-2 rounded-full">{type.icon}</div>
                    <h3 className="text-xl font-bold">{type.title}</h3>
                  </div>
                  <p className="mb-3 text-gray-800">{type.description}</p>
                  <div className="text-sm font-medium text-gray-700">
                    <span className="font-bold">Garden Parallel:</span> {type.gardenAnalogy}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Detailed Maintenance Types */}
          {maintenanceTypes.map((type) => (
            <div 
              key={type.id} 
              id={type.id} 
              className="mb-20 scroll-mt-20"
            >
              <div className={`border-l-4 border-${type.color} pl-6`}>
                <div className="flex items-center">
                  <div className={`text-${type.color} mr-3`}>{type.icon}</div>
                  <h2 className="text-3xl font-bold">{type.title}</h2>
                </div>
                <p className="text-lg my-4">{type.description}</p>
                <div className="bg-garden-green-light bg-opacity-10 p-6 rounded-md my-6">
                  <p className="text-lg italic">
                    <span className="font-bold text-garden-green-dark">Garden Analogy:</span> {type.gardenAnalogy}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-6">Key Activities:</h3>
                <div className="grid md:grid-cols-3 gap-6 pl-6">
                  {type.activities.map((activity, index) => (
                    <div 
                      key={index}
                      className="garden-card h-full"
                    >
                      <div className="flex items-center mb-3">
                        <div className={`text-${type.color} mr-3`}>{activity.icon}</div>
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
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MaintenanceTypes;

