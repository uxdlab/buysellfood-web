import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import "./Home.css";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import { Restaurants } from "../Restaurants/Restaurants";
import Chooseus from "../Chooseus/Chooseus";
import Stepper from "../Stepper/Stepper";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      {/* <AppDownload /> */}
      <Restaurants />
      <Chooseus />
      <Stepper />
    </div>
  );
};

export default Home;
