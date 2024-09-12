import React from 'react'
import RestaurantCard from './RestaurantCard';
import rectangle from "../../assets/rectangle.png"
import map from "../../assets/map.png"
import "./RestaurantView.css"
import { assets } from '../../assets/assets';
import { IoIosRestaurant } from "react-icons/io";
import { MdApps } from 'react-icons/md';
import ButtonWithArrows from '../../helper/ButtonWithArrows';



const RestaurantView = () => {

  const staticFoodList = [
    {
      _id: "1",
      name: "Pizza Margherita",
      description: "Classic delight with 100% real mozzarella cheese",
      price: 12.99,
      image: assets.img1,
      category: "Pizza",
    },
    {
      _id: "2",
      name: "Spaghetti Bolognese",
      description: "Traditional Italian pasta with meat sauce",
      price: 10.99,
      image: assets.img2,
      category: "Rolls",
    },
    {
      _id: "3",
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with Caesar dressing",
      price: 8.99,
      image: assets.img1,
      category: "Salad",
    },
    {
      _id: "4",
      name: "Cheeseburger",
      description: "Juicy grilled beef patty with cheese, lettuce, and tomato",
      price: 9.99,
      image: assets.img2,
      category: "Deserts",
    },
    {
      _id: "5",
      name: "Sushi Platter",
      description: "Assorted sushi rolls with fresh fish and vegetables",
      price: 18.99,
      image: assets.img1,
      category: "Sushi",
    },
    {
      _id: "6",
      name: "Veg",
      description: "Assorted  with fresh vegetables",
      price: 18.99,
      image: assets.img1,
      category: "Pure Veg",
    },
    {
      _id: "7",
      name: "Cake",
      description: "Delicious Cakes",
      price: 18.99,
      image: assets.img1,
      category: "Cake",
    },
    {
      _id: "7",
      name: "Pasta",
      description: "Alfredo Pasta",
      price: 18.99,
      image: assets.img1,
      category: "Pasta",
    },
  ];




  return (
      <div className="restaurantview-container">

          <div className="banner">
              <img src={rectangle} alt="" />
          </div>

          <div className="offer-title">
            <p>Offers from The Melting Pie's in East Dubliin</p>
            <input type="text" placeholder='Search from menu' />
          </div>

          <div className="offer-image-container">
                <div className='offer-image'>
                  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc" alt="" />
                </div>
                <div className='offer-image'>
                  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc" alt="" />
                </div><div className='offer-image'>
                  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc" alt="" />
                </div>
                
          </div>


            <div className="box-three-container">
              <h2>Pizza</h2>
              <div className="card-container">
              {staticFoodList.map(foodItem => (
                <RestaurantCard
                  key={foodItem._id}
                  name={foodItem.name}
                  description={foodItem.description}
                  price={foodItem.price}
                  image={foodItem.image}
                />
                ))}
              </div>

                <div className='view-more-container'>
                  <button>View More</button>
                </div>
            </div>


            <div className="box-four-container">
              <h2 className='menu-heading'>Explore Our Complete Menu</h2>
                  <div className="navigation-card-container">
                      <div className="navigation">
                          <div className='menu'>
                            <IoIosRestaurant style={{fontSize:'2rem'}}/>
                            <p>Menu</p>
                          </div>
                        <div className='nav'>
                          <p style={{backgroundColor:'#0B0f25',color:'white'}}>Burger</p>
                          <p>Garlic</p>
                          <p>Pizza</p>
                          <p>Kebabas</p>
                          <p>Salads</p>
                          <p>Cold Drinks</p>
                          <p>Happy Meal</p>
                          <p>Desserts</p>
                          <p>Hot Drinks</p>
                          <p>Sauces</p>
                        </div>
                      </div>
                      <div className="cards card-container">
                      {staticFoodList.map(foodItem => (
                      <RestaurantCard
                        key={foodItem._id}
                        name={foodItem.name}
                        description={foodItem.description}
                        price={foodItem.price}
                        image={foodItem.image}
                      />
                      ))}
                      </div>
                  </div>
            </div>



              <div className="box-five-container">
                  <div className="map">
                    <img className='map-img' src={map} alt="" />
                      
                      <div className="place-absolute">
                          <div className="place-info">
                            <p id='first'>The Melting Pie</p>
                            <p id='second'>Ease Dublin</p>
                            <p id='third'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, neque.</p>
                            <div className="phone">
                              <p>phone number</p>
                              <p style={{color:'green',paddingBottom:'10px'}}>+915715461</p>
                            </div>
                            <div className="website phone">
                              <p>Website</p>
                              <p style={{color:'green'}}>http:/buyandSell.ire/</p>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>


                <div className="box-five-container">
                      <div className='review-header'>
                        <p>Customer Reviews</p>
                        <div>
                          <ButtonWithArrows/>
                        </div>
                      </div>

                      <div className="review-container">

                        <div className="review-card">
                            <div className="review-img">
                            <img style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'20px'}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc" alt="" />
                            </div>
                           

                            <div className="review-details">
                              <img style={{width:'50px',height:'50px',borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s" alt="" />
                                <div className='name-details'>
                                  <p style={{color:'black',marginBottom:'-3px'}}>St Glx</p>
                                  <p>South Dublin</p>
                                </div>
                                <div>
                                  star ratings
                                </div>
                                
                            </div>

                            <p className='date'>24th September,2024</p>
                            <p className=' date review'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                               Non animi cum, facilis rem praesentium, in, eius fugiat officiis ad
                               fugit reprehenderit dolore eveniet ex architecto similique quos iste cupiditate quasi.</p>

                        </div>

                        <div className="review-card">
                            <div className="review-img">
                            <img style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'20px'}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc" alt="" />
                            </div>
                           

                            <div className="review-details">
                              <img style={{width:'50px',height:'50px',borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s" alt="" />
                                <div className='name-details'>
                                  <p style={{color:'black',marginBottom:'-3px'}}>St Glx</p>
                                  <p>South Dublin</p>
                                </div>
                                <div>
                                  star ratings
                                </div>
                                
                            </div>

                            <p className='date'>24th September,2024</p>
                            <p className=' date review'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                               Non animi cum, facilis rem praesentium, in, eius fugiat officiis ad
                               fugit reprehenderit dolore eveniet ex architecto similique quos iste cupiditate quasi.</p>

                        </div>



                        <div className="review-card">
                            <div className="review-img">
                            <img style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'20px'}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc" alt="" />
                            </div>
                           

                            <div className="review-details">
                              <img style={{width:'50px',height:'50px',borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s" alt="" />
                                <div className='name-details'>
                                  <p style={{color:'black',marginBottom:'-3px'}}>St Glx</p>
                                  <p>South Dublin</p>
                                </div>
                                <div>
                                  star ratings
                                </div>
                                
                            </div>

                            <p className='date'>24th September,2024</p>
                            <p className=' date review'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                               Non animi cum, facilis rem praesentium, in, eius fugiat officiis ad
                               fugit reprehenderit dolore eveniet ex architecto similique quos iste cupiditate quasi.</p>

                        </div>

                      </div>

                </div>


      </div>
  )
}

export default RestaurantView
