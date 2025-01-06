"use client";

import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate a subscription API call
      setMessage("Thank you for subscribing!");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-8">
          Stay updated with our latest news, offers, and promotions.
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
          >
            Subscribe
          </button>
        </form>
        {message && <p className="text-sm text-gray-500 mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default Newsletter;
