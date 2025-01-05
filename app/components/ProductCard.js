import React from "react";
import Link from "next/link";

export default function ProductCard({
  documentId,
  imageUrl,
  name,
  description,
  discountedPrice,
  originalPrice,
}) {
  return (
    <div className="card bg-base-100 shadow-2xl">
      <figure className="h-60 overflow-hidden mb-3">
        <Link href={`/products/${documentId}`} passHref target="_blank">
          <img
            src={imageUrl}
            alt={name || "Product"}
            className="w-full h-full object-fill cursor-pointer"
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-semibold">{name}</h2>
        {/* <p className="text-gray-700 text-sm mb-2">{description}</p> */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-primary mr-3">
              Rs. {discountedPrice}
            </span>
            <span className="text-xl font-semibold text-gray-500 line-through">
              {originalPrice}
            </span>
          </div>
          <button className="btn btn-ghost btn-circle bg-base-200 text-primary">
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
