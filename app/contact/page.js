"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      // Simulate form submission or send data to an API
      console.log("Form Data Submitted:", formData);

      // Reset the form
      setFormData({ name: "", email: "", message: "" });
      setStatus("Message Sent Successfully!");
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="container mx-auto pt-36 pb-96 px-4">
      <h1 className="lg:text-5xl text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="max-w-lg mx-auto bg-base-200 shadow-lg rounded-lg p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered input-primary w-full rounded-lg shadow-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered input-primary w-full rounded-lg shadow-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-primary w-full rounded-lg shadow-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            ></textarea>
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full btn btn-primary text-white font-medium py-2 rounded-lg shadow-lg text-base"
            >
              Submit
            </button>
            {status && (
              <p
                className={`text-center text-sm ${
                  status.includes("Success") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
