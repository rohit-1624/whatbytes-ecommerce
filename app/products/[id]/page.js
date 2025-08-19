"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { Star } from "lucide-react";
import { useState } from "react";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.product.products.find((p) => p.id === parseInt(id))
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) return <p className="text-center mt-12">Product not found !</p>;

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center py-12">
      <div className="bg-white rounded-lg shadow-lg border w-10/12 grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-[80%] max-h-[400px] object-contain"
          />
        </div>

        <div className="flex flex-col space-y-6">
          <h1 className="font-bold text-4xl">{product.title}</h1>

          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={20}
                className={`${
                  i < Math.round(product.rating || 0)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <p className="text-3xl font-semibold text-gray-800">
            ${product.price}
          </p>

          <p className="text-gray-600">{product.desc}</p>

          <span className="bg-blue-600 px-4 py-1 rounded text-white capitalize font-medium w-fit">
            {product.category}
          </span>

          <div className="flex items-center gap-4">
            <label className="font-semibold">Quantity:</label>
            <button
              onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              -
            </button>
            <span className="px-3">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              +
            </button>
          </div>

          <div className="flex gap-4">
            <button className="bg-rose-600 px-6 py-2 rounded text-white font-semibold">
              Add to Cart
            </button>
            <button className="bg-green-600 px-6 py-2 rounded text-white font-semibold">
              Buy Now
            </button>
          </div>

          <div className="mt-6 border-t pt-4">
            <h2 className="font-bold text-xl mb-2">Customer Reviews</h2>
            <p className="text-gray-500 italic">No reviews yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
