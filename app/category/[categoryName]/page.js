import Products from "@/components/Products";
import SingleProduct from "@/components/SingleProduct";

export default function CategoryPage() {
  return (
    <div class="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
    </div>
  );
}
