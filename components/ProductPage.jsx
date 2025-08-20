"use client";
import { useState } from "react";
import Link from "next/link";   
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { Star, ShoppingCart } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredProducts } from "@/redux/slices/productSlice";
import { addToCart } from "@/redux/slices/cartSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState([1000]);

  const categories = ["All", "Electronics", "Clothing", "Home", "Footwear"];
  const brands = ["Nike", "Adidas", "Samsung", "Apple"];

  const searchedProducts = useSelector(selectFilteredProducts);

  const filteredProducts = searchedProducts.filter(
    (p) => (category === "All" || p.category === category) && p.price <= price[0]
  );

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));

    Swal.fire({
    icon: "success",
    title: "Added to Cart",
    text: `${product.title} has been added to your cart.`,
  });
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      <div className="md:w-3/12 flex flex-col gap-12 ">
        <div className="bg-blue-600 text-white p-4 rounded-2xl">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          {/* Category */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Category</h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value={cat}
                    checked={category === cat}
                    onChange={() => setCategory(cat)}
                    className="accent-gray-900"
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Price</h3>
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={price[0]}
              onChange={(e) => setPrice([Number(e.target.value)])}
              className="w-full cursor-pointer"
            />
            <div className="flex justify-between text-sm mt-2">
              <span>0</span>
              <span>{price[0]}</span>
            </div>
          </div>
        </div>

        {/* Brand */}
        <div className="bg-white text-black p-4 rounded-2xl">
          <div>
            <h3 className="font-bold mb-2">Brand</h3>
            <div className="flex flex-col gap-2">
              {brands.map((b) => (
                <label key={b} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-white" />
                  <span>{b}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Product Grid */}
      <div className="md:w-9/12 ml-8">
        <p className="text-black text-xl font-bold mb-8">Product Listing</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 space-x-25 space-y-12">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white w-60 shadow rounded-2xl overflow-hidden flex flex-col cursor-pointer hover:scale-105 transition"
              >
                <Link href={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-40 w-full object-cover"
                  />
                </Link>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                  <p className="text-gray-700 mb-2">₹{product.price}</p>

                  <div className="flex gap-1 mb-4">
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
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
                  >
                    <ShoppingCart size={18} /> Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
