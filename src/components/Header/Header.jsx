
import "./Header.css";
import { Controller, useForm } from "react-hook-form";
import { FOOD_FREE_FROM, FOOD_GROUP, FOOD_MAKE, FOOD_VARIETY } from "../../utils/constants";
import { filterDataWithKeysValue } from "../../services/firebase/getData";
import { loader, removeEmptyKeys } from "../../utils";
import { useEffect, useState } from "react";
import FoodItem from "../FoodItem/FoodItem";
import { Button } from "../Buttons/Button";
import { City, Country, State } from "country-state-city";


const Header = () => {

  const [allCountries, setAllCountries] = useState([])
  const [allStates, setAllStates] = useState([])
  const [allCities, setAllCities] = useState([])

  const [searchItemsData, setSearchItemsData] = useState([])

  const { handleSubmit, control, watch, reset, setValue, formState: { errors } } = useForm({
    defaultValues: {
      food_group: "",
      food_make: "",
      food_free_from: "",
      food_variety: "",
      countryId: '',
      stateId: '',
      cityId: '',
    }
  });

  const countryId = watch("countryId");
  const stateId = watch("stateId");

  const formValues = watch();

  const isFormEmpty = Object.values(formValues).every(
    (value) => value === "" || value === null || value === undefined
  );

  async function searchData(s) {

    let data = removeEmptyKeys(s)
    console.log(data)
    try {
      loader.start()
      let res = await filterDataWithKeysValue("items", data)
      console.log(res)
      setSearchItemsData(res)
    } catch (error) {
      console.log(error)
    }
    finally {
      loader.stop()
    }

  }

  function resetSearch() {
    // Reset form state and trigger re-render
    reset({
      food_group: "",
      food_make: "",
      food_free_from: "",
      food_variety: "",
      countryId: "",
      stateId: "",
      test: "",
      cityId: "",
    });


    // If third-party components don't re-render, manually trigger state updates
    setValue("countryId", "");
    setValue("stateId", "");
    setValue("cityId", "");
  }

  useEffect(() => {
    let d = Country.getAllCountries()
    setAllCountries(d)
  }, [])

  useEffect(() => {
    if (countryId) {
      setValue("stateId", "")
      setValue("cityId", "")
      let states = State.getStatesOfCountry(countryId)

      setAllStates(states)
    }
  }, [countryId]);

  useEffect(() => {
    if (stateId) {
      setValue("cityId", "")
      let cities = City.getCitiesOfState(countryId, stateId)
      setAllCities(cities)
    }
  }, [stateId])


  return (
    <>
      <div className="header">
        <div className="header-contents">
          <h2>Buy & Sell Food</h2>
          <h2>In Your City</h2>
          <div className="main">
            <form onSubmit={handleSubmit(searchData)} className="main-select-box">
              <div className="upper-box">
                <div className="select-small-div">
                  <label htmlFor="country" style={{ color: "black" }}>
                    Country
                  </label>{" "}

                  <Controller
                    name="countryId"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <select className="form-select" value={value} onChange={(e) => {
                        onChange(e.target.value);
                      }}>
                        <option value={""}>Select Country</option>
                        {allCountries.map(e => <option value={e.isoCode}>{e.name}</option>)}
                      </select>
                    )}
                  />

                </div>
                <div className="select-small-div">
                  <label htmlFor="state" style={{ color: "black" }}>
                    State
                  </label>{" "}
                  <br />
                  <Controller
                    name="stateId"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <select className="form-select" value={value} onChange={onChange}>
                        <option value={""}>Select State</option>
                        {allStates.map(e => <option value={e.isoCode}>{e.name}</option>)}
                      </select>
                    )}
                  />
                </div>
                <div className="select-small-div">
                  <label htmlFor="city" style={{ color: "black" }}>
                    City
                  </label>{" "}
                  <br />
                  <Controller
                    name="cityId"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <select className="form-select" value={value} onChange={onChange}>
                        <option value={""}>Select State</option>
                        {allCities.map(e => <option value={e.isoCode}>{e.name}</option>)}
                      </select>
                    )}
                  />
                </div>
                <div className="select-small-div">
                  <label htmlFor="food-group" style={{ color: "black" }}>
                    Food Group
                  </label>{" "}
                  <br />
                  <Controller
                    name="food_group"
                    control={control}
                    defaultValue={null}
                    render={({ field }) => {
                      return (
                        <select {...field} className={`form-select ${!!errors?.food_group && "error_input"}`}>
                          <option value={""}>Select Food Group</option>
                          {FOOD_GROUP.map(e => <option value={e}>{e}</option>)}
                        </select>
                      )
                    }} />
                </div>
                <div className="select-small-div">
                  <label htmlFor="country" style={{ color: "black" }}>
                    Food Make
                  </label>{" "}
                  <br />
                  <Controller
                    name="food_make"
                    control={control}
                    defaultValue={null}
                    render={({ field }) => {
                      return (
                        <select {...field} className={`form-select ${!!errors?.food_make && "error_input"}`}>
                          <option value={""}>Select Food Make</option>
                          {FOOD_MAKE.map(e => <option value={e}>{e}</option>)}
                        </select>
                      )
                    }} />
                </div>

                <div className="select-big-div">
                  <label htmlFor="food-free" style={{ color: "black" }}>
                    Food Free From
                  </label>{" "}
                  <br />
                  <Controller
                    name="food_free_from"
                    control={control}
                    defaultValue={null}
                    render={({ field: { value, onChange } }) => {
                      return (
                        <select value={value} onChange={onChange} className={`form-select ${!!errors?.food_free_from && "error_input"}`}>
                          <option value={""}>Select Food Free From</option>
                          {FOOD_FREE_FROM.map(e => <option value={e}>{e}</option>)}
                        </select>
                      )
                    }} />
                </div>

                <div className="select-big-div">
                  <label htmlFor="country" style={{ color: "black" }}>
                    Food Variety
                  </label>{" "}
                  <br />
                  <Controller
                    name="food_variety"
                    control={control}
                    defaultValue={null}
                    render={({ field }) => {
                      return (
                        <select {...field} className={`form-select ${!!errors?.food_variety && "error_input"}`}>
                          <option value={""}>Select Food Variety</option>
                          {FOOD_VARIETY.map(e => <option value={e}>{e}</option>)}
                        </select>
                      )
                    }} />
                </div>
                <div className="select-big-div">
                  <label htmlFor="country" style={{ color: "black" }}>
                    Price Range
                  </label>{" "}
                  <br />
                  <select name="price_range" className="form-select">
                    <option value=""> Price Range</option>
                    <option value="50-1000">50-1000</option>
                    <option value="1000-2000">1000-2000</option>
                    <option value="2000-5000">2000-5000</option>
                    <option value="Above 5000">Above 5000</option>
                  </select>
                </div>
                <div className="select-big-div">
                  <label htmlFor="country" style={{ color: "black" }}>
                    Calorie Count Range
                  </label>{" "}
                  <br />
                  <select name="calorie_count_range" id="calorie-count-range" className="form-select">
                    <option value="calorie_count_range">Calorie Count Range</option>
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

              <div className="d-flex gap-3 align-items-center justify-content-center">


                {!isFormEmpty && <Button type="button" onClick={resetSearch} secondary title="Clear Filter" />}



                <button disabled={isFormEmpty} className="search-btn">Search</button>

              </div>
            </form>
          </div>

        </div>
      </div>

      <div className="food-display-list">
        {searchItemsData?.map((item, index) => {
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


    </>

  );
};

export default Header;
