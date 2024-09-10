import React, { useState, useEffect, useContext } from "react";
import "./RestaurantView.css"; // Ensure this path is correct
import { BsArrowLeftShort } from "react-icons/bs";
import { TiArrowRight } from "react-icons/ti";
import { offerUrl, SwiggyUrl } from "../constant";
import { StoreContext } from "../context/StoreContext";
import { AiOutlineClose } from "react-icons/ai";


const RestaurantView = () => {
  const [restdata, setrestdata] = useState([]);
  const { addItem } = useContext(StoreContext);
  const [showPopup, setShowPopup] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);


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

  const addHandler = (item) => {
    addItem(item);
    console.log("item",item);
  }


  const handleShowPopup = (item) => {
    setCurrentItem(item); // Save the current item
    setShowPopup(true);   // Show the popup
  };



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
          <p>Deals for you</p>
          <div className="btn-container">
            <button  type="button" className="btn btn-outline-dark">
              <BsArrowLeftShort style={{ fontSize: '2rem' }} />
            </button>
            <button type="button" className="btn btn-outline-dark">
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
                      <div key={itemIndex} style={{ display: 'flex', justifyContent: 'space-between',alignItems:'center',borderBottom: '1px solid gray',padding:'10px 0px' }}>
                        <div>
                          <p>{item.card.info.name}</p>
                          <p>₹{Math.floor(item.card.info.price / 100)}</p>
                        </div>
                        <div  className="accordion-add-img" onClick={()=>handleShowPopup(item)} >
                          <img
                            style={{ width: '100px', height: '100px',borderRadius:'10px',cursor:'pointer' }}
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                            alt={item.card.info.name}
                          />
                          <button onClick={(e)=> { e.stopPropagation(); addHandler(item)}} className="add-btn" >Add</button>
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
              {showPopup && (
                <div className="popup">
                   <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${currentItem.card.info.imageId}`}
                    alt={currentItem.card.info.name}
                    />
                  <div className="popup-content">
                  <div>
                    <p>{currentItem.card.info.name}</p>
                    <p>₹{Math.floor(currentItem.card.info.price / 100)}</p>
                    <p>✨{currentItem.card.info.ratings.aggregatedRating.rating} Rating</p>
                  </div>
                  <div>
                  <button onClick={()=> addHandler(currentItem)} className="popup-add" >Add</button>
                  </div>
                </div>

                <div onClick={() => setShowPopup(false)} className="popup-close">
                  <AiOutlineClose style={{fontSize:'1.5rem'}}/>
                </div>

                </div>

              )}

    </div>
  );
};

export default RestaurantView;
