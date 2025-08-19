import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("cartProducts")) || []
    : [],
};

const saveToLocalStorage = (products) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cartProducts", JSON.stringify(products));
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.products.find((p) => p.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }
      saveToLocalStorage(state.products);
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
      saveToLocalStorage(state.products);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.products.find((p) => p.id === id);
      if (product && quantity > 0) {
        product.quantity = quantity;
      }
      saveToLocalStorage(state.products);
    },

    clearCart: (state) => {
      state.products = [];
      saveToLocalStorage(state.products);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export const selectCartProducts = (state) => state.cart.products;

export const selectCartTotal = (state) =>
  state.cart.products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

export default cartSlice.reducer;
