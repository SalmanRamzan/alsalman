export default function Hero() {
    return (
      <div className="hero" style={{backgroundImage: "url(/Hair-Care-banner.png)", minHeight: '70vh'}}>
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-neutral-content text-center">
              <div className="lg:max-w-6xl max-w-6xl">
                  <h1 className="mb-5 lg:text-7xl text-5xl font-bold pb-10 text-white">Welcome to Alsalman Store!</h1>
                  <p className="mb-5 lg:text-xl font-semibold pb-2">
                      Get out latest deals of skin care, hair care, kitchen gadgets, baby accessories, home decor and many more products
                       at discounted prices.
                  </p>
                  <button className="btn lg:btn-lg btn-info btn-wide uppercase">Shop Now</button>
              </div>
          </div>
      </div>
    );
  }  