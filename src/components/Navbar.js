import { useContext } from "react";
import CartContext from "../CartContext";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import logo from "../asset/new_logo_anti.png";
import "../App.css";

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  background-color: rgb(255, 255, 255);
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  

`;

const WrapContainer= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 10px auto;
  padding: 0 4rem;

`
const Logo = styled.div`
  width: 120px;
 
`
const Links = styled.div`
align-items: center;
justify-content: center;

`
const List = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
font-size: 1.2rem;

`
const ListItem = styled.li`
list-style: none;
cursor: pointer;
transition: all 0.3s ease-in-out;

`
const Icon = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`
const SearchIcon = styled.div`

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

function Navbar(props) {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <WrapContainer>
        <Logo>
          <Link to="/">
            <img src={logo} alt="anti" width={120} />
          </Link>
        </Logo>

        <Links>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Contact</ListItem>
            <ListItem>Service</ListItem>
          </List>
        </Links>

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
        <Icon>
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
          <div className="btn">
            <button>Login</button>
            <button>Register</button>
          </div>
        
        </Icon>
        
      </WrapContainer>
    </Container>
  );
}

export default Navbar;
