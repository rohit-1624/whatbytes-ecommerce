import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, title: "Running Shoes", price: 99, category: "Footwear", image: "/images/shoes.avif", rating: 4, desc: "Comfortable running shoes for everyday use." },
    { id: 2, title: "Wireless Headphones", price: 429, category: "Electronics", image: "/images/headphone.avif", rating: 5, desc: "Noise-cancelling headphones with long battery life." },
    { id: 3, title: "Backpack", price: 129, category: "Home", image: "/images/backpack.avif", rating: 3, desc: "Durable backpack suitable for travel and work." },
    { id: 4, title: "SmartWatch", price: 249, category: "Electronics", image: "/images/smartwatch.avif", rating: 4, desc: "Smartwatch with health tracking features." },
    { id: 5, title: "Smartphone", price: 699, category: "Electronics", image: "/images/smartphone.avif", rating: 5, desc: "Latest smartphone with high-performance camera." },
    { id: 6, title: "Digital Camera", price: 499, category: "Electronics", image: "/images/camera.jfif", rating: 4, desc: "High resolution digital camera for photography." },
    { id: 7, title: "T-shirt", price: 29, category: "Clothing", image: "/images/tshirt.avif", rating: 4, desc: "Casual cotton t-shirt available in multiple sizes." }
  ],
  selectedProduct: null,
  searchQuery: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSelectedProduct, setSearchQuery } = productSlice.actions;

export const selectFilteredProducts = (state) => {
  const slice = state.products ?? state.product ?? initialState;
  const query = (slice.searchQuery || "").toLowerCase();
  return (slice.products || []).filter(
    (p) =>
      p.title.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
  );
};

export default productSlice.reducer;
