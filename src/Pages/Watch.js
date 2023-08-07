import React from "react";
import "./CSS/home.css";
import "../style/Product.css";
import { useContext } from "react";
import CartContext from "../CartContext";

function Watch() {
  const { watch, addToCart } = useContext(CartContext);

  return (
    <>
      <div className="Product">
        {watch.map((watchItems) => {
          return (
            <>
              <div className="product-container" key={watchItems.id}>
                <div className="product-image">
                  <img
                    src={watchItems.image}
                    alt={watchItems.name}
                    width={250}
                    height={250}
                  />
                </div>
                <div className="product-name">{watchItems.name}</div>
                <div className="product-price">${watchItems.price}</div>
                <div className="product-description">
                  {watchItems.description}
                </div>
                <div className="product-action">
                  <button onClick={() => addToCart(watchItems)}>
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

export default Watch;
