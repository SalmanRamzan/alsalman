import Collections from "./components/CollectionList";
import FAQs from "./components/FAQs";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import ProductList from "./components/ProductList";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="">
        <Hero />
        <Collections />
        <Services />
        <ProductList />
        <Newsletter />
        <FAQs />
    </div>
  );
}
