"use client";

import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { cartItems, removeFromCart } = useCart();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    mobile: "",
    address: "",
    province: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Calculate Total Amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const orderPayload = {
      data: {
        fname: formData.fname,
        lname: formData.lname,
        mobile: formData.mobile,
        address: formData.address,
        province: formData.province,
        city: formData.city,
        total: totalAmount,
        orderStatus: "pending",
        product: cartItems.map((item) => item.id),
      },
    };

    try {
      const response = await fetch("https://strapi-ecommerce-zguy.onrender.com/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderPayload),
      });

      if (!response.ok) {
        throw new Error("Failed to place order. Please try again.");
      }

      const data = await response.json();
      setSuccess(true);
      removeFromCart();
      setFormData({
        fname: "",
        lname: "",
        mobile: "",
        address: "",
        province: "",
        city: "",
      });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-4 py-36">
        <div role="alert" className="alert alert-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M12 18h.01M12 18v2m0 2H9m6-4v2m0 2h-3m-2 0h2m3 0h-3m-1 0H9"
            />
          </svg>
          <span>Your cart is empty. Please add products to your cart before proceeding to checkout.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 py-36">
      <h1 className="text-2xl lg:text-4xl font-bold text-center mb-8">Checkout</h1>
      <div className="bg-base-200 p-4 rounded-lg shadow-md mb-8">
        <h2 className="text-lg lg:text-2xl font-bold mb-4">Your Selected Products</h2>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4 mb-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="lg:w-20 w-12 object-cover rounded-lg border-2 border-primary"
              />
              <div>
                <h3 className="lg:text-xl text-md font-semibold">{item.name}</h3>
                <p className="lg:text-base text-sm text-gray-500 font-semibold">QTY: {item.quantity}</p>
              </div>
            </div>
            <p className="lg:text-lg text-md font-bold text-primary">
              Rs. {item.price * item.quantity}
            </p>
          </div>
        ))}
        <h3 className="text-lg lg:text-xl font-bold text-right">
          <span className="text-primary lg:text-4xl text-3xl">Rs. {totalAmount}</span>
        </h3>
      </div>
      <form
        className="mx-auto space-y-4 bg-base-200 p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mobile</span>
          </label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Province</span>
          </label>
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">City</span>
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>
        {error && <p className="text-error">{error}</p>}
        {success && <p className="text-success">Order placed successfully!</p>}
        <button
          type="submit"
          className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}
