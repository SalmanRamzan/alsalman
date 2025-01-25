"use client";

import React, { useEffect, useState } from "react";
import CollectionCard from "./CollectionCard";
import Link from "next/link";

export default function Collections() {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch("https://strapi-ecommerce-zguy.onrender.com/api/collections?populate=img");
        if (!response.ok) {
          throw new Error("Failed to fetch collections");
        }
        const data = await response.json();
        setCollections(data.data); // Strapi's `data` field contains the products
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4 py-24">
        {/* Skeletons for the loading state */}
        <div className="grid gap-4">
          <div className="h-48 w-full bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="h-48 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="h-48 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="h-48 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="h-48 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1 className="lg:text-5xl text-3xl font-semibold text-center mx-auto w-3/5 pt-16 lg:pt-28 pb-3 capitalize">
        shop by catagories
      </h1>
      <p className="text-xs lg:text-base text-center text-gray-500 italic pb-8 lg:pb-16">
        Our products are designed for everyone.
      </p>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4 py-8">
        {/* Column 1 */}
        <div className="grid gap-4">
          {/* First Item */}
          <CollectionCard
            key={collections[0].id}
            documentId={collections[0].documentId}
            imageUrl={collections[0].img.url}
            name={collections[0].name}
            descr={collections[0].descr}
          />
          {/* Second and Third Items */}
          <div className="grid lg:grid-cols-2 gap-4">
            {collections.slice(1, 3).map((collection) => (
              <CollectionCard
                key={collection.id}
                documentId={collection.documentId}
                imageUrl={collection.img.url}
                name={collection.name}
                descr={collection.descr}
              />
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="grid gap-4">
          {/* Fourth Item */}
          <CollectionCard
            key={collections[3].id}
            documentId={collections[3].documentId}
            imageUrl={collections[3].img.url}
            name={collections[3].name}
            descr={collections[3].descr}
          />
          {/* Fifth Item */}
          <CollectionCard
            key={collections[4].id}
            documentId={collections[4].documentId}
            imageUrl={collections[4].img.url}
            name={collections[4].name}
            descr={collections[4].descr}
          />
        </div>
      </div>
    </>
  );
}
