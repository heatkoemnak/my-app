import React from "react";
import "./CSS/home.css";
import Product from "../components/Product";
import Slider from "../components/Slider";
import "../style/Product.css";
import "../style/header.css";
import { useContext } from "react";
import CartContext from "../CartContext";

function Home() {
  const { product, addToCart } = useContext(CartContext);

  return (
    <>
      <div className="home">
        <Slider />
      </div>
      <Product product={product} addToCart={addToCart}></Product>
    </>
  );
}

export default Home;
