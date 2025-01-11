"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";

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
          `https://strapi-ecommerce-zguy.onrender.com/api/products/${documentId}?populate=*`
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

  if (loading) {
    return (
      <div className="container mx-auto py-24">
        <div className="flex flex-col lg:flex-row gap-12 p-4">
          {/* Skeleton for Image Gallery */}
          <div className="lg:w-1/2">
            <div className="rounded-2xl shadow-lg mb-4 skeleton skeleton-lg"></div>
            <div className="flex gap-2 overflow-x-auto">
              <div className="skeleton skeleton-sm w-20 h-20 rounded-lg"></div>
              <div className="skeleton skeleton-sm w-20 h-20 rounded-lg"></div>
              <div className="skeleton skeleton-sm w-20 h-20 rounded-lg"></div>
            </div>
          </div>

          {/* Skeleton for Product Details */}
          <div className="lg:w-1/2">
            <div className="skeleton skeleton-lg mb-2"></div>
            <div className="rating rating-sm mb-4">
              <div className="skeleton skeleton-xs w-24 h-4"></div>
            </div>
            <div className="skeleton skeleton-md mb-8"></div>
            <div className="skeleton skeleton-md w-24 h-8"></div>
            <div className="skeleton skeleton-md w-48 h-8 mt-8"></div>
            <div className="skeleton skeleton-md w-48 h-8 mt-4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) return <p>Error: {error}</p>;

  const { name, descr, dprice, price, photos, collection } = product;

  const getImageUrls = (photos) => photos.map((photo) => photo.url);

  const handleQuantityChange = (action) => {
    setQuantity((prevQuantity) => {
      if (action === "increment") return prevQuantity + 1;
      if (action === "decrement" && prevQuantity > 1) return prevQuantity - 1;
      return prevQuantity;
    });
  };

  const imageUrls = getImageUrls(photos);

  const { addToCart } = useCart();

  // Create a product object using props
  const prod = {
    id: documentId,
    imageUrl: imageUrls[0],
    name,
    description: descr,
    price: dprice
  };

  const handleAddToCart = () => {
    addToCart(prod, 1); // Add one quantity of the product
  };

  const discountPercentage = Math.round(((price - dprice) / price) * 100);

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
          <h1 className="lg:text-4xl text-3xl font-bold mb-2">{name}</h1>
          {/* Start Ratings */}
          <div className="rating rating-sm mb-4">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-600" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-600" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-600" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-600" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
            <span className="ml-3 lg:text-base text-sm text-gray-400 font-semibold">(157 Reviews)</span>
          </div>
          <p className="lg:text-lg text-base text-gray-700 mb-8">{descr}</p>
          <div className="mb-4">
            
            <span className="lg:text-3xl text-2xl font-bold text-neutral mr-3">Rs. {dprice}</span>
            <span className="lg:text-3xl text-2xl font-semibold text-gray-400 line-through">Rs. {price}</span>
            <span className="ml-8">
              {/* Discount Badge */}
              {discountPercentage > 0 && (
                <div className="badge badge-accent font-semibold lg:p-4 p-2">
                  {discountPercentage}% OFF
                </div>
              )}
            </span>
          </div>

          {/* Quantity, Add to Cart, and Buy Now */}
          <div className="flex flex-col lg:flex-row w-full items-center gap-4 mb-4">
            {/* Increment-Decrement and Add to Cart (On the same line for mobile and desktop) */}
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="flex items-center">
                <button
                  className="btn btn-outline btn-neutral rounded-full btn-sm"
                  onClick={() => handleQuantityChange("decrement")}
                >
                  -
                </button>
                <span className="px-5 lg:text-2xl text-xl font-semibold">{quantity}</span>
                <button
                  className="btn btn-outline btn-neutral rounded-full btn-sm"
                  onClick={() => handleQuantityChange("increment")}
                >
                  +
                </button>
              </div>

              <button className="btn btn-md shadow-md btn-primary btn-outline lg:w-2/3 lg:mr-36 w-80" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>

            {/* Buy Now (Full-width on mobile, same line on desktop) */}
            <button className="btn btn-md shadow-md shadow-primary btn-primary text-white lg:w-1/3 w-full" onClick={handleAddToCart}>
              <Link href="/cart">Buy Now</Link>
            </button>
          </div>

          {/* Features */}
          <div className="mt-6">
            <h3 className="lg:text-lg text-base font-semibold mb-2">Features:</h3>
            <ul className="pl-5 lg:text-lg text-base">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700 mb-1">
                  <span className="text-primary mr-2">
                    {/* Check Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="lg:size-6 size-4">
                      <circle cx="12" cy="12" r="10" className="text-emerald-500" fill="currentColor" />
                      <path
                        d="M8.5 13.5l3 3 5-5"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

            {/* Specs */}
            <div className="mt-6">
              <h3 className="lg:text-lg text-base font-semibold mb-2">Specifications:</h3>
              <ul className="pl-5 lg:text-lg text-base">
                {Object.entries(product.specs).map(([key, value], index) => (
                  <li key={index} className="flex items-center text-gray-700 mb-1">
                    <span className="text-green-600 mr-2">
                      {/* Check Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="lg:size-6 size-4">
                        <circle cx="12" cy="12" r="10" className="text-emerald-500" fill="currentColor" />
                        <path
                          d="M8.5 13.5l3 3 5-5"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-semibold capitalize">{key.replace(/_/g, " ")}:&nbsp;</span> {value}
                  </li>
                ))}
              </ul>
            </div>

            {/* Collection Name */}
            {collection && (
              <button className="btn lg:btn-md mt-8">
              <span className="lg:text-lg text-base text-primary">Collection</span>
              <div className="badge badge-neutral">{collection.name}</div>
            </button>
            )}
        </div>
      </div>
    </div>
  );
}
