import Image from 'next/image';

export default function Hero() {
  return (
    <div className="pt-24 min-h-fit w-full grid grid-cols-1 md:grid-cols-2 bg-gradient-to-tr from-gray-200 to-blue-100">
      {/* Right Grid (Image) */}
      <div className="order-1 md:order-2 flex justify-center items-center">
        <Image
          src="/cucumbergirl-skincare-bgrm.png"
          alt="Skincare products"
          width={1500}
          height={1500}
          className="object-fill"
        />
      </div>

      {/* Left Grid (Content) */}
      <div className="order-2 md:order-1 flex flex-col justify-center items-start p-6 lg:p-8 lg:px-24">
        <p className="text-xs lg:text-sm uppercase text-primary font-semibold mb-4 lg:mb-8 p-2">
          New Collection
        </p>
        <h1 className="capitalize text-4xl lg:text-6xl font-bold leading-10 mb-3 lg:mb-4 lg:w-1/2 p-2">
          Get the skin you want to feel
        </h1>
        <p className="text-base leading-6 lg:text-lg mb-8 lg:w-2/3 p-2">
          Discover our range of skincare products designed to rejuvenate and nourish your skin. 
          Feel confident and radiant every day. Embrace a natural glow with our specially crafted formulas, 
          tailored to address every skin type. Whether you're looking to hydrate, protect, or restore, 
          our collection has everything you need to look and feel your best. Let your skin radiate with health 
          and beauty like never before.
        </p>
        <button className="btn lg:btn-lg btn-primary text-white font-bold flex items-center shadow-lg uppercase w-full lg:w-56 mb-4">
          Shop Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};