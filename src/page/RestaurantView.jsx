import React, { useState, useEffect } from "react";
import "./RestaurantView.css"; // Ensure this path is correct
import { BsArrowLeftShort } from "react-icons/bs";
import { TiArrowRight } from "react-icons/ti";
import { offerUrl, SwiggyUrl } from "../constant";

const RestaurantView = () => {
  const [restdata, setrestdata] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await fetch(SwiggyUrl);
      const data = await response.json();
      setrestdata(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (restdata.length === 0) return <div>Data is coming...</div>;

  const cardMenu = restdata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
    info => info.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="restaurant-container">  
      <h2 className="restaurant-name">Urban Cafe</h2>
      <div className="restaurant-content">
        <p className="rating-info">
          ✨3.4 (2 ratings)<span> • ₹300 for two</span>
        </p>
        <p className="food-type" style={{ color: "green" }}>
          Snacks, Pizzas
        </p>
        <p className="location-info">
          Outlet <span>Chhindwara City</span>
        </p>
        <p className="delivery-time">55-60 mins</p>
      </div>

      <div className="dealsforyou">
        <div className="btn-container">
          <p style={{ fontSize: 'large', fontWeight: 'bold' }}>Deals for you</p>
          <div className="btn-container">
            <button style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid gray', backgroundColor: 'gray', color: '#fff', padding: '0', textAlign: 'center', fontSize: '14px' }} type="button" className="btn btn-outline-dark">
              <BsArrowLeftShort style={{ fontSize: '2rem' }} />
            </button>
            <button style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid gray', backgroundColor: 'gray', color: '#fff', padding: '0', textAlign: 'center', fontSize: '14px' }} type="button" className="btn btn-outline-dark">
              <TiArrowRight style={{ fontSize: '2rem' }} />
            </button>
          </div>
        </div>

        <div className="offer-container">
          {Array(3).fill(null).map((_, index) => (
            <div key={index} className="offer-one">
              <img src={offerUrl} width={'40px'} height={'40px'} alt="offeroneimg" />
              <div className="offer-para">
                <p>Extra ₹15 Off</p>
                <p style={{ fontSize: '10px', color: 'gray' }}>APPLICABLE OVER & ABOVE...</p>
              </div>
            </div>
          ))}
        </div>

        <h4 style={{ color: 'gray' }}> Restaurant Menu</h4>

        <div className="accordion" id="accordionExample">
          {cardMenu.map((category, index) => {
            const categoryTitle = category.card.card.title;
            const itemCards = category.card.card.itemCards;

            return (
              <div key={index} className="accordion-item">
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={index === 0}
                    aria-controls={`collapse${index}`}
                  >
                    <p style={{ fontWeight: 'bold' }}>{categoryTitle} ({category.card.card.itemCards.length})</p>
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {itemCards.map((item, itemIndex) => (
                      <div key={itemIndex} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <div>
                          <p>{item.card.info.name}</p>
                          <p>₹{Math.floor(item.card.info.price / 100)}</p>
                        </div>
                        <div style={{ position: 'relative' }}>
                          <img
                            style={{ width: '100px', height: '100px' }}
                            src={item.card.info.imageId ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}` : 'https://via.placeholder.com/100'}
                            alt={item.card.info.name}
                          />
                          <button style={{ padding: '5px', backgroundColor: 'green', outline: 'none', border: 'none', position: 'absolute', bottom: '0px', right: '25px' }}>Add</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantView;
