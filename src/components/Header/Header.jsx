import { CitySelect, CountrySelect, StateSelect } from "react-country-state-city";
import "./Header.css";
import { Controller, useForm } from "react-hook-form";
import { FOOD_FREE_FROM, FOOD_GROUP, FOOD_MAKE, FOOD_VARIETY } from "../../utils/constants";
import { filterDataWithKeysValue } from "../../services/firebase/getData";
import { removeEmptyKeys } from "../../utils";

const Header = () => {



  const { handleSubmit, control, watch, reset, formState: { errors } } = useForm({

    defaultValues: {
      food_group: null,
      food_make: null,
      food_free_from: null,
      food_variety: null,
      countryId: '',
      stateId: '',
      cityId: '',

    }
  });

  const countryId = watch("countryId");
  const stateId = watch("stateId");
  async function searchData(s) {
    s = {
      ...s,
      countryId: s?.countryId.id,
      stateId: s?.stateId.id,
      cityId: s?.cityId.id
  };
    let data = removeEmptyKeys(s)
    console.log(data)
    try {
      let res = await filterDataWithKeysValue("items", data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }

  }


  return (
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
                  rules={{ required: true }}
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <CountrySelect
                      containerClassName={`${errors?.countryId && "error_input rounded"} bg-white rounded`}
                      style={{ border: "none" }}
                      value={value}
                      placeHolder='Select Country'
                      onChange={(country) => {
                        onChange(country)
                      }}
                    />
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
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <StateSelect
                      containerClassName={`${errors?.stateId && "error_input rounded"} bg-white rounded`}
                      style={{ border: "none" }}
                      countryid={countryId?.id}
                      value={value}
                      placeHolder='Select State'
                      onChange={(state) => onChange(state)}
                    />
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
                    <CitySelect
                      containerClassName={`${errors?.cityId && "error_input "} bg-white rounded`}
                      style={{ border: "none" }}
                      countryid={countryId?.id}
                      stateid={stateId?.id}
                      placeHolder='Select City'
                      value={value || null}
                      onChange={(city) => onChange(city)}
                    />
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
                        <option value={null}>Select Food Group</option>
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
                      <select  {...field} className={`form-select ${!!errors?.food_make && "error_input"}`}>
                        <option value={null}>Select Food Make</option>
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
                  render={({ field }) => {
                    return (
                      <select {...field} className={`form-select ${!!errors?.food_free_from && "error_input"}`}>
                        <option value={null}>Select Food Free From</option>
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
                        <option value={null}>Select Food Variety</option>
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
                <select name="price_range" id="price-range">
                  <option value=""></option>
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

            <div className="submit-btn">
              <button className="search-btn">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
