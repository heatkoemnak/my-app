import React from "react";
import "./CSS/home.css";
import "../style/Product.css";
import { useContext } from "react";
import CartContext from "../CartContext";
function Bag() {
  const { bag, addToCart } = useContext(CartContext);

  return (
    <>
      <div className="Product">
        {bag.map((bagItems) => {
          return (
            <>
              <div className="product-container" key={bagItems.id}>
                <div className="product-image">
                  <img
                    src={bagItems.image}
                    alt={bagItems.name}
                    width={250}
                    height={250}
                  />
                </div>
                <div className="product-name">{bagItems.name}</div>
                <div className="product-price">{bagItems.price}</div>
                <div className="product-description">
                  {bagItems.description}
                </div>
                <div className="product-action">
                  <button onClick={() => addToCart(bagItems)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Bag;
