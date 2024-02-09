import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Checkout from "./components/Checkout";
import { Footer } from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Checkout />
      <Footer />
    </div>
  );
}

export default App;
