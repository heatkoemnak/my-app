import React from 'react'
import './header.css'
import logo from "../asset/new_logo_anti.png";
import { MdShoppingCart } from "react-icons/md";

export default function Header() {
  return (
    <div className='main'>
      <div className="wrap-container">
        <div className='logo-image'>
          <img src={logo} alt="" width={100}  />
        </div>
        <div className="search">
          <input type="text" placeholder='search product..' />
          <button>Search</button>
        </div>
        <div className="right-side">
          <div className="cart">
            <MdShoppingCart size='1.5rem'/>
            <span>0</span>
          </div>
          <div className="login">
            <span>Login</span>
          </div>
        </div>
      </div>
    </div>
  )
}
