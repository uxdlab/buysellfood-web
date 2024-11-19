import { useContext, useEffect, useState } from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { assets } from "../../assets/assets";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { getCollectionData } from "../../services/firebase/getData";
import { loader } from "../../utils";


const FoodDisplay = ({ category }) => {


  const [allItems, setAllItems] = useState([])

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

  useEffect(() => {
    getAllItems()
  }, [])

  async function getAllItems() {
    try {
      loader.start()
      let res = await getCollectionData("items");
      console.log(res)
      setAllItems(res)
    } catch (error) {
      console.log(error)
    }
    finally{
      loader.stop()
    }
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Most Popular Items</h2>
      <div className="food-display-list">
        {allItems?.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image?.fileUrl}
            />
          );

        })}
      </div>
      <div className="btn-more-card">
        <button id="btn">See More Product <BsFillArrowRightCircleFill className="insidebtn" />
        </button>
      </div>

    </div>
  );
};

export default FoodDisplay;
