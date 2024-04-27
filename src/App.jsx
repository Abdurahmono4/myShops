import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-4xl mx-auto ">
      <Navbar />
      <h1>Counter</h1>
    </div>
  );
}

export default App;
