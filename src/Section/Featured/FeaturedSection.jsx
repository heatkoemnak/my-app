import React, { useState, useEffect } from 'react';
import { RxDoubleArrowDown } from 'react-icons/rx';
import { Title } from '../About/AboutSection';
import './featured.css';
import axios from 'axios';

import { Button } from '../About/AboutSection';
export default function FeaturedSection() {
  const [feature, setFeature] = useState([]);
  useEffect(() => {
    const fetchFeature = async () => {
      const res = await axios.get('http://localhost:3001/api/feature');
      setFeature(res.data);
    };
    fetchFeature();
  }, []);

  return (
    <>
      <div className="Wrapper">
        <Title>
          <h2>Our Features</h2>
          <RxDoubleArrowDown size="2rem" className="ArrowDownIcon" />
        </Title>

        <img
          src="https://www.danofficeit.com/media/3330/topbanner.png"
          alt=""
        />
        <h1>What We Do</h1>

        <div className="features">
          {feature.map((feature) => (
            <div className="feature" key={feature.id}>
              <div className="text">
                <img src={feature.image} alt="" width={150} />
                <div className="wrap">
                  <span className="span-text">{feature.description}</span>
                  <Button>How {feature.to}</Button>
                </div>
              </div>
              <h3>{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
