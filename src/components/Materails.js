import React from "react";
import material1 from "../asset/glass-bottles.jpg";
import material2 from "../asset/can_i_recycle_header.png";
import material3 from "../asset/E-waste.jpg";
import material4 from "../asset/glass-bottles-recycling.jpg";
import material5 from "../asset/organics_recycling.jpg";
import material6 from "../asset/light_bulb recycling.jpg";
import material7 from "../asset/paper_recycling.jpg";
import material8 from "../asset/mental_recycling.jpg";
import "../style/Materails.css";
function Materails() {
  const MATERIALS = [
    {
      id: 5,
      name: "Mini Luvis",
      image: material1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 8,
      name: "Mini Luvis",
      image: material2,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 9,
      name: "Mini Luvis",
      image: material3,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      name: "Mini Luvis",
      image: material4,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      name: "Mini Luvis",
      image: material5,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 6,
      name: "Mini Luvis",
      image: material6,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 7,
      name: "Mini Luvis",
      image: material7,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 8,
      name: "Mini Luvis",
      image: material8,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <>
      <div className="materails">
        {MATERIALS.map((materail) => (
          <div className="materails__container">
            <div className="materails__card">
              <img src={materail.image} alt="" width={50} height={50} />
              <div className="materails__info">
                <h3>{materail.name}</h3>
                <p>{materail.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Materails;
