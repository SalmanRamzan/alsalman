import React from "react";
import Link from "next/link";

export default function CollectionCard({
  documentId,
  imageUrl,
  name,
  descr
}) {
  return (
    <div className="card bg-base-100 shadow-2xl">
      <figure className="h-48 overflow-hidden mb-3">
        <Link href={`/collections/${documentId}`} passHref target="_blank">
          <img
            src={imageUrl}
            alt={name || "Collection"}
            className="w-full h-full object-cover cursor-pointer"
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-semibold">{name}</h2>
        <p className="text-gray-700 text-sm mb-2">{descr}</p>
      </div>
    </div>
  );
}
