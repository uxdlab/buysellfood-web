import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Buy & Sell Food</h2>
        <h2>In Your City</h2>
        {/* <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest indegredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button>View Menu</button> */}
        <div class="main">
          <form action="" class="main-select-box">
            <div class="upper-box">
              <div class="select-small-div">
                <label for="country" style={{ color: "black" }}>
                  Country
                </label>{" "}
                <br />
                <select name="country" id="country">
                  <option value=""></option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Ageria">Ageria</option>
                  <option value="India">India</option>
                  <option value="">American Samoa</option>
                  <option value="">Andorra</option>
                  <option value="">Angola</option>
                  <option value="">Anguilla</option>
                  <option value="">Australia</option>
                  <option value="">Bahamas The</option>
                  <option value="">Bahrain</option>
                  <option value="">Bangladesh</option>
                  <option value="">Belize</option>
                  <option value="">Benin</option>
                  <option value="">Bernuda</option>
                  <option value="">Bhutan</option>
                  <option value="">Bolevia</option>
                  <option value="">Georgia</option>
                  <option value="">Ghana</option>
                  <option value="">Iran</option>
                  <option value="">Iraq</option>
                  <option value="">Ireland</option>
                  <option value="">Israel</option>
                  <option value="">Italy</option>
                  <option value="">Japan</option>
                  <option value="">United State</option>
                </select>
              </div>
              <div class="select-small-div">
                <label for="state" style={{ color: "black" }}>
                  State
                </label>{" "}
                <br />
                <select name="state" id="state">
                  <option value=""></option>
                  <option value="Uttar Pradesh">Connacht</option>
                  <option value="Haryana">Country Carlow</option>
                  <option value="Haryana">Country Cavan</option>
                  <option value="Haryana">Country Clare</option>
                  <option value="Haryana">Country Cork</option>
                  <option value="Haryana">Country Donegal</option>
                  <option value="Haryana">Country Dublin</option>
                  <option value="Haryana">Country Galway</option>
                  <option value="Haryana">Country Kerry</option>
                  <option value="Haryana">Country Kildare</option>
                  <option value="Haryana">Country Laois</option>
                  <option value="Haryana">Country Limerick</option>
                  <option value="Haryana">Country Longford</option>
                  <option value="Haryana">Country Louth</option>
                  <option value="Haryana">Country Mayo</option>
                  <option value="Haryana">Country Meath</option>
                  <option value="Haryana">Country Monaghan</option>
                  <option value="Haryana">Country Offaly</option>
                  <option value="Haryana">Country Roscommon</option>
                  <option value="Haryana">Country Sligo</option>
                  <option value="Haryana">Country Tipperary</option>
                  <option value="Haryana">Country Waterford</option>
                  <option value="Haryana">Country Westmeath</option>
                  <option value="Haryana">Country Wexford</option>
                  <option value="Haryana">Country Wicklow</option>
                  <option value="Haryana"> Leinster</option>
                  <option value="Haryana"> Munster</option>
                  <option value="Haryana"> ulster</option>
                </select>
              </div>
              <div class="select-small-div">
                <label for="city" style={{ color: "black" }}>
                  City
                </label>{" "}
                <br />
                <select name="city" id="city">
                  <option value=""></option>
                  <option value="Athenry">Athenry</option>
                  <option value="Ballaghaderreen">Ballaghaderreen</option>
                  <option value="Ballina">Ballina</option>
                  <option value="Ballinasloe">Ballinasloe</option>
                  <option value="Ballinrobe">Ballinrobe</option>
                  <option value="Ballisodare">Ballisodare</option>
                  <option value="Ballyharnis">Ballyharnis</option>
                  <option value="Ballymote">Ballymote</option>
                  <option value="Bearna">Bearna</option>
                  <option value="Belmullet">Belmullet</option>
                  <option value="Boyle">Boyle</option>
                  <option value="Carrick on Shannon">Carrick on Shannon</option>
                  <option value="Castlebor">Castlebor</option>
                  <option value="Claregalway">Claregalway</option>
                  <option value="Claremorris">Claremorris</option>
                  <option value="Clifden">Clifden</option>
                  <option value="Collooney">Collooney</option>
                  <option value="">Country Galway</option>
                  <option value="">Country Leitrim</option>
                  <option value="">Gross Molina</option>
                  <option value="">Foxford</option>
                  <option value="">Gaillimh</option>
                  <option value="">Galway City</option>
                  <option value="">Gost</option>
                  <option value="">Inishcrone</option>
                  <option value="">Kiltamagh</option>
                  <option value="">Kinlough</option>
                  <option value="">Loughrea</option>
                  <option value="">Manorhamilton</option>
                  <option value="">Mayo Country</option>
                  <option value="">Moycullan</option>
                  <option value="">Oranmore</option>
                  <option value="">Oughterard</option>
                  <option value="">Portumna</option>
                  <option value="">Roscommon</option>
                  <option value="">Sligo</option>
                  <option value="">Strandhill</option>
                  <option value="">Swinford</option>
                  <option value="">Tobercurry</option>
                  <option value="">Tuam</option>
                  <option value="">Westport</option>
                </select>
              </div>
              <div class="select-small-div">
                <label for="food-group" style={{ color: "black" }}>
                  Food Group
                </label>{" "}
                <br />
                <select name="food-group" id="food-group">
                  <option value=""></option>
                  <option value="Vegan">Vegan</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegetarian and Non-Vegetarian">
                    Vegetarian and Non-Vegetarian
                  </option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                </select>
              </div>
              <div class="select-small-div">
                <label for="country" style={{ color: "black" }}>
                  Food Make
                </label>{" "}
                <br />
                <select name="country" id="country">
                  <option value=""></option>
                  <option value="Ready to  Eat Food">Ready to Eat Food</option>
                  <option value="Fresh Chilled Food">Fresh Chilled Food</option>
                  <option value="Fresh Raw Food">Fresh Raw Food</option>
                  <option value="Frozen Food">Frozen Food</option>
                </select>
              </div>

              <div class="select-big-div">
                <label for="food-free" style={{ color: "black" }}>
                  Food Free From
                </label>{" "}
                <br />
                <select name="food-free" id="food-free">
                  <option value=""></option>
                  <option value="Gluten ,Wheat">Gluten ,Wheat</option>
                  <option value="Nuts">Nuts</option>
                  <option value="Dairy Milk">Dairy Milk</option>
                  <option value="Egg">Egg</option>
                  <option value="Additives">Additives</option>
                  <option value="Monosodium Glugamate">
                    Monosodium Glugamate
                  </option>
                  <option value="Colouring">Colouring</option>
                </select>
              </div>

              <div class="select-big-div">
                <label for="country" style={{ color: "black" }}>
                  Food Variety
                </label>{" "}
                <br />
                <select name="food_variety" id="food-variety">
                  <option value=""></option>
                  <option value="Pizza">Pizza</option>
                  <option value="Burger">Burger</option>
                  <option value="Kebab">Kebab</option>
                  <option value="Roll">Roll</option>
                  <option value="Snacks">Snacks</option>
                  <option value="Noodle">Noodle</option>
                  <option value="Chowmein">Chowmein</option>
                  <option value="Biriyani">Biriyani</option>
                  <option value="Tikka">Tikka</option>
                  <option value="Fish and Chips">Fish and Chips</option>
                  <option value="Rousted Chicken">Rousted Chicken</option>
                  <option value="Rice">Rice</option>
                  <option value="Curry">Curry</option>
                  <option value="Soup">Soup</option>
                  <option value="Masala">Masala</option>
                  <option value="Cake">Cake</option>
                  <option value="Salad">Salad</option>
                  <option value="Pickles">Pickles</option>
                  <option value="Souce">Souce</option>
                  <option value="Sandwich">Sandwich</option>
                  <option value="Subway">Subway</option>
                  <option value="Steak Meat">Steak Meat</option>
                  <option value="Fried Chicken">Fried Chicken</option>
                  <option value="Bread">Bread</option>
                </select>
              </div>
              <div class="select-big-div">
                <label for="country" style={{ color: "black" }}>
                  Price Range
                </label>{" "}
                <br />
                <select name="price_range" id="price-range">
                  <option value=""></option>
                  <option value="50-1000">50-1000</option>
                  <option value="1000-2000">1000-2000</option>
                  <option value="2000-5000">2000-5000</option>
                  <option value="Above 5000">Above 5000</option>
                </select>
              </div>
              <div class="select-big-div">
                <label for="country" style={{ color: "black" }}>
                  Calorie Count Range
                </label>{" "}
                <br />
                <select name="calorie_count_range" id="calorie-count-range">
                  <option value="calorie_count_range"></option>
                  <option value="1200">1200</option>
                  <option value="1450">1450</option>
                  <option value="1600">1600</option>
                  <option value="1850">1850</option>
                  <option value="2300">2300</option>
                  <option value="2400">2400</option>
                  <option value="2787">2787</option>
                  <option value="2767">2767</option>
                  <option value="1969">1969</option>
                </select>
              </div>
            </div>

            <div class="submit-btn">
              <button class="search-btn">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
