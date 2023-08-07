import React from "react";
import "./CSS/home.css";
import "../style/Product.css";
import { useContext } from "react";
import CartContext from "../CartContext";
function Fashion() {
  const { fashion, addToCart } = useContext(CartContext);

  return (
    <>
      <div className="Product">
        {fashion.map((fashionItems) => {
          return (
            <>
              <div className="product-container" key={fashionItems.id}>
                <div className="product-image">
                  <img
                    src={fashionItems.image}
                    alt={fashionItems.name}
                    width={250}
                    s
                    height={250}
                  />
                </div>
                <div className="product-name">{fashionItems.name}</div>
                <div className="product-price">${fashionItems.price}</div>
                <div className="product-description">
                  {fashionItems.description}
                </div>
                <div className="product-action">
                  <button onClick={() => addToCart(fashionItems)}>
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

export default Fashion;
