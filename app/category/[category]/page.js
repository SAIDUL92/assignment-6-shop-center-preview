import ProductCard from "../../components/ProductCard";
import productData from '../../data/index.json';

function CategoryDetailsPage({ params }) {

  const category = params.category;
  const products = productData.products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CategoryDetailsPage;
