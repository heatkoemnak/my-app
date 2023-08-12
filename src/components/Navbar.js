import { useContext } from "react";
import CartContext from "../CartContext";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../asset/new_logo_anti.png";



function Navbar(props) {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <WrapperContainer>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="anti" width={120} />
          </Link>
        </div>
        <div className="links">
          <ul>
              <li>Home</li>
              <li>Features</li>
              <li>About</li>
              <li>Contact</li>
              <li>FAQ</li>
          </ul>
        </div>

        <div className="Icons">
          <div className="search">
            <i className="bx bx-search search-btn"></i>
          </div>
          <CartIcon>
            <Link to="/cart">
              <CartBtn className="bx bxs-cart-download ">
                <div className="count-item">
                  <CartCount>{cart.length}</CartCount>
                </div>
              </CartBtn>
            </Link>
          </CartIcon>
          <Btn>
            <LogSignBtn>Login</LogSignBtn>
            <LogSignBtn>Register</LogSignBtn>
          </Btn>
        
        </div>
        
      </WrapperContainer>
      </Container>
     
  );
}


export default Navbar;

const Container= styled.div`
  width:100%;
  position:fixed;
  display:flex;
  height:100px;
  align-items:center;
  top:0;
  background-color:#fffffa;
  z-index:1;

`

const  WrapperContainer = styled.div`
  width:80%;
  display:flex;
  margin:0 auto;
  justify-content: space-between;
  align-items:center;


`


const CartIcon = styled.div`
position: relative;
padding: 15px;

`
const CartCount = styled.div`
position: absolute;
  top: 1px;
  right: 1px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ff0000;
  color: #ffffff;
  text-align: center;
  line-height: 20px;
  font-size: 0.8rem;
`
const CartBtn = styled.div`
font-size: 1.5rem;
  color: #000000;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;

`
const Btn = styled.div`
  display: flex;
  align-items: center;
  gap:10px;


`
const LogSignBtn=styled.button`
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

`