import React from 'react'
import { styled } from "styled-components";
import landGreen from "../asset/land-green.jpg"


const Section = styled.div`
    height: 60vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:0 auto;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
        
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
    position: absolute;
    top: 0;
    left: 0;
    z-index:-10;
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
    display:flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    background-color: #97dd92;
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
    `
    const Start = styled.button`
    position:absolute;
    top: 60%;
    left: 75%;
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
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
 


export default function HomeSection() {
  
  return (
    <>
    <Image>
        <img src={landGreen} alt="" height={500} width={1500}/>
    </Image>
    <Section>
      <Search>
          <Input type="text" placeholder="Search for a material (plastic, bottle,etc.)" />
          <Button><i className="bx bx-search search-btn"></i>Search</Button>
      </Search>
          <Tex3>Right here you can sell, buy and recycle.</Tex3>
      
      <Title>
        <h1>Join With Us</h1>
        <h2>To Protect Our Environment</h2>
      </Title>
      <Start>Get Start For Free</Start>
        
      
      
    </Section>
    <div>
        <h3>Geevsdc</h3>
      </div>
    </>
  )
}
