import { configureStore } from "@reduxjs/toolkit";
// Correct import for a default export
import productsReducer from "/src/features/products/productsSlice.js";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
