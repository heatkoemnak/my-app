import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';

import { RxDoubleArrowDown } from 'react-icons/rx';
import { FaFacebook, FaGithub, FaTwitterSquare } from 'react-icons/fa';
import './about.css';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow: hidden;
  scrollbar-width: none;
  background-color: #220925;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Teams = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f9f9;
  color: #fff;
  border-top: 2px solid #dbdee6;

  @media screen and(max-width :768px) {
    h1 {
      font-size: 2rem;
    }
    div {
      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    h1 {
      font-size: 2rem;
    }
    div {
      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
    div {
      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;
const Team = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #f7f5ff;
`;
export const Title = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: rgb(53, 53, 53);
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;
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



`;

export default function AboutSection() {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    const fetchTeam = async () => {
      const res = await axios.get('http://localhost:3001/api/team');
      setTeam(res.data);
    };
    fetchTeam();
  }, []);

  return (
    <Section>
      <Teams>
        <Title>
          <h2>Our Team</h2>
          <RxDoubleArrowDown size="2rem" color="#7cd553" />
        </Title>
        <Team>
          {team.map((item) => (
            <>
              <div className="profile">
                <div className="image" key={item.id}>
                  <img src={item.image} alt="" />
                </div>
                <div className="TextInfo">
                  <h2>{item.name}</h2>
                  <span>Role</span>
                  <p>{item.role}</p>
                  <div className="icons">
                    <FaFacebook className="icon" />
                    <FaGithub className="icon" />
                    <FaTwitterSquare className="icon" />
                  </div>
                  <Button>Read More..</Button>
                </div>
              </div>
            </>
          ))}
        </Team>
      </Teams>
    </Section>
  );
}
