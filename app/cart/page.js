"use client";

import Link from "next/link";
import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  // Calculate Total Amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4 min-h-full py-36">
      {cartItems.length === 0 ? (
        <p className="lg:text-5xl text-3xl text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          <h1 className="lg:text-3xl text-xl mb-4">Your Cart</h1>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center space-x-3">
                <Link href={`/products/${item.id}`}>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="lg:w-20 w-12 object-cover rounded-lg border-2 border-primary"
                  />
                </Link>
                <div>
                  <h2 className="lg:text-lg text-xs font-bold">{item.name}</h2>
                  <p className="lg:text-base text-sm text-gray-500 font-semibold">Rs. {item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {/* Quantity Controls */}
                <button
                  className="btn btn-outline lg:btn-sm btn-xs"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="btn btn-primary btn-sm lg:text-lg text-sm font-semibold">{item.quantity}</span>
                <button
                  className="btn btn-outline lg:btn-sm btn-xs"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              {/* Total Price */}
              <p className="lg:text-xl text-base font-bold text-primary">
                Rs. {item.price * item.quantity}
              </p>
              {/* Remove Button */}
              <button
                className="btn-error text-error lg:btn-md btn-xs"
                onClick={() => removeFromCart(item.id)}
                aria-label="Remove Item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22m-5 0V5a2 2 0 00-2-2H8a2 2 0 00-2 2v2"
                  />
                </svg>
              </button>
            </div>
          ))}
          {/* Total Amount and Checkout Button */}
          <div className="flex flex-col lg:flex-row items-center lg:justify-end mt-4 border-t pt-4 space-y-4 lg:space-y-0 lg:space-x-4">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-800 lg:mr-24 mr-20">
              <span className="text-primary text-4xl">Rs. {totalAmount}</span>
            </h2>
            <Link href="/checkout">
              <button className="btn btn-primary w-full lg:w-auto text-white">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
