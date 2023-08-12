import React from 'react'
import { styled } from "styled-components";
import landGreen from "../../asset/land-green.jpg"
import { VscOpenPreview } from "react-icons/vsc";
import { MdStar,MdOutlineStarHalf,MdGppGood } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaCubesStacked,FaCubes } from "react-icons/fa6";
import { BsFillEyeFill } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'



import FeaturedSection from '../Featured/FeaturedSection';
import Navbar from '../../components/Navbar';

import './home.css';

const MainContainer=styled.div`
    align-items:center;
    background-color: #197a12;
    background-image: linear-gradient(45deg, #197a12 0%, #5ed015 100%);
    justify-content:center;
    z-index:-5;

`
const SearchANDTitle=styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color: #fff;

`

const Title = styled.div`
    position:absolute;
    top: 20%; 
    left: 50%;
    width:100%
    font-size:2rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1rem;
    color: #fff;
    margin-bottom:100px;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    font-family: 'Nunito Sans', sans-serif;

`

const Search = styled.div`
    position:absolute;
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
    `
    const Input = styled.input`
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 500;
    margin-left: 10px;
    font-family: 'Nunito Sans', sans-serif;
    width:100%;
    `
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
    `

export default function HomeSection() {
  
  return (
    <>
    <Navbar/>
    <MainContainer>
            <img src={landGreen} alt="" height={500}/>
                <SearchANDTitle>
                    <Search>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        <Input type="text" placeholder="Search for a material (plastic, bottle,etc.)" />
                        <Button >Search</Button>
                    </Search>
                    <Title>
                        <h1>Join With Us</h1>
                        <h2>To Protect Our Environment</h2>
                        <Button>Get Start Shopping Here</Button>
                    </Title>
                    
                </SearchANDTitle>
    </MainContainer>
    <div className='overview'>
        <div className='card'>
            <div className='left'>
                <MdGppGood size='2rem' color='#4bd638' className='material-icon'/>
                <p>Quality</p>
            </div>
            <div className='right'>
                <h2>4.3</h2>
                <MdStar color='#b2e92f'/>
                <MdStar color='#b2e92f'/>
                <MdOutlineStarHalf color='#b2e92f'/>
                <h3>Ratting</h3>
            </div>
        </div>
        <div className='card'>
            <div className='left '>
                <HiUsers size='2.2rem'color='#4bd638' className='material-icon' />
                <p>Users</p>
            </div>
            <div className='right'>
                <AiFillPlusCircle size='1.5rem'color='#4bd638'/>
                <h2>254</h2>
                <h3>Total</h3>
            </div>
        </div>
        <div className='card'>
            <div className='left'>
                <FaCubesStacked  size='2.2rem' color='#4bd638' className='material-icon' />
                <p>Materials</p>
            </div>
            <div className='right'>
            <FaCubes size='1.5rem'color='#4bd638'/>
                <h2>1506</h2>
                <h3>Total</h3>
            </div>
        </div>
        <div className='card'>
            <div className='left'>
                <VscOpenPreview size='2rem' color='#4bd638' className='material-icon'/>
                <p>Viewer</p>
            </div>
            <div className='right'>
                <BsFillEyeFill size='1.5rem'color='#4bd638'/>
                <h2>2401</h2>
                <h3>Total</h3>
            </div>
        </div>

    </div>
    <FeaturedSection/>
    
    </>
  )
}
