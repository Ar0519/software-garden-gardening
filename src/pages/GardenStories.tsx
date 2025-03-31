
import React from "react";
import GardenStory from "@/components/GardenStory";

const GardenStories = () => {
  const stories = [
    {
      title: "From Legacy Jungle to Orderly Orchard",
      company: "FinTech Solutions Inc.",
      excerpt: "How a 25-year-old financial system was gradually modernized without disrupting daily operations.",
      imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3",
      slug: "fintech-legacy-transformation",
      maintenanceType: "adaptive",
    },
    {
      title: "Emergency Weeding: Fixing Critical Security Vulnerabilities",
      company: "SecureShield Systems",
      excerpt: "When security vulnerabilities threatened customer data, quick corrective action saved the day.",
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3",
      slug: "security-vulnerability-fix",
      maintenanceType: "corrective",
    },
    {
      title: "Adding New Garden Features: User Experience Bloom",
      company: "UX Design Studio",
      excerpt: "Enhancing an established product with new features while maintaining design harmony.",
      imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3",
      slug: "ux-redesign-story",
      maintenanceType: "perfective",
    },
    {
      title: "Building Garden Fences: Preventing Future Problems",
      company: "PreventTech Solutions",
      excerpt: "How an investment in code quality and automated testing prevented future maintenance headaches.",
      imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3",
      slug: "preventive-maintenance-success",
      maintenanceType: "preventive",
    },
    {
      title: "Seasonal Adaptation: Moving to Cloud Infrastructure",
      company: "CloudShift Technologies",
      excerpt: "Transitioning from on-premises servers to cloud infrastructure while keeping systems running.",
      imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3",
      slug: "cloud-migration-story",
      maintenanceType: "adaptive",
    },
    {
      title: "Weeding Out Legacy Code: Modernizing a Retail System",
      company: "RetailPlus Inc.",
      excerpt: "Systematically replacing outdated components while maintaining business operations.",
      imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3",
      slug: "retail-system-modernization",
      maintenanceType: "corrective",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-garden-green-light bg-opacity-70 py-16">
        <div className="garden-container">
          <h1 className="text-center text-garden-green-dark">Garden Stories</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-garden-green-dark">
            Real-world case studies of software maintenance challenges and successes,
            told through our garden metaphor.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="garden-section">
        <div className="garden-container">
          <div className="mb-12">
            <h2 className="text-garden-green-dark text-center">Featured Stories</h2>
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
              Learn from these real-world examples of successful software maintenance projects,
              each representing different types of garden care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <GardenStory
                key={index}
                title={story.title}
                company={story.company}
                excerpt={story.excerpt}
                imageUrl={story.imageUrl}
                slug={story.slug}
                maintenanceType={story.maintenanceType as any}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Submit Your Story */}
      <section className="garden-section bg-garden-earth bg-opacity-10">
        <div className="garden-container">
          <div className="text-center mb-8">
            <h2 className="text-garden-earth">Share Your Garden Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have you successfully tackled a software maintenance challenge?
              We'd love to feature your case study in our garden of stories.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-garden-green-mid focus:border-garden-green-mid"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-garden-green-mid focus:border-garden-green-mid"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-garden-green-mid focus:border-garden-green-mid"
                />
              </div>
              
              <div>
                <label htmlFor="storyTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Story Title
                </label>
                <input
                  type="text"
                  id="storyTitle"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-garden-green-mid focus:border-garden-green-mid"
                />
              </div>
              
              <div>
                <label htmlFor="storyType" className="block text-sm font-medium text-gray-700 mb-1">
                  Maintenance Type
                </label>
                <select
                  id="storyType"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-garden-green-mid focus:border-garden-green-mid"
                >
                  <option value="">Select a type</option>
                  <option value="corrective">Corrective (Weeding)</option>
                  <option value="adaptive">Adaptive (Changing Soil)</option>
                  <option value="perfective">Perfective (Adding Flowers)</option>
                  <option value="preventive">Preventive (Building Fences)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="storySummary" className="block text-sm font-medium text-gray-700 mb-1">
                  Brief Summary
                </label>
                <textarea
                  id="storySummary"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-garden-green-mid focus:border-garden-green-mid"
                ></textarea>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn-garden"
                >
                  Submit Your Story
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default GardenStories;
