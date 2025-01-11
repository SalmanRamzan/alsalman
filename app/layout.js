import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Footer1 from "./components/Footer1";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext"; // Import the CartProvider
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alsalman Store",
  description: "Alsalman Ecommerce store for local ecommerce in Pakistan. Designed and developed by Engineer Salman Ramzan.",
};

export default function RootLayout({ children }) {
  let logo = "/alsalman-logo-new.png";
  const brand = "AlSalman";

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <Navbar brand={brand} color="bg-base-100" logo={logo} />
          {children}
          <Footer brand={brand} logo={logo} />
          <Footer1 brand={brand} />
        </CartProvider>
      </body>
    </html>
  );
}
