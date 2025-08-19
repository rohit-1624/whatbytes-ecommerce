"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { Star } from "lucide-react";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.product.products.find((p) => p.id === parseInt(id))
  );

  if (!product) return <p>Product not found</p>;

  return (
    // <div className="p-6">
    //   <h1 className="text-3xl font-bold">{product.name}</h1>
    //   <p className="mt-2">{product.description}</p>
    //   <p className="mt-2 font-semibold">Price: ${product.price}</p>
    // </div>

    <div className="bg-gray-200 min-h-screen flex justify-center items-center ">
      <div className="bg-white rounded-lg p-12 shadow-lg border w-6/12 space-y-6 my-12">
        <img src={product.image} className="w-[70%] mx-auto" />
        <h1 className="font-bold text-6xl">{product.title}</h1>
        <p className="text-gray-500 flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < product.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </p>
        <label className="font-semibold text-3xl text-gray-600">
          ${product.price}
        </label>
        <p className="text-gray-500">{product.desc}</p>
        <label className="bg-blue-600 px-6 py-2 rounded text-white capitalize font-semibold">
          {product.category}
        </label>
        <button className="bg-rose-600 px-6 py-2 rounded text-white font-semibold ml-6">
          Buy Now
        </button>
      </div>
    </div>
  );
}
