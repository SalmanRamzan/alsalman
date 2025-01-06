"use client";

import React, { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy. If you're not satisfied with your purchase, you can return it for a full refund.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping usually takes 2-3 business days within Pakistan. Delivery times may vary based on your location.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Currently, we only ship within Pakistan. Stay tuned for updates on international shipping.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us via email at support@example.com or call us at +92-123-456-789.",
    },
  ];

  return (
    <>
    <h1 className="lg:text-6xl text-3xl text-center my-6 pb-12 mx-auto w-3/5 border-b-2 border-primary py-12">Frequently Asked Questions</h1>
    <div className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`collapse collapse-arrow ${
                openIndex === index ? "collapse-open" : "collapse-close"
              } bg-white border border-gray-200 rounded-lg shadow`}
            >
              <div
                className="collapse-title text-lg font-semibold cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </div>
              <div className="collapse-content text-gray-600">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default FAQs;
