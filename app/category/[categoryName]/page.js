import SingleProduct from "@/components/SingleProduct";
import { products } from "@/data/products";

export default function CategoryPage({ params: { categoryName } }) {
  const filteredProducts = products.filter((product) => {
    if (categoryName == "all") return product;
    else if (product.category == categoryName) return product;
  });

  return (
    <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
      {filteredProducts.map((fp) => (
        <SingleProduct key={fp.id} product={fp} />
      ))}
    </div>
  );
}
