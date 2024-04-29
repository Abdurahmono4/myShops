// ProductsList.js
import {
  increaseAmount,
  decreaseAmount,
  removeItem,
  calculateTotal,
} from "../features/products/productsSlice.js";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ProductsList() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <div className="flex py-4 mb-10 container gap-8 flex-col">
      {products.map((product) => (
        <div className="card card-side bg-base-100 shadow-xl" key={product.id}>
          <figure>
            <img src={product.thumbnail} alt="Movie" className="w-86 h-86 " />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p className="text-2xl">Price: ${product.price}</p>
            <div className="flex gap-5 w-14">
              <button
                className="btn btn-error "
                onClick={() => {
                  dispatch(decreaseAmount(product.id));
                }}
              >
                -
              </button>
              <p className="font-bold text-2xl">{product.amount}</p>
              <button
                className="btn btn-info "
                onClick={() => {
                  dispatch(increaseAmount(product.id));
                }}
              >
                +
              </button>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary ">Add to bucket</button>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  dispatch(removeItem(product.id));
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
