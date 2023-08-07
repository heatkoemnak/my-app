import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Slider.css";
import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../asset/banner4.jpg";
import image3 from "../asset/banner5.jpg";
import image4 from "../asset/s001.png";
import image5 from "../asset/banner8.png";
import image9 from "../asset/banner9.jpg";
import image10 from "../asset/banner10.jpg";

import loca from "../asset/loca.avif";

function CamSlider() {
  const settings = {
    // dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  const location = [
    {
      id: 1,
      name: "Singapore",
      image: loca,
    },
    {
      id: 2,
      name: "Philips",
      image: loca,
    },
    {
      id: 3,
      name: "Thailand",
      image: loca,
    },
    {
      id: 1,
      name: "Cambodia",
      image: loca,
    },
    
  ];

  const [selectImage, setSelectImage] = useState(1);
  const [allImage] = useState([
    image1,
    image3,
    image4,
    image5,
    image9,
    image10,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectImage < allImage.length - 1) {
        setSelectImage(selectImage + 1);
      }
      if (selectImage === allImage.length - 1) {
        setSelectImage(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="main-campagn">
        <div className="feature">
          
          <div className="location">
            <Slider {...settings}>
              {location.map((locationItems) => {
                return (
                  <div className="location-item" key={locationItems.id}>
                    <div className="location-img">
                      <img
                        src={locationItems.image}
                        alt={locationItems.name}
                        width={210}
                      />
                    </div>
                    <div className="location-name">{locationItems.name}</div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <Link className="feature-list">All Product Type</Link>
        </div>
        <div className="banner">
          <img src={allImage[selectImage]} alt="all" />
        </div>
      </div>
    </>
  );
}

export default CamSlider;
