import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer";
import { useState } from "react";
import Login from "./components/LoginPop/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {isLogin ? <Login setIsLogin={setIsLogin} /> : <></>}
      <div className=" w-[80%] mx-auto">
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
