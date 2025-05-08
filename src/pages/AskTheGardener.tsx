
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import AskGardener from "@/components/AskGardener";
import { Send } from "lucide-react";

const AskTheGardener = () => {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setQuestion("");
        setSubmitted(false);
      }, 2000);
    }
  };

  const faqs = [
    {
      question: "How do I know which type of maintenance my software needs?",
      answer: `<p>Think of it like diagnosing problems in your garden:</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li>If something is broken or not working correctly, you need <strong>corrective maintenance</strong> (weeding).</li>
        <li>If your software needs to work with new technologies or platforms, you need <strong>adaptive maintenance</strong> (changing soil).</li>
        <li>If users are requesting new features or performance improvements, you need <strong>perfective maintenance</strong> (adding flowers).</li>
        <li>If you're concerned about future problems or making the code more maintainable, you need <strong>preventive maintenance</strong> (building fences).</li>
      </ul>`
    },
    {
      question: "How much should I budget for software maintenance?",
      answer: `<p>A common industry guideline is to allocate 15-20% of the initial development cost annually for maintenance. However, this varies based on:</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li><strong>Age of the software:</strong> Older software generally requires more maintenance.</li>
        <li><strong>Complexity:</strong> More complex systems need more attention.</li>
        <li><strong>Change frequency:</strong> Software in rapidly evolving industries needs more adaptive maintenance.</li>
      </ul>
      <p class="mt-2">Just as an established garden with many different plants requires more ongoing investment than a simple new garden, complex legacy software systems demand more maintenance resources.</p>`
    },
    {
      question: "When is it time to rebuild rather than maintain software?",
      answer: `<p>Consider rebuilding when:</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li>Maintenance costs consistently exceed 25-30% of the original development cost yearly.</li>
        <li>The technology stack is obsolete or no longer supported.</li>
        <li>The software can't adapt to critical new requirements despite maintenance efforts.</li>
        <li>Technical debt has accumulated to the point where changes are extremely difficult.</li>
      </ul>
      <p class="mt-2">This is similar to deciding when to replant a garden section instead of continuing to maintain struggling plants - sometimes starting fresh is more effective than continued patchwork.</p>`
    },
    {
      question: "Who should perform software maintenance?",
      answer: `<p>The best maintenance team combines:</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li><strong>People familiar with the original code</strong> (if possible)</li>
        <li><strong>Developers with experience in the technologies used</strong></li>
        <li><strong>Quality assurance specialists</strong> to ensure changes don't break existing functionality</li>
      </ul>
      <p class="mt-2">Like gardening, software maintenance requires both knowledge of the specific garden (codebase) and general gardening (development) skills. Having continuity with the original developers is valuable but not always necessary with proper documentation.</p>`
    },
    {
      question: "How do I know if my maintenance efforts are successful?",
      answer: `<p>Track these key metrics:</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li><strong>Reduced defect rates</strong> over time</li>
        <li><strong>Decreased time to implement new features</strong></li>
        <li><strong>Improved performance metrics</strong> (speed, resource usage)</li>
        <li><strong>Reduced downtime</strong></li>
        <li><strong>Positive user feedback</strong></li>
      </ul>
      <p class="mt-2">Just as a well-maintained garden shows visible signs of health - vibrant plants, lack of weeds, and resilience to environmental changes - well-maintained software demonstrates stability, adaptability, and continued alignment with business needs.</p>`
    },
    {
      question: "How often should software maintenance be performed?",
      answer: `<p>Different types of maintenance follow different schedules:</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li><strong>Corrective maintenance:</strong> Address critical bugs immediately; batch minor issues for regular releases.</li>
        <li><strong>Adaptive maintenance:</strong> Schedule around external changes (OS updates, API changes).</li>
        <li><strong>Perfective maintenance:</strong> Plan regular enhancement cycles based on user feedback.</li>
        <li><strong>Preventive maintenance:</strong> Dedicate time quarterly or during slower business periods.</li>
      </ul>
      <p class="mt-2">Like garden maintenance, software upkeep should follow both regular schedules and respond to unexpected events (like sudden pest outbreaks or storms in a garden, or security vulnerabilities in software).</p>`
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-garden-earth text-white py-16">
        <div className="garden-container">
          <h1 className="text-center">Ask The Gardener</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Have questions about software maintenance? Our expert gardener has answers
            to help your software flourish.
          </p>
        </div>
      </section>

      {/* Ask a Question Section */}
      <section className="garden-section">
        <div className="garden-container">
          <div className="grid md:grid-cols-5 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="sticky top-24">
                <div className="bg-garden-green-dark text-white p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">Ask Your Question</h2>
                  <p className="mb-6">
                    Need advice on software maintenance? Submit your question and our experts will provide guidance.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-garden-sand mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-garden-green-light focus:border-garden-green-light text-garden-green-dark"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="question" className="block text-sm font-medium text-garden-sand mb-1">
                        Your Question
                      </label>
                      <textarea
                        id="question"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-garden-green-light focus:border-garden-green-light text-garden-green-dark"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-garden-sand text-garden-green-dark hover:bg-white flex items-center justify-center"
                      disabled={submitted}
                    >
                      {submitted ? "Question Submitted!" : (
                        <>
                          Submit Question
                          <Send size={16} className="ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold mb-6 text-garden-green-dark">Frequently Asked Questions</h2>
              <AskGardener faqs={faqs} />
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default AskTheGardener;
