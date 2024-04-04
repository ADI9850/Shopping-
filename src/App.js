import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ProductList from "./component/ProductList";
import Cart from "./component/Cart";

const App = ({ Catagories }) => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const addToCart = (data) => {
    console.log(data);
    setCart([...cart, data]);
  };

  const remove = (productRemove) => {
    setCart(cart.filter((cartItem) => cartItem !== productRemove));
  };
  const handleShow = (value) => {
    setShow(value);
  };
  return (
    <>
      <Navbar handleShow={handleShow} />
      <div>
        {show ? (
          <Cart cart={cart} remove={remove} />
        ) : (
          <ProductList product={Catagories} addToCart={addToCart} />
        )}
      </div>
      <Footer />
    </>
  );
};
export default App;
