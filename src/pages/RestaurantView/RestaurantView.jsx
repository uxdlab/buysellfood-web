import React, { useRef, useState } from 'react'
import RestaurantCard from './RestaurantCard';
import rectangle from "../../assets/rectangle.png"
import map from "../../assets/map.png"
import "./RestaurantView.css"
import { assets } from '../../assets/assets';
import { IoIosRestaurant } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineElectricBike } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import AddFoodPopup from './AddFoodPopup';





const RestaurantView = () => {

  
  const [isVisible,setisVisible] = useState(false)

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const toggleHandle = () =>{
    setisVisible(!isVisible)
  }

  const reviews = [
    {
      id: 1,
      reviewImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc",
      userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s",
      name: "St Glx",
      location: "South Dublin",
      date: "24th September, 2024",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non animi cum, facilis rem praesentium, in, eius fugiat officiis ad fugit reprehenderit dolore eveniet ex architecto similique quos iste cupiditate quasi.",
    },
    {
      id: 2,
      reviewImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc",
      userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s",
      name: "Jane Doe",
      location: "New York",
      date: "15th August, 2024",
      review: "This is another sample review text. The product was great, and the service was exceptional.",
    },
    {
      id: 3,
      reviewImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc",
      userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s",
      name: "St Glx",
      location: "South Dublin",
      date: "24th September, 2024",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non animi cum, facilis rem praesentium, in, eius fugiat officiis ad fugit reprehenderit dolore eveniet ex architecto similique quos iste cupiditate quasi.",
    },
    {
      id: 4,
      reviewImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc",
      userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s",
      name: "St Glx",
      location: "South Dublin",
      date: "24th September, 2024",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non animi cum, facilis rem praesentium, in, eius fugiat officiis ad fugit reprehenderit dolore eveniet ex architecto similique quos iste cupiditate quasi.",
    },
    {
      id: 5,
      reviewImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc",
      userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s",
      name: "St Glx",
      location: "South Dublin",
      date: "24th September, 2024",
      review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non animi cum, facilis rem praesentium, in, eius fugiat officiis ad fugit reprehenderit dolore eveniet ex architecto similique quos iste cupiditate quasi.",
    },
 
  ];

  const staticFoodList = [

    {
      _id: "1",
      name: "Pizza Margherita",
      description: "Classic delight with 100% real mozzarella cheese",
      price: 12.99,
      image: assets.img1,
      category: "Pizza",
      rating: 3.4,
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
      _id: "8",
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
              <img src={rectangle} alt="banner image" />

              <div className="absolute-banner">
                <div className="leftside">
                    <p>I'm Lovin' it!</p>
                    <p id='name'>The Melting Pie</p>
                    <button className='delivery-btn'><MdOutlineElectricBike /><span>Delivery in 20-25 minutes</span></button>
                </div>
                <div className="rightside">
                        <div className="restaurant-img">
                          <img style={{width:'100%'}} src={staticFoodList[0].image} alt="" />
                          <div className='rating'>
                            <p style={{fontSize:'3vw'}}>{staticFoodList[0].rating}</p>
                            <p style={{fontSize:'small'}}>star star</p>
                            <p style={{fontSize:'small'}}>1.360 views</p>
                        </div>
                        </div>
                        
                </div>
              </div>

              <button className=' open-timing'> <IoTimeOutline style={{fontSize:'2rem',fill:'white',marginRight:"20px"}} />Open until 3:00 AM</button>
              

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
                <div className='offer-image'>
                  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc" alt="" />
                </div>
                <div className='offer-image'>
                  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc" alt="" />
                </div><div className='offer-image'>
                  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc" alt="" />
                </div>
                <div className='offer-image'>
                  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc" alt="" />
                </div>
                
          </div>


            <div className="box-three-container">
              <h2>Pizza</h2>
              <div className=" card-container-three">
              {staticFoodList.map(foodItem => (
                <RestaurantCard
                  key={foodItem._id}
                  name={foodItem.name}
                  description={foodItem.description}
                  price={foodItem.price}
                  image={foodItem.image}
                  openPopup={toggleHandle}
                />
                ))}
              </div>

               

                <div className='view-more-container'>
                  <button>View More</button>
                </div>
            </div>
            {
              isVisible &&  <AddFoodPopup openPopup={toggleHandle} closePopup={toggleHandle}/>
            }
           

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
                      <div className="cards-container-four ">
                     
                      {staticFoodList.map(foodItem => (
                      <RestaurantCard
                        key={foodItem._id}
                        name={foodItem.name}
                        description={foodItem.description}
                        price={foodItem.price}
                        image={foodItem.image}
                        openPopup={toggleHandle}
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


                <div className="box-six-container">
                      <div className='review-header'>
                        <p>Customer Reviews</p>
                        <div>
                        <div className="review-header-btn">        
                          <div className="btn-left">
                            <MdKeyboardArrowLeft onClick={scrollLeft} style={{fontSize:'2rem'}}/>
                          </div>
                          <div className="btn-right ">
                             <MdKeyboardArrowRight onClick={scrollRight} style={{fontSize:'2rem'}} />
                          </div>
                        </div>

                        </div>
                      </div>


                      <div ref={scrollRef} className="review-container">
                          {reviews.map((review) => (
                            <div className="review-card" key={review.id}>
                              <div className="review-img">
                                <img 
                                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} 
                                  src={review.reviewImg} 
                                  alt="Review Image" 
                                />
                              </div>

                              <div className="review-details">
                                <img 
                                  style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
                                  src={review.userImg} 
                                  alt="User Image" 
                                />
                                <div className="name-details">
                                  <p style={{ color: 'black', marginBottom: '-3px' }}>{review.name}</p>
                                  <p>{review.location}</p>
                                </div>
                                <div>
                                  star ratings
                                </div>
                              </div>

                              <p className="date">{review.date}</p>
                              <p className="date review">{review.review}</p>
                            </div>
                          ))}
                        </div>

                   

                </div>


      </div>
  )
}

export default RestaurantView
