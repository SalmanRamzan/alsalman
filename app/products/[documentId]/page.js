"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const { documentId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://strapi-ecommerce-oi2p.onrender.com/api/products/${documentId}?populate=photos`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [documentId]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;

  const { name, descr, dprice, price, photos } = product;

  const getImageUrls = (photos) => photos.map((photo) => photo.url);

  const handleQuantityChange = (action) => {
    setQuantity((prevQuantity) => {
      if (action === "increment") return prevQuantity + 1;
      if (action === "decrement" && prevQuantity > 1) return prevQuantity - 1;
      return prevQuantity;
    });
  };

  const imageUrls = getImageUrls(photos);

  return (
    <div className="container mx-auto py-24">
      <div className="flex flex-col lg:flex-row gap-12 p-4">
        {/* Image Gallery */}
        <div className="lg:w-1/2">
          {/* Main Image */}
          <div className="rounded-2xl shadow-lg mb-4">
            <img
              src={imageUrls[activeImage]}
              alt={`Product Image ${activeImage + 1}`}
              className="w-full object-cover lg:rounded-3xl rounded-xl"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 rounded-lg cursor-pointer border-2 ${
                  activeImage === index
                    ? "border-primary"
                    : "border-gray-200 hover:border-primary"
                }`}
                onClick={() => setActiveImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2">
          <h1 className="lg:text-4xl text-2xl font-bold mb-2">{name}</h1>
          {/* Strat Ratings */}
          <div className="rating lg:rating-sm rating-xs mb-4">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-600" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-600" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-600" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-600" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
            <span className="ml-3 lg:text-sm text-xs text-gray-400 font-smeibold">(157 Reviews)</span>
          </div>
          <p className="lg:text-base text-sm text-gray-700 mb-8">{descr}</p>
          <div className="mb-4">
            <span className="lg:text-3xl text-2xl font-bold text-neutral mr-3">Rs. {dprice}</span>
            <span className="lg:text-2xl text-xl font-semibold text-gray-400 line-through">Rs. {price}</span>
          </div>

          {/* Quantity, Add to Cart, and Buy Now */}
          <div className="flex items-center gap-4 mb-4">
            {/* Increment-Decrement */}
            <div className="flex items-center w-28">
              <button className="btn btn-outline btn-neutral rounded-full btn-sm" onClick={() => handleQuantityChange("decrement")}>
                -
              </button>
              <span className="px-4 text-lg font-semibold">{quantity}</span>
              <button className="btn btn-outline btn-neutral rounded-full btn-sm" onClick={() => handleQuantityChange("increment")}>
                +
              </button>
            </div>

            {/* Buttons */}
            <button className="btn btn-primary btn-outline w-1/3">Add to Cart</button>
            <button className="btn btn-primary text-white w-1/3">Buy Now</button>
          </div>

            {/* Features */}
            <div className="mt-6">
                <h3 className="lg:text-lg text-base font-semibold mb-2">Features:</h3>
                <ul className="list-disc pl-5 lg:text-base text-sm">
                {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-700 mb-1">
                    {feature}
                    </li>
                ))}
                </ul>
            </div>

        </div>
      </div>
    </div>
  );
}
