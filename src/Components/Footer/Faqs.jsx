import { useState } from "react";
import { Sparkle } from "lucide-react";
import Image3 from "../../assets/Image3.png";

const faqData = [
  {
    id: 1,
    question: "What is Chowdeck?",
    answer:
      "Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.",
  },
  {
    id: 2,
    question: "What locations do we currently deliver to?",
    answer:
      "We currently deliver across major cities including Lagos, Abuja, and Port Harcourt, with new locations being added regularly.",
  },
  {
    id: 3,
    question: "What is Chowdeck wallet?",
    answer:
      "Chowdeck Wallet is an in-app balance that lets you fund your account and pay for orders instantly, without needing to re-enter card details every time.",
  },
  {
    id: 4,
    question: "What is Chowscore?",
    answer:
      "Chowscore is a rating system that reflects how reliable and active a rider or vendor has been on the platform over time.",
  },
  {
    id: 5,
    question: "What is Service fee?",
    answer:
      "Service fee is a small charge added to each order that helps us maintain platform operations, rider support, and app reliability.",
  },
  {
    id: 6,
    question: "Why do we charge Service fee?",
    answer:
      "The service fee helps cover operational costs like customer support, app maintenance, and ensuring riders are paid fairly and promptly.",
  },
];

export default function Faqs() {
  const [activeId, setActiveId] = useState(faqData[0].id);

  const activeFaq = faqData.find((faq) => faq.id === activeId);

  return (
    <section className="mt-16 px-6 bg-black">
      <div className="max-w-5xl mx-auto border border-gray-300 rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left column - Questions */}
        <div className="p-8">
          <h2 className="text-4xl font-extrabold text-green-800 mb-6">FAQs.</h2>

          <div className="flex flex-col gap-3 cursor-pointer">
            {faqData.map((faq) => {
              const isActive = faq.id === activeId;
              return (
                <button
                  key={faq.id}
                  onClick={() => setActiveId(faq.id)}
                  className={`cursor-pointer flex items-center justify-between text-left px-4 py-3 rounded-md font-semibold transition-colors ${
                    isActive
                      ? "bg-black text-white"
                      : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  <span>{faq.question}</span>
                  {isActive && (
                    <Sparkle size={18} className="text-yellow-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column - Answer */}
        <div className="bg-yellow-400 p-8 flex flex-col">
          <h2 className="text-4xl font-extrabold text-black mb-6">Ans.</h2>
          <div className="flex gap-2">
            <Sparkle size={20} className="text-black shrink-0 mt-1" />
            <p className="text-black leading-relaxed">{activeFaq.answer}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-cols justify-center mt-14">
        <img src={Image3} alt="Rating and Image of download button" />
      </div>
    </section>
  );
}
