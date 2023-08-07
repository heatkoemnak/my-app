import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Pages/CSS/fashion.css";
import { useContext } from "react";
import CartContext from "../CartContext";
function BagSlider() {
  const { bag, addToCart } = useContext(CartContext);
  const settings = {
    // dots: true,
    // infinite: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="fashion-Product">
        <Slider {...settings}>
          {bag.map((bags) => {
            return (
              <div className="fashion">
                <div className="fashion-img">
                  <img src={bags.image} alt={bags} />
                </div>
                <div className="fashion-name">{bags.name}</div>
                <div className="fashion-price">{bags.price}</div>
                <div className="fashion-description">{bags.description}</div>
                <button onClick={() => addToCart(bags)}>Add to cart</button>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default BagSlider;
