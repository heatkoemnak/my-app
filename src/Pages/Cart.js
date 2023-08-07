import React from "react";
import "../Pages/CSS/cart.css";
import { useContext } from "react";
import CartContext from "../CartContext";
import { Link } from "react-router-dom";
import paypal from "../asset/paypal.png";
import visa from "../asset/Visa.png";
import mastercard from "../asset/mastercard--600.png";
function Cart() {
  const { cart, qty, removeItemFromCart, qtyMinus } = useContext(CartContext);

  return (
    <>
      <div className="cart">
        <div className="cart-list">
          <div className="cart-header">
            <i class="bx bxl-shopify"></i>
            <h2>CART PREVIEW</h2>
          </div>

          {cart.map((cartItem) => {
            return (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-image">
                  <img
                    src={cartItem.image}
                    alt=""
                    width={120}
                    height={120}
                  ></img>
                  <div className="cart-text">
                    <div className="cart-item-name">{cartItem.name}</div>
                    <div className="cart-item-price">${cartItem.price}</div>
                    <div className="qty">
                      <div>
                        <button onClick={() => qtyMinus(cartItem.id)}>-</button>
                        <input
                          type="text"
                          value={cartItem.quantity}
                          readOnly
                        ></input>

                        <button onClick={() => qty(cartItem.id)}>+</button>
                      </div>
                      <div className="sub-qty">x {cartItem.quantity}</div>
                    </div>
                  </div>
                </div>
                <div
                  className="delete"
                  onClick={() => removeItemFromCart(cartItem.id)}
                >
                  <i class="bx bx-x"></i>
                </div>
              </div>
            );
          })}
          <div className="total-price">
            <div className="Total">Total</div>
            <div className="price">
              $
              {cart
                .reduce((total, item) => {
                  return total + item.price * item.quantity;
                }, 0)
                .toFixed(2)}
            </div>
          </div>
          <p className="continue-shopping">
            <Link to="/">
              <i class="bx bxs-chevron-left"></i>Continue Shopping
            </Link>
          </p>
        </div>
        <div className="payment">
          <h2>Order Summary</h2>
          <div className="total-item">
            <h3>Total items:</h3>
            <p>x {cart.length}</p>
          </div>
          <div className="total-item">
            <h3>Total Price:</h3>
            USD
            <p>
              {cart
                .reduce((total, item) => {
                  return total + item.price * item.quantity;
                }, 0)
                .toFixed(2)}
            </p>
          </div>
          <div className="payment-header">
            <h2>Payment Method</h2>
          </div>

          <div className="payment-method">
            <div className="payment-label">
              <input type="radio" name="payment" id="payment2" />
              <label htmlFor="payment2">Credit Cart</label>
            </div>
            <div className="payment-image">
              <img src={visa} alt="visa" width={50} height={40} />
              <img src={mastercard} alt="mastercard" width={50} height={40} />
            </div>
          </div>
          <div className="payment-method">
            <div className="payment-label">
              <input type="radio" name="payment" id="payment1" />
              <label htmlFor="payment1">Paypal</label>
            </div>

            <div className="payment-image">
              <img src={paypal} alt="paypal" width={50} height={40} />
            </div>
          </div>
          <div className="payment-btn">
            <div className="cart-number">
              <input type="text" id="cart-number" placeholder="Cart Number:" />
            </div>
            <div className="cart-number">
              <div className="cart-name">
                <input type="text" id="cart-number" placeholder="First name:" />
              </div>
              <div className="cart-name">
                <input type="text" id="cart-number" placeholder="Last name:" />
              </div>
            </div>
            <div className="cart-number">
              <input type="text" id="cart-number" placeholder="Cart Date:" />
            </div>
            <div className="cart-number">
              <input type="text" id="cart-number" placeholder="CVV:" />
            </div>
            <div className="cart-number">
              <input type="text" id="cart-number" placeholder="Zip Code:" />
            </div>
            <button className="purchese">Purchese</button>
            <button className="cancel">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
