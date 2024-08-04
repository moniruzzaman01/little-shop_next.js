import ProductDetails from "@/components/ProductDetails";

export default function ProductsPage({ params: { id } }) {
  console.log(id);
  return (
    <div>
      <ProductDetails id={id} />
    </div>
  );
}
