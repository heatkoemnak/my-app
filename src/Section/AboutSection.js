import React from 'react'

import { styled } from "styled-components";
import sodana from "../asset/sodana.jpg";
import sopheak from "../asset/sopheak.jpg";
import soumany from "../asset/soumany.jpg";
import chhaylin from "../asset/chhaylin.jpg";
import koemnak from "../asset/koemnak.jpg";
import { RxDoubleArrowDown } from "react-icons/rx";

const FeatureMove = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    background-color: #f4fffb;
    color: gray;


`
const H2 = styled.div`
font-size:1.5rem;
    font-weight: 500;
    height:50px;
    text-align: center;
    font-family: 'Nunito Sans', sans-serif;
`
const Section = styled.div`
    height: 100vh;

    scroll-snap-type: y mandatory;

    scroll-behavior: smooth;

    overflow-y: auto;

    scrollbar-width: none;

    background-color:#220925;

    &::-webkit-scrollbar {

        display: none;

    }
`
const Teams = styled.div`
    width:100%;
    margin:2px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background-color: #220925;
    color: #fff;
    align-items: center;
    justify-content: center;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;

    }

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
                padding:3% ;
                }
          }

   
`
const Group = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
   
`
const Profile = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:#f8f2fd;
    padding:15px;
    margin:15px;
    img{
        width:200px;
        height:200px;
        border-radius:50%;

    }
    h2{
        font-size:1.5rem;
    }
    p{
        font-size:1rem;
    }



   
`
// const Section = styled.div`
   
// `


export default function AboutSection() {
  return (
      <Teams>
        <FeatureMove>
            <H2>Our Team</H2>
            <RxDoubleArrowDown size='3rem'color='#7cd553'/>
        </FeatureMove>
        <Group>
            <Profile>
              <img src={sopheak} alt=''width={200}/>
              <h2>Saing Sopheak</h2>
              <p>Team 1</p>
            </Profile>
            <Profile>
              <img src={koemnak} alt=''width={200}/>
              <h2>HeatKoemnak</h2>
              <p>Team 2</p>
            </Profile>
            <Profile>
              <img src={soumany} alt=''width={200}/>
              <h2>Sou Many</h2>
              <p>Team 3</p>
            </Profile>
          <Profile>
              <img src={sodana} alt=''width={200}/>
              <h2>Som Sodana</h2>
              <p>Team 4</p>
          </Profile>

            <Profile>
              <img src={chhaylin} alt=''width={200}/>
              <h2>Srun ChhayLin</h2>
              <p>Team 5</p>
            </Profile>
        </Group>
       
      </Teams>
  )
}
