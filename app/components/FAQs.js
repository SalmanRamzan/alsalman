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
        "We accept returns within 7 days for products in original condition. Simply contact our support team to initiate the process.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 2–3 business days within Pakistan. Delivery times may vary depending on your city or region.",
    },
    {
      question: "Do you offer cash on delivery?",
      answer:
        "Yes, we offer Cash on Delivery (COD) for all orders, ensuring a convenient and secure shopping experience.",
    },
    {
      question: "Are there any delivery charges?",
      answer:
        "We provide free shipping across Pakistan for all orders. No hidden charges apply!",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us via email or call/whatsapp us at 0304-3754421. We’re here to help you 24/7.",
    },
  ];

  return (
    <>
      <h1 className="lg:text-6xl text-3xl text-center my-6 pb-12 mx-auto w-3/5 border-b-2 border-primary py-12">
        Frequently Asked Questions
      </h1>
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
