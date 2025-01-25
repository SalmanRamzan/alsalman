"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Topbar = () => {
  const messages = [
    "🌟 Free Shipping All Over Pakistan | COD Available 🌟",
    "💥 Limited Time Offer: Get Up to 50% Off on Select Items 💥",
    "✨ Shop Now and Experience Comfort, Quality & Value ✨",
    "📦 Delivery in 2-3 Business Days Across Pakistan 📦",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000); // Change message every 3 seconds
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="bg-primary text-white">
      <div className="w-[94%] mx-aut py-2 px-4 flex justify-between items-center text-xs lg:text-sm">
        {/* Left Side: Social Media Icons (hidden on mobile) */}
        <div className="hidden sm:flex space-x-4">
          <Link href="https://facebook.com" target="_blank" className="hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="fill-current">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </Link>
          <Link href="https://instagram.com" target="_blank" className="hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="fill-current">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.932 4.932 0 002.163-2.723 10.125 10.125 0 01-3.127 1.184 4.922 4.922 0 00-8.39 4.482A13.978 13.978 0 011.671 3.15a4.903 4.903 0 001.524 6.573 4.902 4.902 0 01-2.23-.616v.061a4.935 4.935 0 003.95 4.83 4.996 4.996 0 01-2.212.084 4.936 4.936 0 004.604 3.417A9.864 9.864 0 010 21.543 13.95 13.95 0 007.548 24c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.59a9.803 9.803 0 01-2.047.98z" />
            </svg>
          </Link>
        </div>

        {/* Center: Promotional Messages Slider */}
        <div className="text-center font-semibold uppercase">
          <p className="transition-all duration-1000">{messages[currentMessageIndex]}</p>
        </div>

        {/* Right Side: WhatsApp Number */}
        <div className="text-right font-semibold">
          <Link href="https://wa.me/923043754421" target="_blank">
            📞 0304-3754421
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
