import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import { calculateTotal } from "./features/products/productsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductsList from "./components/ProductsList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, []);
  return (
    <div className="max-w-4xl mx-auto ">
      <Navbar />
      <ProductsList />
      <p>
        <span className="">Total Price:</span>
        <span className="">{useSelector((state) => state.products.total)}</span>
        <span className="">$ .00</span>
      </p>

      <h1>Counter</h1>
    </div>
  );
}

export default App;
