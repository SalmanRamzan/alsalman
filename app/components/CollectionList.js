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
        const response = await fetch("https://strapi-ecommerce-oi2p.onrender.com/api/collections?populate=img");
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

  if (loading) return <p>Loading collections...</p>;
  if (error) return <p>Error: {error}</p>;

  //const getImageUrl = (photos) => photos[3]?.url || "";
  return (
    <>
      <h1 className="lg:text-6xl text-3xl text-center my-6 pb-12 mx-auto w-3/5 border-b-2 border-primary py-12">Our Collections</h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-4 py-24">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} documentId={collection.documentId} imageUrl={collection.img.url} name={collection.name}
            description={collection.descr} />
        ))}
      </div>
    </>
  );
}
