import React from "react";
import "./CSS/home.css";
import "../style/Product.css";
import { useContext } from "react";
import CartContext from "../CartContext";

function Shoes() {
  const { shoes, addToCart } = useContext(CartContext);

  return (
    <>
      <div className="Product">
        {shoes.map((productItem) => {
          return (
            <>
              <div className="product-container" key={productItem.id}>
                <div className="product-image">
                  <img
                    src={productItem.image}
                    alt={productItem.name}
                    width={250}
                    height={250}
                  />
                </div>
                <div className="product-name">{productItem.name}</div>
                <div className="product-price">${productItem.price}</div>
                <div className="product-description">
                  {productItem.description}
                </div>
                <div className="product-action">
                  <button onClick={() => addToCart(productItem)}>
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

export default Shoes;
