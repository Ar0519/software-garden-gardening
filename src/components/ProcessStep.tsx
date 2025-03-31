
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProcessStepProps {
  title: string;
  description: string;
  gardenTool: string;
  toolDescription: string;
  icon: React.ReactNode;
  stepNumber: number;
  isLast?: boolean;
}

const ProcessStep = ({
  title,
  description,
  gardenTool,
  toolDescription,
  icon,
  stepNumber,
  isLast = false,
}: ProcessStepProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-garden-green-mid text-white font-bold text-xl">
          {stepNumber}
        </div>
        {!isLast && <div className="w-1 flex-1 bg-garden-green-light my-2"></div>}
      </div>
      <div className={cn("pb-10", isLast ? "" : "border-b border-garden-green-light")}>
        <div className="flex items-center">
          <div className="text-garden-green-dark mr-3">{icon}</div>
          <h3 className="text-xl font-serif font-bold">{title}</h3>
        </div>
        <p className="text-gray-600 my-3">{description}</p>
        
        <div className="bg-garden-sand bg-opacity-50 p-4 rounded-md my-2 border border-garden-earth border-opacity-20">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/3 font-bold text-garden-earth mb-2 md:mb-0">Gardener's Tool:</div>
            <div className="md:w-2/3">
              <span className="font-semibold">{gardenTool}</span> — {toolDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;
