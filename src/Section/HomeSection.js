import React from 'react'
import { styled } from "styled-components";
import landGreen from "../asset/land-green.jpg"


const Section = styled.div`
    height: 150vh;
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
    right:0;
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

    const Features = styled.div`
    display:flex;
    position:absolute;
    top: 100%;
    left: 50%;
    width:60%;
    transform: translate(-50%, -50%);
    font-size:1rem;
    font-weight: 500;
    text-align: center;
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    font-family: 'Nunito Sans', sans-serif;
    
    
    `
    const Text2 = styled.h2`
    position:absolute;
    top: 68%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size:1.5rem;
    font-weight: 500;
    text-align: center;
    color: #000;
    margin-bottom:100px;
    border-bottom:2px solid green;
    // text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    font-family: 'Nunito Sans', sans-serif;
    `
    const Feature = styled.div`
    margin:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:40%;
    cursor: pointer;
    font-weight:500;
    transition: all 0.3s ease-in-out;
    background-color: #fff;
    color:#000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    
    &:hover {
        background-color: gray;
        color:#fff;
    }
        `
        const Text = styled.h2`
        font-size:1.5rem;
        font-weight: 500;
        text-align: center;
        color: #000;
        margin-bottom:100px;
        border-bottom:2px solid yellow;
        
        `
        


export default function HomeSection() {
  
  return (
    <>
    <Image>
        <img src={landGreen} alt="" height={500} width={1519}/>
    </Image>
    <Section>
      <Search>
          <Input type="text" placeholder="Search for a material (plastic, bottle,etc.)" />
          <Button><i className="bx bx-search search-btn"></i>Search</Button>
      </Search>
      <Tex3>Right here you can sell, buy and recycle.</Tex3>
      <Text2>Our Features</Text2>
      <Title>
        <h1>Join With Us</h1>
        <h2>To Protect Our Environment</h2>
      </Title>
      <Start>Get Start For Free</Start>
      <Features>
        <Feature>
            <img src="https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={261} height={160}/>
            <Text>SELL</Text>
            </Feature>
        <Feature>
            <img src="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={261} height={160} />
            <Text>BUY</Text>
            </Feature>
        <Feature>
        <img src="https://images.pexels.com/photos/3850587/pexels-photo-3850587.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={261} height={160}/>
            <Text>RECYCLE</Text>
            </Feature>
      </Features>
      
    </Section>
    
    </>
  )
}
