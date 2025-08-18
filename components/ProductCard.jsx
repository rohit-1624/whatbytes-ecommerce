 "use client";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-4 flex flex-col items-center text-center hover:shadow-md transition">
      <img src={product.image} alt={product.name} className="w-28 h-28 object-contain mb-3" />
      <h4 className="font-medium text-gray-800">{product.name}</h4>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-lg font-semibold text-gray-900 mt-1">${product.price}</p>
      <button className="mt-3 w-full flex items-center justify-center gap-2 bg-black text-white text-sm py-2 px-3 rounded-lg hover:bg-gray-800">
        <ShoppingCart className="w-4 h-4" /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
