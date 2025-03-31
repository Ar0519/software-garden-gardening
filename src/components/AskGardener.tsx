
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface AskGardenerProps {
  faqs: FaqItem[];
}

const AskGardener = ({ faqs }: AskGardenerProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="garden-card">
      <div className="mb-6">
        <label htmlFor="search-faqs" className="sr-only">
          Search FAQs
        </label>
        <input
          type="search"
          id="search-faqs"
          placeholder="Search questions..."
          className="w-full p-3 border border-garden-green-light rounded-md focus:outline-none focus:ring-2 focus:ring-garden-green-mid"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredFaqs.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg font-medium text-garden-earth">
            No questions found matching "{searchTerm}"
          </p>
          <p className="mt-2 text-gray-500">
            Try a different search term or browse all questions below.
          </p>
        </div>
      ) : (
        <Accordion type="single" collapsible className="w-full">
          {filteredFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium hover:text-garden-green-dark">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default AskGardener;
