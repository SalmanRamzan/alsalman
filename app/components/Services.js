"use client";

import React from "react";

const servicesData = [
  {
    id: 1,
    title: "Fast Delivery",
    description: "Get your orders delivered at lightning speed.",
    icon: "🚀",
  },
  {
    id: 2,
    title: "Premium Quality",
    description: "Only the best products for our customers.",
    icon: "🌟",
  },
  {
    id: 3,
    title: "24/7 Support",
    description: "We're here to help, anytime you need us.",
    icon: "📞",
  },
  {
    id: 4,
    title: "Secure Payments",
    description: "Your transactions are safe with us.",
    icon: "🔒",
  },
];

const Services = () => {
  return (
    <>
    <h1 className="lg:text-6xl text-3xl text-center my-6 pb-12 mx-auto w-3/5 border-b-2 border-primary py-12">What We Offer</h1>
    <div className="py-24 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-base-200 shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Services;
