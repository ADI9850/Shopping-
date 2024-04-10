import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ProductList from "./component/ProductList";
import Cart from "./component/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Catagories from "./component/Catagories"; // Assuming Catagories is imported here
import ProductDetail from "./component/ProductDetail";
import LoginForm from "./component/LoginForm";

const App = () => {
  console.log("Products array:", Catagories);
  const [cart, setCart] = useState([]);

  const addToCart = (data) => {
    setCart([...cart, data]);
  };

  const remove = (productRemove) => {
    setCart(cart.filter((cartItem) => cartItem !== productRemove));
  };

  // Define handleCloseLoginForm function to close the login form
  const handleCloseLoginForm = () => {
    // Logic to handle closing the login form goes here
    console.log("Closing login form");
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ProductList products={Catagories} addToCart={addToCart} />}
        />
        <Route
          path="/product/:productId"
          element={<ProductDetail products={Catagories} />}
        />
        <Route path="/cart" element={<Cart cart={cart} remove={remove} />} />
        <Route
          path="/login"
          element={<LoginForm onClose={handleCloseLoginForm} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
