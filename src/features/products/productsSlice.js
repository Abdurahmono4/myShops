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
      productsSlice.caseReducers.calculateTotal(state);
    },
    decreaseAmount: (state, { payload }) => {
      const item = state.products.find((product) => {
        return product.id === payload;
      });
      item.amount -= 1; // Decrease the amount by 1
      productsSlice.caseReducers.calculateTotal(state);
    },

    removeItem: (state, { payload }) => {
      state.products = state.products.filter((product) => {
        return product.id != payload;
      });

      console.log(state.products);

      productsSlice.caseReducers.calculateTotal(state);
    },
    calculateTotal: (state) => {
      let price = 0;
      let amount = 0;
      let total = 30;

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
