import Collections from "./components/CollectionList";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <div className="">
        <Hero />
        <ProductList />
        <Collections />
    </div>
  );
}
