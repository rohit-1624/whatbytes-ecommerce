"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "@/redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products || []);

  // Update product quantity
  const handleQuantityChange = (id, e) => {
    const qty = parseInt(e.target.value);
    if (qty > 0) {
      dispatch(updateQuantity({ id, quantity: qty }));
    }
  };

  // Remove product
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // Total price
  const totalPrice = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {products.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          {/* Products List */}
          <div className="flex-1 space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center p-4 border rounded-lg shadow"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{product.title}</h2>
                    <p className="text-gray-600">₹{product.price}</p>
                  </div>
                </div>

                {/* Quantity & Remove */}
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="1"
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(product.id, e)}
                    className="w-16 border p-1 text-center rounded"
                  />
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="w-full md:w-1/3 p-6 border rounded-lg bg-gray-50 h-fit">
            <h2 className="text-2xl font-bold mb-4">Price Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>₹50.00</span>
            </div>
            <div className="flex justify-between font-semibold text-lg border-t pt-2 mt-2">
              <span>Total:</span>
              <span>₹{(totalPrice + 50).toFixed(2)}</span>
            </div>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
