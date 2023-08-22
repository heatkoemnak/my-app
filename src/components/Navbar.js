import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import CartContext from '../CartContext';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../asset/new_logo_anti.png';
import axios from 'axios';

function Navbar(props) {
  const { cart } = useContext(CartContext);
  const [navLink, setNavLink] = useState([]);
  useEffect(() => {
    const fetchFeature = async () => {
      const res = await axios.get('http://localhost:3001/api/navbar');
      setNavLink(res.data);
    };
    fetchFeature();
  }, []);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="anti" width={120} />
          </Link>
        </div>
        <div className="links-navigate">
          {navLink.map((item) => {
            return (
              <ul>
                <Link key={item.id} to={item.to}>
                  {item.title}
                </Link>
              </ul>
            );
          })}
          {/* <ul>
            <Link to="">Home</Link>
            <Link to="">Features</Link>
            <Link to="">About</Link>
            <Link to="">Contact</Link>
            <Link to="">FAQ</Link>
          </ul> */}
        </div>

        <div className="Icons">
          <Btn>
            <LogSignBtn>Login</LogSignBtn>
            <LogSignBtn>Register</LogSignBtn>
          </Btn>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

const Btn = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const LogSignBtn = styled.button`
  border: none;
  width: 110px;
  background-color: #56b74e;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #111;
    color: green;
  }
  font-family: 'Nunito Sans', sans-serif;
`;
