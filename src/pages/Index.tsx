
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Leaf, CheckCircle, Flower, Sprout, Shield } from "lucide-react";
import MaintenanceType from "@/components/MaintenanceType";

const Index = () => {
  const maintenanceTypes = [
    {
      title: "Corrective Maintenance",
      description: "Fixing bugs and issues in existing software.",
      icon: <CheckCircle size={24} />,
      gardenAnalogy: "Like weeding your garden to remove problems that affect your plants.",
      borderColor: "red-500",
      detailLink: "/maintenance-types#corrective"
    },
    {
      title: "Adaptive Maintenance",
      description: "Modifying software to work in changing environments.",
      icon: <Sprout size={24} />,
      gardenAnalogy: "Like changing soil composition as seasons change to adapt to new conditions.",
      borderColor: "blue-500",
      detailLink: "/maintenance-types#adaptive"
    },
    {
      title: "Perfective Maintenance",
      description: "Enhancing features and improving performance.",
      icon: <Flower size={24} />,
      gardenAnalogy: "Like adding new flowers or features to make your garden more beautiful and efficient.",
      borderColor: "purple-500",
      detailLink: "/maintenance-types#perfective"
    },
    {
      title: "Preventive Maintenance",
      description: "Making changes to prevent future problems.",
      icon: <Shield size={24} />,
      gardenAnalogy: "Like building fences or adding mulch to protect your garden from future threats.",
      borderColor: "green-500",
      detailLink: "/maintenance-types#preventive"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-garden-green-dark to-garden-green-mid text-white py-24 md:py-32">
        <div className="garden-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                Welcome to The Software Garden
              </h1>
              <p className="text-xl mb-8 text-garden-sand">
                Understanding software maintenance through the eyes of a gardener.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/maintenance-types">
                  <Button className="btn-garden bg-garden-sand text-garden-green-dark hover:bg-white">
                    Explore The Garden
                  </Button>
                </Link>
                <Link to="/ask-the-gardener">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Ask The Gardener
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-white/20 animate-pulse" style={{ animationDelay: "0.3s" }}></div>
                <div className="absolute inset-8 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: "0.6s" }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Leaf className="h-32 w-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="garden-section">
        <div className="garden-container">
          <div className="text-center mb-12">
            <h2 className="text-garden-green-dark mb-4">Why a Garden?</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Software maintenance, like gardening, is an ongoing process of nurturing, 
              adapting, and improving. Through this metaphor, we make complex technical concepts 
              accessible and memorable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="garden-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-garden-green-light text-garden-green-dark mb-4">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold">Organic Growth</h3>
              <p>Software, like plants, grows organically and requires consistent care.</p>
            </div>
            
            <div className="garden-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-garden-green-light text-garden-green-dark mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold">Regular Maintenance</h3>
              <p>Both gardens and software thrive with regular attention and maintenance.</p>
            </div>
            
            <div className="garden-card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-garden-green-light text-garden-green-dark mb-4">
                <Sprout size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold">Seasonal Changes</h3>
              <p>Adapting to new environments ensures continued growth and health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Types Section */}
      <section className="garden-section bg-garden-sand bg-opacity-30">
        <div className="garden-container">
          <div className="text-center mb-12">
            <h2 className="text-garden-green-dark">Types of Maintenance</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Just as gardening involves different activities from weeding to planting new flowers,
              software maintenance encompasses various types of activities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maintenanceTypes.map((type, index) => (
              <MaintenanceType
                key={index}
                title={type.title}
                description={type.description}
                icon={type.icon}
                gardenAnalogy={type.gardenAnalogy}
                borderColor={type.borderColor}
                detailLink={type.detailLink}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/maintenance-types">
              <Button className="btn-garden">
                Learn More About Maintenance Types
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Garden Process Teaser */}
      <section className="garden-section">
        <div className="garden-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-garden-green-dark">The Gardener's Process</h2>
              <p className="text-lg mb-6 text-gray-600">
                Every gardener follows a process to maintain a beautiful garden.
                Similarly, software maintenance follows key steps from identifying issues to
                implementing solutions.
              </p>
              <Link to="/garden-process">
                <Button className="btn-garden">
                  Explore The Process
                </Button>
              </Link>
            </div>
            <div className="bg-garden-green-light bg-opacity-20 p-8 rounded-lg">
              <ol className="space-y-6">
                <li className="flex items-start">
                  <span className="flex items-center justify-center bg-garden-green-mid text-white rounded-full w-8 h-8 mr-4 font-bold flex-shrink-0">1</span>
                  <div>
                    <h3 className="text-lg font-bold text-garden-green-dark">Identification</h3>
                    <p className="text-gray-600">Spotting weeds or areas that need attention</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center bg-garden-green-mid text-white rounded-full w-8 h-8 mr-4 font-bold flex-shrink-0">2</span>
                  <div>
                    <h3 className="text-lg font-bold text-garden-green-dark">Analysis</h3>
                    <p className="text-gray-600">Understanding what's causing garden problems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center bg-garden-green-mid text-white rounded-full w-8 h-8 mr-4 font-bold flex-shrink-0">3</span>
                  <div>
                    <h3 className="text-lg font-bold text-garden-green-dark">Implementation</h3>
                    <p className="text-gray-600">Applying gardening techniques to solve issues</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center bg-garden-green-mid text-white rounded-full w-8 h-8 mr-4 font-bold flex-shrink-0">4</span>
                  <div>
                    <h3 className="text-lg font-bold text-garden-green-dark">Review</h3>
                    <p className="text-gray-600">Evaluating if the garden is thriving again</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="garden-section bg-garden-earth text-white">
        <div className="garden-container text-center">
          <h2 className="text-white mb-6">Ready to Tend Your Software Garden?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our resources to learn how to maintain your software project like an expert gardener.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/garden-stories">
              <Button className="btn-garden bg-white text-garden-earth hover:bg-garden-sand">
                Read Garden Stories
              </Button>
            </Link>
            <Link to="/ask-the-gardener">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Ask The Gardener
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
