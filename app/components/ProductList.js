"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://strapi-ecommerce-oi2p.onrender.com/api/products?populate=photos");
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

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  const getImageUrl = (photos) => photos[3]?.url || ""; // Ensure correct access to Cloudinary URL

  return (
    <>
      <h1 className="lg:text-6xl text-3xl text-center my-6 pb-12 mx-auto w-3/5 border-b-2 border-primary py-12">New Arrival</h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 py-24">
        {products.map((product) => (
          <ProductCard key={product.id} documentId={product.documentId} imageUrl={getImageUrl(product.photos)} name={product.name}
            description={product.descr} discountedPrice={product.dprice} originalPrice={product.price} />
        ))}
      </div>
    </>
  );
}
