import { createSlice } from "@reduxjs/toolkit";
import allProducts from "../../data";

const initialState = {
  products: allProducts,
  amount: 0,
  total: 0,
  price: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increaseAmount: (state, { payload }) => {
      const item = state.products.find((product) => {
        return product.id === payload;
      });
      item.amount += 1;
    },
    decreaseAmount: (state, { payload }) => {
      const item = state.products.find((product) => {
        return product.id === payload;
      });
      item.amount += 1;
    }, 
  },
});

export default productsSlice.reducer;
