import React, { useEffect, useState } from 'react'
import { CitySelect, CountrySelect, StateSelect } from 'react-country-state-city';
import "react-country-state-city/dist/react-country-state-city.css";
import { Controller, useForm } from 'react-hook-form';
import { Input } from '../../components/Inputs/Input';
import { Button } from '../../components/Buttons/Button';
import { DragAndDropInput } from '../../components/Inputs/DragAndDropInput';
import { CALORIES_COUNT_RANGE, FOOD_FREE_FROM, FOOD_GROUP, FOOD_MAKE, FOOD_VARIETY, IMAGE_EXTENSION_TYPES } from '../../utils/constants';
import { uploadDoc } from '../../services/apis/api';
import { addData } from '../../services/firebase/setData';
import { useSelector } from 'react-redux';
import { getUserId, loader } from '../../utils';
import { City, Country, State } from 'country-state-city';
import { useUserId } from '../../hooks/useUserId';


export const AddItem = () => {

    const userData = useSelector((state) => state.auth)
    const userId = useUserId()
    const [allCountries, setAllCountries] = useState([])
    const [allStates, setAllStates] = useState([])
    const [allCities, setAllCities] = useState([])

    // const getUserId = () => {
    //     return userData?.user?.uid || null
    // }

    const { handleSubmit, control, watch, reset, setValue, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            price: '',
            description: '',
            food_group: null,
            food_make: null,
            food_free_from: null,
            food_variety: null,
            calorie_count_range: null,
            countryId: '',
            stateId: '',
            cityId: '',
            image: [],


        }
    });

    const countryId = watch("countryId");
    const stateId = watch("stateId");

    async function addItem(dd) {
        try {


            loader.start()
            let file = dd?.image?.[0]?.file;
            let docData = await uploadDoc([file]);
            let image = docData.data.data[0]

            let data = {
                ...dd,
                restaurantId: userId, image
            };
            console.log(data)
            await addData("items", data)
            console.log("Item added added")
        } catch (err) {
            console.log(err)
        }
        finally {
            loader.stop()
        }



    };

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
        <div>

            <h3 className='text-center mt-3'>Add Item</h3>
            <br />
            <form onSubmit={handleSubmit(addItem)}>

                <div className="row">



                    <div className="col-4 mt-3">
                        <h6>Item Name</h6>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue={null}
                            rules={{ required: true }}
                            render={({ field: { value, onChange } }) => {
                                return (
                                    <Input
                                        value={value}
                                        error={errors.name}
                                        onChange={onChange}
                                        placeholder='Item Name' />
                                )
                            }} />
                    </div>

                    <div className="col-4 mt-3">
                        <h6>Price</h6>
                        <Controller
                            name="price"
                            control={control}
                            defaultValue={null}
                            rules={{ required: true }}
                            render={({ field }) => {
                                return (
                                    <Input {...field}
                                        error={errors.price}
                                        type="number" className="form-control" placeholder='Price' />
                                )
                            }} />
                    </div>

                    <div className="col-4 mt-3">
                        <h6>Food Group</h6>
                        <Controller
                            name="food_group"
                            control={control}
                            defaultValue={null}
                            rules={{ required: true }}
                            render={({ field }) => {
                                return (
                                    <select {...field} className={`form-select ${!!errors?.food_group && "error_input"}`}>
                                        <option value={null}>Select Food Group</option>
                                        {FOOD_GROUP.map(e => <option value={e}>{e}</option>)}
                                    </select>
                                )
                            }} />
                    </div>
                    <div className="col-4 mt-3">
                        <h6>Food Make</h6>
                        <Controller
                            name="food_make"
                            control={control}
                            defaultValue={null}
                            rules={{ required: true }}
                            render={({ field }) => {
                                return (
                                    <select  {...field} className={`form-select ${!!errors?.food_make && "error_input"}`}>
                                        <option value={null}>Select Food Make</option>
                                        {FOOD_MAKE.map(e => <option value={e}>{e}</option>)}
                                    </select>
                                )
                            }} />
                    </div>
                    <div className="col-4 mt-3">
                        <h6>Food Free From</h6>
                        <Controller
                            name="food_free_from"
                            control={control}
                            defaultValue={null}
                            rules={{ required: true }}
                            render={({ field }) => {
                                return (
                                    <select {...field} className={`form-select ${!!errors?.food_free_from && "error_input"}`}>
                                        <option value={null}>Select Food Free From</option>
                                        {FOOD_FREE_FROM.map(e => <option value={e}>{e}</option>)}
                                    </select>
                                )
                            }} />
                    </div>
                    <div className="col-4 mt-3">
                        <h6>Food Variety</h6>
                        <Controller
                            name="food_variety"
                            control={control}
                            defaultValue={null}
                            rules={{ required: true }}
                            render={({ field }) => {
                                return (
                                    <select {...field} className={`form-select ${!!errors?.food_variety && "error_input"}`}>
                                        <option value={null}>Select Food Variety</option>
                                        {FOOD_VARIETY.map(e => <option value={e}>{e}</option>)}
                                    </select>
                                )
                            }} />
                    </div>
                    <div className="col-4 mt-3">
                        <h6>Calorie Count Range</h6>
                        <Controller
                            name="calorie_count_range"
                            control={control}
                            defaultValue={null}
                            rules={{ required: true }}
                            render={({ field }) => {
                                return (
                                    <select {...field} className={`form-select ${!!errors?.food_variety && "error_input"}`}>
                                        <option value={null}>Calorie Count Range</option>
                                        {CALORIES_COUNT_RANGE.map(e => <option value={e}>{e}</option>)}
                                    </select>
                                )
                            }} />
                    </div>


                    <div className="col-12 mt-3">
                        <h6>Description</h6>
                        <Controller
                            name="description"
                            control={control}
                            defaultValue={null}
                            render={({ field }) => {
                                return (
                                    <textarea {...field} className="form-control" placeholder='Description'></textarea>
                                )
                            }} />
                    </div>

                    <div className="col-12 mt-3">
                        <h6>Product Image</h6>
                        <Controller
                            name="image"
                            control={control}
                            defaultValue={null}
                            rules={{ required: true }}
                            render={({ field: { value, onChange } }) => {
                                return (
                                    <DragAndDropInput
                                        error={errors.image}
                                        acceptedFileTypes={IMAGE_EXTENSION_TYPES}
                                        fileLimit={1}
                                        value={value}
                                        onChange={(e) => {
                                            onChange(e)
                                        }}
                                    />
                                )
                            }} />
                    </div>

                    <div className="col-4 mt-3">
                        <h6>All Country</h6>
                        <Controller
                            name="countryId"
                            rules={{ required: true }}
                            control={control}
                            render={({ field: { value, onChange } }) => (

                                <select className={`${errors?.countryId && "error_input rounded"} form-select`} value={value} onChange={(e) => {
                                    onChange(e.target.value);
                                }}>
                                    <option value={""}>Select Country</option>
                                    {allCountries.map(e => <option value={e.isoCode}>{e.name}</option>)}
                                </select>


                            )}
                        />
                    </div>
                    <div className="col-4 mt-3">
                        <h6>State</h6>
                        <Controller
                            name="stateId"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { value, onChange } }) => (
                                <select className={`${errors?.countryId && "error_input rounded"} form-select`} value={value} onChange={onChange}>
                                    <option value={""}>Select State</option>
                                    {allStates.map(e => <option value={e.isoCode}>{e.name}</option>)}
                                </select>
                            )}
                        />
                    </div>
                    <div className="col-4 mt-3">
                        <h6>City</h6>
                        <Controller
                            name="cityId"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { value, onChange } }) => (
                                <select className={`${errors?.countryId && "error_input rounded"} form-select`} value={value} onChange={onChange}>
                                    <option value={""}>Select State</option>
                                    {allCities.map(e => <option value={e.isoCode}>{e.name}</option>)}
                                </select>
                            )}
                        />
                    </div>
                </div>
                <br />
                <div className="d-flex justify-content-end gap-3">
                    <Button secondary type="button" title={"Cancel"} />
                    <Button primary type="submit" title={"Submit"} />
                </div>

            </form>


        </div>
    )
}
