import React from "react";
import { assets } from "../../assets/assets";
import "./Chooseus.css";

const Chooseus = () => {
  const cards = [
    {
      imgSrc: assets.select1,
      heading: "Quality Food",
      para: "But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.",
    },
    {
      imgSrc: assets.select2,
      heading: "Healthy Food",
      para: "But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.",
    },
    {
      imgSrc: assets.select3,
      heading: "Fast Delivery",
      para: "But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.",
    },
  ];

  return (
    <div className="select-display" id="select-display">
      <h2>Why Choose Us</h2>
      <div className="row mt-md-4 mt-0">
        {cards.map((card, index) => (
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
            <div className="p-md-5 p-3 card text-center card-hover d-flex align-items-center justify-content-center mt-xl-0 mt-lg-4 mt-md-4 mt-4">
              <img
                src={card.imgSrc}
                className="card-img-top "
                alt={`Card ${index + 1}`}
                style={{ width: "100px", height: "100px" }}
              />
              <div className="card-body">
                <h4 style={{ fontWeight: 600 }} className="card-title">
                  {card.heading}
                </h4>
                <p className="card-text mt-2 text-left">{card.para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chooseus;
