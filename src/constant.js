export const offerUrl = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/rng/md/ads/production/d07196b25b85d1fd9951e10c255ab737';
export const SwiggyUrl = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=509851&catalog_qa=undefined&submitAction=ENTER';


{/* <div className="accordion" id="accordionExample">
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

              )} */}
