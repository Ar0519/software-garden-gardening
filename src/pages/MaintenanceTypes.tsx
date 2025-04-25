
import React from "react";
import MaintenanceHero from "../components/maintenance/MaintenanceHero";
import MaintenanceTypeCard from "../components/maintenance/MaintenanceTypeCard";
import MaintenanceTypeDetail from "../components/maintenance/MaintenanceTypeDetail";
import { maintenanceTypes } from "../data/maintenanceTypes";

const MaintenanceTypes = () => {
  return (
    <>
      <MaintenanceHero />
      
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
                <MaintenanceTypeCard
                  key={type.id}
                  {...type}
                />
              ))}
            </div>
          </div>

          {maintenanceTypes.map((type) => (
            <MaintenanceTypeDetail
              key={type.id}
              {...type}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default MaintenanceTypes;
