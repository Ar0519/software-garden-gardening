
import React from "react";
import GardenStory from "@/components/GardenStory";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, BookOpen, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

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

  const resources = {
    articles: [
      {
        title: "The True Cost of Software Maintenance",
        source: "IEEE Software",
        url: "https://ieeexplore.ieee.org/document/1146943",
        description: "Detailed analysis of software maintenance costs and how they typically exceed development costs."
      },
      {
        title: "Understanding Software Maintenance Models",
        source: "ACM Digital Library",
        url: "https://dl.acm.org/doi/10.1145/1142031.1142033",
        description: "Academic research on various maintenance models and their effectiveness in different scenarios."
      },
      {
        title: "The Economics of Software Maintenance",
        source: "Journal of Software Maintenance",
        url: "https://onlinelibrary.wiley.com/journal/1096908x",
        description: "Comprehensive study on the economic factors affecting software maintenance decisions."
      },
      {
        title: "Technical Debt and Its Impact on Maintenance",
        source: "Martin Fowler's Blog",
        url: "https://martinfowler.com/bliki/TechnicalDebt.html",
        description: "How technical debt accumulates and affects maintenance efforts over time."
      },
      {
        title: "Refactoring: Improving the Design of Existing Code",
        source: "Martin Fowler",
        url: "https://refactoring.com/",
        description: "Essential resource on refactoring practices that reduce maintenance effort."
      }
    ],
    videos: [
      {
        title: "Software Maintenance Explained Simply",
        platform: "YouTube",
        url: "https://www.youtube.com/watch?v=AbgsfeGvg3E",
        description: "Clear overview of software maintenance types and their importance."
      },
      {
        title: "The Hidden Work of Software Maintenance",
        platform: "YouTube",
        url: "https://www.youtube.com/watch?v=G4PRwAHUKNI",
        description: "Why maintenance is often undervalued but critical to software success."
      },
      {
        title: "Reducing Technical Debt Through Refactoring",
        platform: "YouTube",
        url: "https://www.youtube.com/watch?v=1-Xoy5w5ydM",
        description: "Practical approaches to improve maintainability through ongoing code improvements."
      },
      {
        title: "Legacy Code Maintenance Strategies",
        platform: "YouTube",
        url: "https://www.youtube.com/watch?v=5dCUJqhS4QQ",
        description: "How to efficiently maintain and gradually modernize legacy systems."
      },
      {
        title: "Software Maintenance Best Practices",
        platform: "YouTube",
        url: "https://www.youtube.com/watch?v=xvPuKfPE_Yg",
        description: "Industry best practices that optimize maintenance processes."
      }
    ],
    websites: [
      {
        title: "Software Sustainability Guide",
        organization: "Software Sustainability Institute",
        url: "https://www.software.ac.uk/resources",
        description: "Comprehensive resources on building sustainable software that's easier to maintain."
      },
      {
        title: "ISO/IEC 14764 - Software Maintenance",
        organization: "ISO",
        url: "https://www.iso.org/standard/39064.html",
        description: "International standard providing a framework for software maintenance processes."
      },
      {
        title: "Software Evolution and Maintenance",
        organization: "ACM SIGSOFT",
        url: "https://www.sigsoft.org/resources.html",
        description: "Research and resources on software evolution and maintenance practices."
      },
      {
        title: "Maintenance Excellence Network",
        organization: "Software Engineering Institute",
        url: "https://www.sei.cmu.edu/",
        description: "Resources on maintaining complex software systems effectively."
      },
      {
        title: "Agile Maintenance Practices",
        organization: "Agile Alliance",
        url: "https://www.agilealliance.org/resources/",
        description: "How agile methodologies can be applied to software maintenance activities."
      }
    ]
  };

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

      {/* Resources Section */}
      <section className="garden-section bg-garden-sand bg-opacity-30">
        <div className="garden-container">
          <div className="mb-12">
            <h2 className="text-garden-earth text-center">Gardening Resources</h2>
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
              Explore these valuable resources to learn more about software maintenance processes,
              helping you grow your knowledge and tend to your digital garden more effectively.
            </p>
          </div>

          <Tabs defaultValue="articles" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="articles" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Articles
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Youtube className="h-4 w-4" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="websites" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Websites
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="articles" className="space-y-6">
              {resources.articles.map((article, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-garden-green-light">
                  <h3 className="text-lg font-serif font-bold text-garden-green-dark mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-garden-earth mb-3">Source: {article.source}</p>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-garden-green-dark font-medium hover:text-garden-green-mid transition-colors group"
                  >
                    Read Article
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="videos" className="space-y-6">
              {resources.videos.map((video, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-garden-green-light">
                  <h3 className="text-lg font-serif font-bold text-garden-green-dark mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-garden-earth mb-3">Platform: {video.platform}</p>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-garden-green-dark font-medium hover:text-garden-green-mid transition-colors group"
                  >
                    Watch Video
                    <Youtube className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="websites" className="space-y-6">
              {resources.websites.map((website, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-garden-green-light">
                  <h3 className="text-lg font-serif font-bold text-garden-green-dark mb-2">
                    {website.title}
                  </h3>
                  <p className="text-sm text-garden-earth mb-3">Organization: {website.organization}</p>
                  <p className="text-gray-600 mb-4">{website.description}</p>
                  <a 
                    href={website.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-garden-green-dark font-medium hover:text-garden-green-mid transition-colors group"
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </TabsContent>
          </Tabs>
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
