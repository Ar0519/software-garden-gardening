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

export const maintenanceTypes = [
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
