"use client";
import { useState } from "react";
import { Star, ShoppingCart } from "lucide-react";

const ProductPage = () => {
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState([1000]);

  const categories = ["All", "Electronics", "Clothing", "Home"];
  const brands = ["Nike", "Adidas", "Samsung", "Apple"];

  const products = [
    { id: 1, title: "Smartphone", price: 499, category: "Electronics", image: "https://via.placeholder.com/200x150", rating: 4 },
    { id: 2, title: "Casual T-shirt", price: 25, category: "Clothing", image: "https://via.placeholder.com/200x150", rating: 5 },
    { id: 3, title: "Sofa Chair", price: 199, category: "Home", image: "https://via.placeholder.com/200x150", rating: 3 },
    { id: 4, title: "Headphones", price: 99, category: "Electronics", image: "https://via.placeholder.com/200x150", rating: 4 },
    { id: 5, title: "Running Shoes", price: 79, category: "Footwear", image: "https://via.placeholder.com/200x150", rating: 5 },
    { id: 6, title: "Wrist Watch", price: 149, category: "Accessories", image: "https://via.placeholder.com/200x150", rating: 4 },
    { id: 7, title: "Microwave Oven", price: 299, category: "Home Appliances", image: "https://via.placeholder.com/200x150", rating: 4 },
  ];

  const filteredProducts = products.filter(
    (p) => (category === "All" || p.category === category) && p.price <= price[0]
  );

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      {/* Sidebar (2/6 width) */}
      <div className="md:w-4/12 flex flex-col gap-12 ">
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
                    className="accent-white"
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

      {/* Main Product Grid (4/6 width) */}
      <div className="md:w-9/12 ml-8">
        <p className="text-black text-xl font-bold mb-8">Product Listing</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 space-x-19 space-y-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white w-60 shadow rounded-2xl overflow-hidden flex flex-col">
              <img src={product.image} alt={product.title} className="h-40 w-full object-cover" />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                <p className="text-gray-700 mb-2">${product.price}</p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>

                {/* Add to Cart */}
                <button className="mt-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
