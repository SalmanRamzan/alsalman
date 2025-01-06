import Link from 'next/link';

// Reusable Menu Component
function Menu() {
    return (
      <>
        <li><Link href="/">Home</Link></li>
          <li>
            <details>
              <summary><Link href="/shop">Shop</Link></summary>
              <ul className="p-4">
                <li><Link href="/haircare">Hair Care</Link></li>
                <li><Link href="/skincare">Skin Care</Link></li>
                <li><Link href="/babyaccessories">Baby Accessories</Link></li>
                <li><Link href="/kitchengadgets">Kitchn Gadgets</Link></li>
                <li><Link href="/homedecor">Home Decor</Link></li>
              </ul>
            </details>
          </li>
          <li><Link href="/contact">Contact</Link></li>
      </>
    );
  }
  
function NavStart() {
  return (
    <div className="navbar-start">
        {/* Desktop Menu */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex text-base"><Menu /></ul>

        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"><Menu /></ul>
        </div>

      </div>
  );
}

function NavMid({ brand, logo }) {
    return (
      <div className="navbar-center">
        {logo ? (
            <Link href="/"><img src={logo} alt={brand} className="lg:h-14 h-12 lg:w-28 w-24" /></Link>
        ) : (
          <Link href="/" className="lg:text-3xl text-xl font-semibold">{brand}</Link>
        )}
      </div>
    );
}
  

function NavEnd() {
  return (
    <div className="navbar-end">
        {/* Serach Icon */}
        <button className="btn text-primary btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="lg:size-6 size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
        {/* Serach Icon End*/}


        {/*Cart Icon*/}
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="lg:size-6 size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm badge-primary indicator-item">8</span>
                </div>
            </div>
            <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn btn-success btn-block">View cart</button>
                    </div>
                </div>
            </div>
        </div>
        {/* cart icon end */}
    </div>
  );
}

export default function Navbar({brand, logo, color}) {
  return (
    <div className={`navbar ${color} lg:px-20 px-2 border-b-2 border-blue-200 shadow-lg fixed z-50`}>
      <NavStart />
      <NavMid brand={brand} logo={logo}/>
      <NavEnd />
    </div>
  );
}
