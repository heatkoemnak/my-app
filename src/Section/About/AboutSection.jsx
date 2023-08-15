import React from 'react'

import { styled } from "styled-components";
import sodana from "../../asset/sodana.jpg";
import sopheak from "../../asset/sopheak.jpg";
import soumany from "../../asset/soumany.jpg";
import chhaylin from "../../asset/chhaylin.jpg";
import koemnak from "../../asset/koemnak.jpg";
import { RxDoubleArrowDown } from "react-icons/rx";
import { FaFacebook,FaGithub ,FaTwitterSquare} from "react-icons/fa";
import './about.css';

const Section = styled.div`
    display:flex;
    flex-direction:column;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    overflow:hidden;
    scrollbar-width: none;
    background-color:#220925;

    &::-webkit-scrollbar {

        display: none;

    }
`
const Teams = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #f5f9f9;
    color: #fff;
    border-top:2px solid #dbdee6;
    
    @media screen and(max-width :768px){
        h1{
            font-size: 2rem;
        }
        div{
            h2{
                font-size: 1.5rem;
            }
            p{
                font-size: 1rem;
            }
        }
    }
    @media only screen
    and (min-device-width: 768px)
    and (max-device-width: 1024px)
    and (-webkit-min-device-pixel-ratio: 1) {
        h1{
            font-size: 2rem;
        }
        div{
            h2{
                font-size: 1.5rem;
            }
            p{
                font-size: 1rem;
            }
        }
    }
    @media screen and (max-width: 480px) {
        h1{
            font-size: 2rem;  
        }
        div{
            h2{
                font-size: 1.5rem;
            }
            p{
                font-size: 1rem;
            }
        }
    }

   
`
const Team = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    background-color:#f7f5ff;
   
`
export const Title = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
        color: rgb(53, 53, 53);
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
        font-weight: 500;
    }

`
export const Button = styled.button`
display;flex;
    align-items:center;
    justify-content:space-between;
    border: none;
    outline: none;
    background-color: #23151d;
    color: #fff;
    font-weight: 300;
    padding: 5px 10px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    &:hover {
        background-color: #111;
        color: green;
    }



`


export default function AboutSection() {
  return (
    <Section>
      <Teams>
        <Title>
            <h2>Our Team</h2>
            <RxDoubleArrowDown size='2rem'color='#7cd553'/>
        </Title>
        <Team>
        
            <div className='profile'>
                <div className='image'>
                    <img src={sopheak} alt=''/>
                </div>
                <div className='TextInfo' >
                    <h2>Saing Sopheak</h2>
                    <span>Role</span>
                    <p>Backend & Server Side</p>
                    <div className='icons'>
                        <FaFacebook className='icon'/>
                        <FaGithub className='icon'/>
                        <FaTwitterSquare className='icon'/>
                    </div>
                    <Button>Read More..</Button>
                </div>
            </div>
            <div className='profile'>
                <div className='image'>
                    <img src={koemnak} alt=''/>
                </div>
                <div className='TextInfo' >
                    <h2>Heat Koemnak</h2>
                    <span>Role</span>
                    <p>Backend and Server</p>
                    <div className='icons'>
                            <FaFacebook className='icon'/>
                            <FaGithub className='icon'/>
                            <FaTwitterSquare className='icon'/>

                    </div>
                    <Button>Read More..</Button>
                </div>
            </div>
            <div className='profile'>
                <div className='image'>
                    <img src={soumany} alt=''/>
                </div>
                <div className='TextInfo' >
                    <h2>Sou Many</h2>
                    <span>Role</span>
                    <p>Frontend and Responsive</p>
         
                    <div className='icons'>
                            <FaFacebook className='icon' />
                            <FaGithub className='icon'/>
                            <FaTwitterSquare className='icon'/>

                    </div>
                    <Button>Read More..</Button>
                </div>
            </div>
            <div className='profile'>
                <div className='image'>
                    <img src={sodana} alt=''/>
                </div>
                <div className='TextInfo' >
                    <h2>Som Sodana</h2>
                    <span>Role</span>
                    <p>Frontend</p>
                    <div className='icons'>
                            <FaFacebook className='icon'/>
                            <FaGithub className='icon'/>
                            <FaTwitterSquare className='icon'/>

                    </div>
                    <Button>Read More..</Button>
                </div>
            </div>
            <div className='profile'>
                <div className='image'>
                    <img src={chhaylin} alt=''/>
                </div>
                <div className='TextInfo' >
                    <h2>Srun chhaylin</h2>
                    <span>Role</span>
                    <p>Check and Hosting</p>
                    <div className='icons'>
                            <FaFacebook className='icon'/>
                            <FaGithub className='icon'/>
                            <FaTwitterSquare className='icon'/>

                    </div>
                    <Button>Read More..</Button>
                </div>
            </div>
          
        </Team>
       
      </Teams>
      </Section>
  )
}
