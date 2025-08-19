import ProductList from "@/components/ProductPage";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <ProductList />
      </div>
    </div>
  );
}
