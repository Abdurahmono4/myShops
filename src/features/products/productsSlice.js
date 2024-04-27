import { createSlice } from "@reduxjs/toolkit";
import allProducts from "../../data";

const initialState = {
  products: allProducts,
  amount: 0,
  total: 30,
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
      productsSlice.caseReducers.calculateTotal(state);
    },
    decreaseAmount: (state, { payload }) => {
      const item = state.products.find((product) => {
        return product.id === payload;
      });
      item.amount += 1;
      productsSlice.caseReducers.calculateTotal(state);
    },
    removeItem: (state, { payload }) => {
      productsSlice.caseReducers.calculateTotal(state);
    },
    calculateTotal: (state) => {
      let price = 0;
      let amount = 0;
      let total = 0;

      state.products.forEach((product) => {
        amount = product.amount;
        price = product.price * product.amount;
      });
      state.price = price;
      state.total = total;
    },
  },
});

export const { increaseAmount, decreaseAmount, removeItem, calculateTotal } =
  productsSlice.actions;
export default productsSlice.reducer;
