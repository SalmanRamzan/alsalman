import Link from 'next/link';

export default function Footer({brand, logo}) {
  return (
    <footer className="footer bg-base-100 text-base-content p-8 lg:px-32 border-t-2 border-base-200 justify-evenly py-12">
      <aside>
        {logo ? (
            <Link href="/"><img src={logo} alt={brand} className="lg:h-16 h-12 lg:w-28 w-24" /></Link>
        ) : (
          <Link href="/" className="lg:text-3xl text-xl font-semibold">{brand}</Link>
        )}
        <p className="w-1/2 py-3">
          We are providing reliable white label products all over the Pakistan.
        </p>
        <ul className="font-bold lg:text-base text-sm">
            <li>Address: <span className="font-normal">Multan.</span></li>
            <li>Contact: <span className="font-normal">+92-3156029913</span></li>
        </ul>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link href="/" className="link link-hover">
          Branding
        </Link>
        <Link href="/" className="link link-hover">
          Design
        </Link>
        <Link href="/" className="link link-hover">
          Marketing
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
        <Link href="/contact" className="link link-hover">
          Shop
        </Link>
        <Link href="/" className="link link-hover">
          Contact
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