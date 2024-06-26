import Button from "../components/Button";
import Footer from "../components/Footer";
import NewsLetterSection from "../components/NewsLetterSection";
import productData from '../data/index.json';
import { getUniqueCategories } from "../utils";


export default function RootLayout({ children }) {
  const categories = getUniqueCategories(productData.products);
  return (

    <>

      <div className="h-[500px] bg-center flex flex-col-reverse bg-cover w-full bg-[url('/assets/header.webp')]"></div>
      <main>
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
          <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
            <Button path='/category'>
              All
            </Button>

            {

              categories.map(category => <Button key={category} path={`/category/${category.toLowerCase()}`} >
                {category}
              </Button>)
            }

          </div>
          {children}
        </section>
        <NewsLetterSection />
      </main>
      <Footer />
    </>

  );
}

