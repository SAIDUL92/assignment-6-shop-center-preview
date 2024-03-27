import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NewsLetterSection from "./components/NewsLetterSection";
import ProductCard from "./components/ProductCard";
import productData from './data/index.json';

export default function Home() {

  return (
    <>
      <HeroSection />

      <main>
        <>
          {/* Product section start */}
          <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
              {productData.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
          {/* Product section start */}
          <NewsLetterSection />
          <Footer />
        </>
      </main>
    </>
  );
}
