import { useContext } from "react";
import CartContext from "../CartContext";

import { Link } from "react-router-dom";
import "../style/Navbar.css";
import logo from "../asset/anti.png";
import "../App.css";

function Navbar(props) {
  const { cart } = useContext(CartContext);

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="logo">
          <Link className="item" to="/">
            <img src={logo} alt="anti" width={300} />
          </Link>
        </div>

        <div className="search-bar">
          <button
            className="all-menu"
            onClick={() => {
              props.handleMenu(false);
            }}
          >
            <i className="menu-text">All Categories</i>
          </button>
          <input
            className="search-input"
            type="text"
            placeholder="Search for products"
          />
          <i className="bx bx-search search-btn"></i>
        </div>
        <div className="nav-icon">
          <Link to="/cart">
            <i className="bx bxs-cart-download cart-icon ">
              <div className="count-item">
                <span className="value-count">{cart.length}</span>
              </div>
            </i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
