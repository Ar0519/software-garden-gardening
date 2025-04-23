
import React from "react";
import { HelpCircle, MousePointerClick } from "lucide-react";

const quizQuestions = [
  {
    question: "What is the first step in the software maintenance process?",
    answer: "Identification – Recognizing issues or opportunities for improvement.",
  },
  {
    question: "How do maintenance costs typically compare to initial development costs?",
    answer: "Maintenance costs can be higher than initial development, sometimes representing over 60% of total software lifecycle costs.",
  },
  {
    question: "Name two factors that increase maintenance costs.",
    answer: "System complexity and poor documentation.",
  },
  {
    question: "What does corrective maintenance focus on?",
    answer: "Fixing bugs and errors to restore correct system operation.",
  },
  {
    question: "Why is preventive maintenance important?",
    answer: "It helps avoid future issues, reducing total cost and risk.",
  },
  {
    question: "What role does user feedback play in maintenance?",
    answer: "It informs perfective maintenance by highlighting areas for improvement.",
  },
  {
    question: "How does adaptive maintenance differ from perfective maintenance?",
    answer: "Adaptive modifies software for new environments; perfective enhances features or performance.",
  },
  {
    question: "What maintenance activity ensures compatibility with new operating systems?",
    answer: "Adaptive maintenance.",
  },
  {
    question: "How can regular code reviews impact maintenance?",
    answer: "They reduce technical debt and help prevent future costly changes.",
  },
  {
    question: "Why should organizations budget for software maintenance?",
    answer: "To ensure continued reliability, security, and to avoid costly emergency fixes.",
  },
];

const Quiz = () => {
  return (
    <section className="garden-section min-h-screen bg-garden-green-light/30 py-12">
      <div className="garden-container max-w-2xl mx-auto ">
        <h1 className="text-3xl font-semibold mb-2 flex items-center gap-2">
          <span>Maintenance Process &amp; Cost Quiz</span>
          <HelpCircle size={28} className="text-garden-green-dark" />
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Test your understanding. Hover or tap on an answer box to reveal the solution!
        </p>
        <div className="space-y-8">
          {quizQuestions.map((q, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow garden-card transition hover:shadow-lg">
              <div className="font-medium text-garden-green-dark mb-3 flex gap-2 items-center">
                <span className="inline-block bg-garden-green-light text-garden-green-dark px-3 py-1 rounded-full mr-2">
                  Q{idx + 1}
                </span>
                {q.question}
              </div>
              <div
                className="relative mt-2 group cursor-pointer select-none"
                tabIndex={0}
                aria-label="Reveal answer"
              >
                <div className="rounded-lg bg-garden-green-mid/60 text-white px-4 py-3 transition-all duration-300 text-center overflow-hidden"
                  style={{ minHeight: "2.5rem" }}
                >
                  <span className="opacity-80 select-none flex items-center justify-center gap-2">
                    <MousePointerClick size={18} className="mr-2" /> Hover to Reveal
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 rounded-lg bg-garden-green-dark text-white px-4 py-3 z-10">
                  <span className="font-semibold text-lg">{q.answer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
