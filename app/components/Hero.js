export default function Hero() {
    return (
      <div className="hero" style={{backgroundImage: "url(/Hair-Care-banner.png)", minHeight: '70vh'}}>
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-neutral-content text-left">
              <div className="lg:max-w-8xl max-w-6xl">
                  <h1 className="mb-5 lg:text-7xl text-5xl font-bold pb-2 text-white">Welcome to <span className="text-yellow-600">Alsalman Store!</span></h1>
                  <p className="mb-5 lg:text-lg font-semibold pb-12">
                      Get out latest deals of skin care, hair care, kitchen gadgets, baby accessories, home decor and many more products
                       at discounted prices.
                  </p>
                  <button className="btn lg:btn-lg btn-md btn-primary w-full lg:w-96 uppercase">Shop Now</button>
              </div>
          </div>
      </div>
    );
  }  