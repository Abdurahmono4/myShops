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
      item.amount -= 1;
      productsSlice.caseReducers.calculateTotal(state);
    },
    removeItem: (state, { payload }) => {
      productsSlice.caseReducers.calculateTotal(state);
    },
    calculateTotal: (state) => {
      let totalPrice = 0;
      let totalAmount = 0;

      state.products.forEach((product) => {
        totalAmount += product.amount;
        totalPrice += product.price * product.amount;
      });

      state.amount = totalAmount;
      state.total = totalPrice;
    },
  },
});

export const {
  increaseAmount,
  decreaseAmount,
  removeItem,
  calculateTotal,
  totalAmount,
  totalPrice,
  products,
  amount,
  total,
  price,
} = productsSlice.actions;
export default productsSlice.reducer;
