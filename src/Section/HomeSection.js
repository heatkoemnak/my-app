import React from 'react'
import { styled } from "styled-components";
import landGreen from "../asset/land-green.jpg"
import {IconContext} from 'react-icons';
import {FaShopify, FaTag } from "react-icons/fa6";
import { RxDoubleArrowDown } from "react-icons/rx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecycle,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const MainContainer=styled.div`
    width:100%;
    height:100%;
    align-items:center;
    background-color: #197a12;
    background-image: linear-gradient(45deg, #197a12 0%, #5ed015 100%);
    justify-content:center;
    z-index:-5;

`
const Section = styled.div`
    width:100%;
    height:100%;
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
    font-size:2rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1rem;
    color: #fff;
    margin-bottom:100px;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    font-family: 'Nunito Sans', sans-serif;

`
const Image = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
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
    const Tex3 = styled.h3`
    position:absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size:1rem;
    font-weight: 500;
    text-align: center;
    color: #fff;
    margin-bottom:100px;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    font-family: 'Nunito Sans', sans-serif;
    
    `

    const Features = styled.div`
    display:flex;
    width:100%;
    margin:0 auto;
    font-size:1rem;
    font-weight: 500;
    text-align: center;
    color: #fff;
    font-family: 'Nunito Sans', sans-serif;
    `
    
    const Feature = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:15px;
    width:100%;
    cursor: pointer;
    font-weight:500;
    transition: all 0.3s ease-in-out;
    background-color: #f4fffb;
    color:#000;
    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.1);
    &:hover {
        background-color: #f3f6f5;
        color:#fff;
    }
    `
    const H2 = styled.h2`
    font-size:1.5rem;
    font-weight: 500;
    height:50px;
    text-align: center;
    font-family: 'Nunito Sans', sans-serif;
    `
    const Text = styled.p`
    font-size:1.5rem;
    font-weight: 500;
    text-align: center;
    color: #000;
    margin-bottom:100px;
    border-bottom:2px solid yellow;
        
    `
    const FeatureMove = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    cursor: pointer;
    font-weight:500;
    transition: all 0.3s ease-in-out;
    background-color: #f4fffb;
    color:#000;
    `





export default function HomeSection() {
  
  return (
    <>
    <MainContainer>
        <IconContext.Provider value={{ size:'3rem', color:'#7cd553'}}>
            <Image>
                <img src={landGreen} alt="" height={500} width={1519}/>
            </Image>
            <Section>
                <SearchANDTitle>
                    <Search>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        <Input type="text" placeholder="Search for a material (plastic, bottle,etc.)" />
                        <Button >Search</Button>
                    </Search>
                    <Title>
                        <h1>Join With Us</h1>
                        <h2>To Protect Our Environment</h2>
                        <Button>Get Start For Free</Button>
                    </Title>
                    
                </SearchANDTitle>
                <FeatureMove>
                    <H2>Our Features</H2>
                    <RxDoubleArrowDown/>
                </FeatureMove>
                <img src='https://www.danofficeit.com/media/3330/topbanner.png' alt=''width={1519}/>
                <Features>
                        <Feature>
                            <img src="https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={265} height={160}/>
                            <FaTag/>
                            <Text>SELL</Text>
                        </Feature>
                        <Feature>
                            <img src="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={260} height={160} />
                            <FaShopify/>
                            <Text>BUY</Text>
                        </Feature>
                        <Feature>
                            <img src="https://images.pexels.com/photos/3850587/pexels-photo-3850587.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={260} height={160}/>
                            <FontAwesomeIcon icon={faRecycle} size='3x' color='#7cd553' />
                            <Text>RECYCLE</Text>
                        </Feature>
                </Features>
                
            </Section>
    </IconContext.Provider>
    </MainContainer>
    
    </>
  )
}
