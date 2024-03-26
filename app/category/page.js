import ProductCard from "../components/ProductCard";
import productData from '../data/index.json';
function CategoryPage() {

  return (
    <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
      {productData.products.map((product) => {

        return (
          <ProductCard key={product.id} product={product} />
        )
      })}
    </div>
  );
}

export default CategoryPage;
