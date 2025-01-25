"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://strapi-ecommerce-zguy.onrender.com/api/products?populate=photos");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.data); // Strapi's `data` field contains the products
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getImageUrl = (photos) => photos[3]?.url || ""; // Ensure correct access to Cloudinary URL

  if (loading) {
    return (
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 py-24">
        {/* Skeletons for loading products */}
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="h-64 w-full bg-gray-200 rounded-lg animate-pulse"></div>
          ))}
      </div>
    );
  }

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1 className="lg:text-5xl text-3xl font-semibold text-center mx-auto w-3/5 pt-16 lg:pt-28 pb-3 capitalize">
        our bestsellers
      </h1>
      <p className="text-xs lg:text-base text-center text-gray-500 italic pb-8 lg:pb-16">
        Best selling products of our store.
      </p>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 py-24">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            documentId={product.documentId}
            imageUrl={getImageUrl(product.photos)}
            name={product.name}
            description={product.descr}
            discountedPrice={product.dprice}
            originalPrice={product.price}
          />
        ))}
      </div>
    </>
  );
}
