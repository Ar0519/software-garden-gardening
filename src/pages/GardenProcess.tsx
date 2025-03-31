
import React from "react";
import {
  Search,
  FileSearch,
  FileCode,
  CheckCircle,
  RefreshCw,
  Wrench,
  Upload,
  Eye,
  Clipboard,
} from "lucide-react";
import ProcessStep from "@/components/ProcessStep";

const GardenProcess = () => {
  const processSteps = [
    {
      title: "Identification",
      description: "Recognizing issues or needs for maintenance in the software.",
      gardenTool: "Garden Inspection",
      toolDescription: "Regular walks through the garden to spot weeds, pests, or unhealthy plants.",
      icon: <Search size={24} />,
      stepNumber: 1,
    },
    {
      title: "Analysis",
      description: "Understanding the root cause and determining the best approach to solve it.",
      gardenTool: "Soil Testing Kit",
      toolDescription: "Analyzing soil conditions to understand why plants might be struggling.",
      icon: <FileSearch size={24} />,
      stepNumber: 2,
    },
    {
      title: "Design",
      description: "Planning the changes needed to address the issue or enhancement.",
      gardenTool: "Garden Planner",
      toolDescription: "Sketching and planning changes to the garden layout before implementation.",
      icon: <Clipboard size={24} />,
      stepNumber: 3,
    },
    {
      title: "Implementation",
      description: "Making the actual code changes to fix bugs or add new features.",
      gardenTool: "Garden Tools Set",
      toolDescription: "Using the right tools like trowels, pruners, and spades to make actual changes.",
      icon: <Wrench size={24} />,
      stepNumber: 4,
    },
    {
      title: "Testing",
      description: "Verifying that the changes work as expected without side effects.",
      gardenTool: "Plant Monitoring",
      toolDescription: "Checking plants after treatment to ensure they're responding positively.",
      icon: <CheckCircle size={24} />,
      stepNumber: 5,
    },
    {
      title: "Deployment",
      description: "Releasing the changes to the live software environment.",
      gardenTool: "Garden Transplanting",
      toolDescription: "Moving plants from a nursery area to their permanent location in the garden.",
      icon: <Upload size={24} />,
      stepNumber: 6,
    },
    {
      title: "Monitoring & Review",
      description: "Observing the system after changes to ensure continued stability.",
      gardenTool: "Garden Journal",
      toolDescription: "Recording outcomes and observations to learn from successes and mistakes.",
      icon: <Eye size={24} />,
      stepNumber: 7,
      isLast: true,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-garden-earth text-white py-16">
        <div className="garden-container">
          <h1 className="text-center">The Gardener's Process</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Every successful garden follows a methodical process, from planting to
            harvesting. Software maintenance follows a similar journey.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="garden-section">
        <div className="garden-container">
          <div className="text-center mb-16">
            <h2 className="text-garden-green-dark mb-4">The Software Garden Lifecycle</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Just as gardeners follow a seasonal process to maintain their gardens,
              software maintenance follows a systematic approach to keep applications
              healthy and thriving.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-center overflow-x-auto py-6">
              <div className="flex">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center mx-4 min-w-[100px]">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-garden-green-dark' : 'bg-garden-green-mid'
                    } text-white font-bold`}>
                      {step.stepNumber}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="h-1 w-16 bg-garden-green-light mt-6"></div>
                    )}
                    <p className="mt-2 text-center font-medium">{step.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Process Steps */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-garden-green-dark">Detailed Process</h3>
            
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={index}
                  title={step.title}
                  description={step.description}
                  gardenTool={step.gardenTool}
                  toolDescription={step.toolDescription}
                  icon={step.icon}
                  stepNumber={step.stepNumber}
                  isLast={step.isLast}
                />
              ))}
            </div>
          </div>

          {/* Continuous Process */}
          <div className="mt-24 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-garden-green-light text-garden-green-dark mb-6">
              <RefreshCw size={36} />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-garden-green-dark">A Continuous Cycle</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Like gardening, software maintenance is not a one-time event but a continuous cycle.
              Just as gardens need ongoing attention through changing seasons,
              software requires regular maintenance to adapt, grow, and thrive in an ever-changing
              digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance Costs Section */}
      <section className="garden-section bg-garden-sand bg-opacity-30">
        <div className="garden-container">
          <div className="text-center mb-12">
            <h2 className="text-garden-green-dark">Understanding Maintenance Costs</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Just as garden upkeep depends on size, age, and complexity, 
              software maintenance costs vary based on similar factors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="garden-card">
              <h3 className="text-xl font-bold mb-3 text-garden-green-dark">Garden Size</h3>
              <p className="text-gray-600 mb-4">
                Larger codebases, like larger gardens, require more resources to maintain properly.
                More lines of code mean more potential areas that might need attention.
              </p>
              <div className="bg-garden-green-light bg-opacity-20 p-4 rounded">
                <p className="italic text-sm">
                  Just as a sprawling garden with many beds needs more time and effort than a small patio garden,
                  large software systems require proportionally more maintenance.
                </p>
              </div>
            </div>

            <div className="garden-card">
              <h3 className="text-xl font-bold mb-3 text-garden-green-dark">Garden Age</h3>
              <p className="text-gray-600 mb-4">
                Older software often requires more maintenance as technologies become outdated
                and compatibility issues arise with newer systems.
              </p>
              <div className="bg-garden-green-light bg-opacity-20 p-4 rounded">
                <p className="italic text-sm">
                  An established garden with aging trees and shrubs often needs more care than a newly planted one,
                  similar to how legacy software requires additional attention.
                </p>
              </div>
            </div>

            <div className="garden-card">
              <h3 className="text-xl font-bold mb-3 text-garden-green-dark">Garden Complexity</h3>
              <p className="text-gray-600 mb-4">
                Software with complex architecture or many integrations requires more specialized
                maintenance skills and careful planning.
              </p>
              <div className="bg-garden-green-light bg-opacity-20 p-4 rounded">
                <p className="italic text-sm">
                  A garden with diverse plants, water features, and specialized zones requires more expertise
                  than a simple lawn, just as complex software demands specialized knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GardenProcess;
