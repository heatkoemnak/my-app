<<<<<<< HEAD
import React from 'react';
import { styled } from 'styled-components';
import landGreen from '../../asset/land-green.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import FeaturedSection from '../Featured/FeaturedSection';
import AboutSection from '../About/AboutSection';
import Navbar from '../../components/Navbar';

import './home.css';
import Overview from '../Overview/Overview';

export default function HomeSection() {
  return (
    <>
      <Navbar />
      <img className="banner-image" src={landGreen} alt="" />

      <SearchANDTitle>
        <Search>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <Input
            type="text"
            placeholder="Search for a material (plastic, bottle,etc.)"
          />
          <Button>Search</Button>
        </Search>
        <Title>
          <h1>Join With Us</h1>
          <h2>To Protect Our Environment</h2>
          <Link to="/shop">
            <Button>Review Products</Button>
          </Link>
        </Title>
      </SearchANDTitle>
      <Overview />
      <FeaturedSection />
      <AboutSection />
    </>
  );
}

const SearchANDTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;

const Title = styled.div`
    position:absolute;
    top: 30%; 
    left: 60%;
    width:100%
    font-size:2rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1rem;
    color: #fff;
    margin-bottom:100px;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    font-family: 'Nunito Sans', sans-serif;

`;

const Search = styled.div`
  position: absolute;
  top: 40%;
  left: 25%;
  transform: translate(-50%, -50%);
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
const Input = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 500;
  margin-left: 10px;
  font-family: 'Nunito Sans', sans-serif;
  width: 100%;
`;
const Button = styled.button`
    display;flex;
    align-items:center;
    justify-content:space-between;
    border: none;
    outline: none;
    background-color: #23151d;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    &:hover {
        background-color: #111;
        color: green;
    }
    `;
=======
>>>>>>> 7021793f7aa7b9ef77b9338700878170859173d3
