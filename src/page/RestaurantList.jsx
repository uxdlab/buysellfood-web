import "./Restaurantlist.css";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";


const Restaurantlist = () => {
  
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
      _id: "8", // Fixed duplicate ID
      name: "Pasta",
      description: "Alfredo Pasta",
      price: 18.99,
      image: assets.img1,
      category: "Pasta",
    },
  ];

  return (
    <div className="food-display" id="food-display">
      <h2>Restaurant List</h2>
      <div className="food-display-list">
        {staticFoodList.map((item) => (
          <Link to="/restaurantview"><div key={item._id} className="food-item">
            <img src={item.image} alt={item.name} className="food-item-image" />
            <div className="food-item-info">
              <h3 className="food-item-name">{item.name}</h3>
              <p className="food-item-description">{item.description}</p>
              <p className="food-item-price">${item.price.toFixed(2)}</p>
            </div>
          </div></Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurantlist;
