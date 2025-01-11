import React from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function ProductCard({ documentId, imageUrl, name, descr, discountedPrice, originalPrice }) {
  const { addToCart } = useCart();

  // Create a product object using props
  const product = {
    id: documentId,
    imageUrl,
    name,
    description: descr,
    price: discountedPrice,
    originalPrice,
  };

  const handleAddToCart = () => {
    addToCart(product, 1); // Add one quantity of the product
  };

  // Calculate discount percentage
  const discountPercentage = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);

  return (
    <div className="card bg-base-100 shadow-2xl relative">
      {/* Discount badge */}
      {discountPercentage > 0 && (
        <div className="badge badge-accent absolute p-3 top-3 right-3 z-10 font-semibold">
          {discountPercentage}% OFF
        </div>
      )}
      <figure className="h-60 overflow-hidden mb-2">
        <Link href={`/products/${documentId}`} passHref>
          <img
            src={imageUrl}
            alt={name || "Product"}
            className="w-full h-full object-fill cursor-pointer"
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold">{name}</h2>
        <p className="text-gray-700 text-sm mb-2">{descr}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="lg:text-xl text-lg font-bold text-primary mr-3">
              Rs. {discountedPrice}
            </span>
            <span className="lg:text-xl text-lg font-semibold text-gray-500 line-through">
              {originalPrice}
            </span>
          </div>
          <button
            className="btn btn-ghost btn-circle bg-base-200 text-primary"
            onClick={handleAddToCart}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:size-8 size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
