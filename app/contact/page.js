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
    <div className="container mx-auto lg:py-56 py-40 px-4">
      <h1 className="lg:text-6xl text-4xl text-center lg:mb-28 mb-16">Contact Us</h1>
      
      {/* First Grid - Two Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* First Card - Contact Us */}
        <div className="bg-base-200 text-white p-8 rounded-xl shadow-lg grid gap-8">
          <div className="bg-primary p-8 rounded-lg">
            <h2 className="lg:text-4xl text-3xl font-semibold lg:mb-8 mb-4 text-center">Get in touch with us</h2>
            <p className="lg:text-lg mb-4 font-semibold">Have any questions or need assistance? Feel free to reach out to us, and we will be happy to help you with anything!</p>
            <p className="mb-4 italic lg:text-base text-sm">Contact us directly at:</p>
            <button className="btn btn-white text-primary w-full py-2 rounded-lg lg:text-xl text-lg">+92-315-6029913</button>
          </div>

          <div className="bg-base-100 text-black p-8 rounded-xl">
            <h2 className="lg:text-4xl text-3xl text-center font-semibold lg:mb-8 mb-4">Our Information</h2>
            <div className="flex items-center lg:mb-4 mb-2 lg:text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-8 text-primary mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16.5 3.75h-9a3 3 0 00-3 3v10.5a3 3 0 003 3h9a3 3 0 003-3V6.75a3 3 0 00-3-3zM3.75 8.25L12 13.5l8.25-5.25"
                />
              </svg>
              <p className="font-bold">Email: <a href="mailto:alsalman-store@gmail.com" className="text-gray-500 font-normal">alsalman-store@gmail.com</a></p>
            </div>
            <div className="flex items-center lg:text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-8 text-primary mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 21c-4.418 0-8-4.03-8-9 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.97-3.582 9-8 9z"
                />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <p className="font-bold">Address: <span className="font-normal text-gray-500">Bosan Road, Multan, Punjab, Pakistan.</span></p>              
            </div>
          </div>
        </div>

        {/* Second Card - Contact Form */}
        <div className="bg-base-100 p-8 rounded-lg shadow-lg">
            <h2 className="lg:text-2xl text-xl font-semibold lg:mb-8 mb-4 text-primary">Enter your credentials and hit send!</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
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

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
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

              <div className="mb-6  ">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
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

              <div className="flex flex-col gap-8">
                <button
                  type="submit"
                  className="w-full btn btn-primary text-white font-bold py-2 rounded-lg shadow-lg text-base"
                >
                  Send
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
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

    </div>
  );
}
