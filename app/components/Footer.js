import Link from 'next/link';

export default function Footer({brand, logo}) {
  return (
    <footer className="footer bg-neutral text-neutral-content p-8 lg:px-32 border-t-2 border-base-200 justify-evenly py-8">
      <aside>
        {logo ? (
            <Link href="/"><img src={logo} alt={brand} className="lg:h-32 h-28 lg:w-32 w-28" /></Link>
        ) : (
          <Link href="/" className="lg:text-3xl text-xl font-semibold">{brand}</Link>
        )}
        <p className="text-base w-1/2">
          We are providing reliable white label products all over the Pakistan.
        </p>
        <ul className="font-bold lg:text-base text-sm">
            <li>Address: <span className="text-sm">Bosan Road, Multan, Punjab.</span></li>
            <li>Contact: <span className="text-sm">+92-3156029913</span></li>
        </ul>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link href="/cart" className="link link-hover">
          Cart
        </Link>
        <Link href="/checkout" className="link link-hover">
          Chekout
        </Link>
        <Link href="/tracking" className="link link-hover">
          Tracking
        </Link>
        <Link href="/" className="link link-hover">
          Advertisement
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="/shop" className="link link-hover">
          Shop
        </Link>
        <Link href="/collections" className="link link-hover">
          All Collections
        </Link>
        <Link href="/contact" className="link link-hover">
          Contact Us
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link href="/" className="link link-hover">
          Terms of use
        </Link>
        <Link href="/" className="link link-hover">
          Privacy policy
        </Link>
        <Link href="/" className="link link-hover">
          Cookie policy
        </Link>
      </nav>
    </footer>
  );
}