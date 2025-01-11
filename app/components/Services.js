"use client";

import React from "react";

const servicesData = [
  {
    id: 1,
    title: "Fast Delivery",
    description: "Enjoy quick delivery through reliable courier services across Pakistan. We aim to deliver your orders within 2–3 business days.",
    icon: "🚀",
  },
  {
    id: 2,
    title: "Premium Quality",
    description: "We source top-quality products to ensure customer satisfaction. Our standards are designed to exceed your expectations.",
    icon: "🌟",
  },
  {
    id: 3,
    title: "24/7 Support",
    description: "Got questions? Our support team is available 24/7 to assist you. Contact us anytime for help with your orders or inquiries.",
    icon: "📞",
  },
  {
    id: 4,
    title: "Cash on Delivery",
    description: "Pay for your orders only when they are delivered to your doorstep. Hassle-free shopping with no upfront payments.",
    icon: "💵",
  },
];

const Services = () => {
  return (
    <>
      <h1 className="lg:text-6xl text-3xl text-center my-6 pb-12 mx-auto w-3/5 border-b-2 border-primary py-12">
        What We Offer
      </h1>
      <div className="py-24 px-4">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-base-100 shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="lg:text-6xl text-4xl mb-8">{service.icon}</div>
              <h3 className="lg:text-2xl text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-left">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
