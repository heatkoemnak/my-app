import React from 'react';
import { Link } from 'react-router-dom';
export default function sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>Home</li>
        <li>Fashion</li>

        <Link to="/shop/shoes">
          <li>Shoes</li>
        </Link>

        <li>Watch</li>
        <li>Bag</li>
        <li>Accessory</li>
      </ul>
    </div>
  );
}
