// ProductsList.js

import React from "react";
import productsData from "../data"; // Import your exported default information

function ProductsList() {
  return (
    <div className="flex py-4 mb-10 container gap-8 flex-col">
      {productsData.map((product) => (
        <div className="card card-side bg-base-100 shadow-xl" key={product.id}>
          <figure>
            <img src={product.thumbnail} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>Price: ${product.price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
