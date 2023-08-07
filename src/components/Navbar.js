import { useContext } from "react";
import CartContext from "../CartContext";

import { Link } from "react-router-dom";
import "../style/Navbar.css";
import logo from "../asset/new_logo_anti.png";
import "../App.css";





function Navbar(props) {
  const { cart } = useContext(CartContext);

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="logo">
          <Link className="item" to="/">
            <img src={logo} alt="anti" width={120} />
          </Link>
        </div>

        <div className="links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Service</li>
          </ul>
        </div>

        {/* <div className="search-bar">
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
        </div> */}
        <div className="icon">
          <div className="search">
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
          <div className="btn">
            <button>Login</button>
            <button>Register</button>
          </div>
        
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
