
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface GardenStoryProps {
  title: string;
  company: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
  maintenanceType?: "corrective" | "adaptive" | "perfective" | "preventive";
}

const GardenStory = ({
  title,
  company,
  excerpt,
  imageUrl,
  slug,
  maintenanceType,
}: GardenStoryProps) => {
  const tagColorMap = {
    corrective: "bg-red-100 text-red-800",
    adaptive: "bg-blue-100 text-blue-800",
    perfective: "bg-purple-100 text-purple-800",
    preventive: "bg-green-100 text-green-800",
  };

  return (
    <div className="garden-card h-full flex flex-col overflow-hidden">
      <div className="relative h-48 mb-4 overflow-hidden rounded-md">
        <img
          src={imageUrl}
          alt={`${company} garden story`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {maintenanceType && (
          <span
            className={cn(
              "absolute top-2 right-2 px-3 py-1 text-xs font-medium rounded-full",
              tagColorMap[maintenanceType]
            )}
          >
            {maintenanceType.charAt(0).toUpperCase() + maintenanceType.slice(1)}
          </span>
        )}
      </div>
      
      <div className="flex-1">
        <h3 className="text-xl font-serif font-bold mb-1">{title}</h3>
        <p className="text-sm text-garden-earth mb-3">{company}</p>
        <p className="text-gray-600 line-clamp-3">{excerpt}</p>
      </div>
      
      <Link
        to={`/garden-stories/${slug}`}
        className="inline-flex items-center mt-4 text-garden-green-dark font-medium hover:text-garden-green-mid transition-colors group"
      >
        Read full story
        <ArrowRight 
          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" 
        />
      </Link>
    </div>
  );
};

export default GardenStory;
