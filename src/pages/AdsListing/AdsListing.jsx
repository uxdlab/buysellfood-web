import React, { useEffect, useState } from 'react'
import { AllProducts } from '../../components/common/AllProducts/AllProducts'
import './adsListing.css'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { Controller, useForm } from 'react-hook-form'
import { City, Country, State } from 'country-state-city'
import {
  CALORIES_COUNT_RANGE,
  COLOR,
  COOKING_TYPE,
  FOOD_FREE_FROM,
  FOOD_GROUP,
  FOOD_MADE,
  FOOD_MAKE,
  FOOD_VARIETY,
  SELER_TYPE,
  VERIFICATION_TYPE
} from '../../utils/constants'
import { Box, Collapse, useMediaQuery } from '@mui/material'
import { CustomPagination } from '../../components/common/CustomPanigation'
import { filterDataWithKeysValue } from '../../services/firebase/getData'
import { loader, removeEmptyKeys } from '../../utils'

export const AdsListing = () => {
  const [allCountries, setAllCountries] = useState([])
  const [allStates, setAllStates] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [allCities, setAllCities] = useState([])
  const [isDataFetched, setIsDataFetched] = useState(false)

  const [isOpen, setIsOpen] = useState(false)
  const isSmallScreen = useMediaQuery('(max-width:700px)')
  const toggleFilter = () => {
    if (isSmallScreen) {
      setIsOpen(prev => !prev)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (!isSmallScreen) {
        setIsOpen(true) // Always expanded on bigger screens
      }
    }

    handleResize()
  }, [isSmallScreen])

  const {
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      food_group: '',
      food_make: '',
      food_free_from: '',
      calorie_count_range: '',
      food_variety: '',
      countryId: '',
      stateId: '',
      cityId: '',
      sort_by: '',

      cooking_type: '',
      color: '',
      food_made: '',
      seller_type: '',
      verification: ''
    }
  })

  function resetForm () {
    reset({
      food_group: '',
      food_make: '',
      food_free_from: '',
      calorie_count_range: '',
      food_variety: '',
      countryId: '',
      stateId: '',
      cityId: '',
      sort_by: '',

      cooking_type: '',
      color: '',
      food_made: '',
      seller_type: '',
      verification: ''
    })
  }

  const countryId = watch('countryId')
  const stateId = watch('stateId')

  const formValues = watch()

  useEffect(() => {
    let d = Country.getAllCountries()
    setAllCountries(d)
  }, [])

  useEffect(() => {
    if (countryId) {
      setValue('stateId', '')
      setValue('cityId', '')
      let states = State.getStatesOfCountry(countryId)

      setAllStates(states)
    }
  }, [countryId])

  useEffect(() => {
    if (stateId) {
      setValue('cityId', '')
      let cities = City.getCitiesOfState(countryId, stateId)
      setAllCities(cities)
    }
  }, [stateId])

  useEffect(() => {
    searchData({})
  }, [])

  async function searchData (s) {
    let data = removeEmptyKeys(s)
    let { sort_by, ...rest } = data

    setIsDataFetched(false)
    try {
      loader.start()
      let res = await filterDataWithKeysValue('items', rest)
      console.log(res)

      if (sort_by) {
        res.sort((a, b) =>
          sort_by === 'highToLow'
            ? parseInt(b.price) - parseInt(a.price)
            : parseInt(a.price) - parseInt(b.price)
        )
      }
      setAllProducts(res)
    } catch (error) {
      console.log(error)
    } finally {
      loader.stop()
      setIsDataFetched(true)
    }
  }

  return (
    <div className='adsListingMainCon pb-4'>
      <div className='addListing_gridcon'>
        <div>
          <div className='pointer mt-3' onClick={toggleFilter}>
            Filter By <FilterAltIcon />
          </div>

          <Collapse in={isSmallScreen ? isOpen : true}>
            <div className='collapsable'>
              <form
                onSubmit={handleSubmit(searchData)}
                className='main-select-box'
              >
                <div>
                  <div className='mt-4'>
                    <label htmlFor='country' style={{ color: 'black' }}>
                      Country
                    </label>{' '}
                    <Controller
                      name='countryId'
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <select
                          className='form-select'
                          value={value}
                          onChange={e => {
                            onChange(e.target.value)
                          }}
                        >
                          <option value={''}>Select Country</option>
                          {allCountries.map(e => (
                            <option value={e.isoCode}>{e.name}</option>
                          ))}
                        </select>
                      )}
                    />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor='state' style={{ color: 'black' }}>
                      State
                    </label>{' '}
                    <br />
                    <Controller
                      name='stateId'
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <select
                          className='form-select'
                          value={value}
                          onChange={onChange}
                        >
                          <option value={''}>Select State</option>
                          {allStates.map(e => (
                            <option value={e.isoCode}>{e.name}</option>
                          ))}
                        </select>
                      )}
                    />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor='city' style={{ color: 'black' }}>
                      City
                    </label>{' '}
                    <br />
                    <Controller
                      name='cityId'
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <select
                          className='form-select'
                          value={value}
                          onChange={onChange}
                        >
                          <option value={''}>Select State</option>
                          {allCities.map(e => (
                            <option value={e.isoCode}>{e.name}</option>
                          ))}
                        </select>
                      )}
                    />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor='food-group' style={{ color: 'black' }}>
                      Food Group
                    </label>{' '}
                    <br />
                    <Controller
                      name='food_group'
                      control={control}
                      defaultValue={null}
                      render={({ field }) => {
                        return (
                          <select
                            {...field}
                            className={`form-select ${
                              !!errors?.food_group && 'error_input'
                            }`}
                          >
                            <option value={''}>Select Food Group</option>
                            {FOOD_GROUP.map(e => (
                              <option value={e}>{e}</option>
                            ))}
                          </select>
                        )
                      }}
                    />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor='country' style={{ color: 'black' }}>
                      Food Make
                    </label>{' '}
                    <br />
                    <Controller
                      name='food_make'
                      control={control}
                      defaultValue={null}
                      render={({ field }) => {
                        return (
                          <select
                            {...field}
                            className={`form-select ${
                              !!errors?.food_make && 'error_input'
                            }`}
                          >
                            <option value={''}>Select Food Make</option>
                            {FOOD_MAKE.map(e => (
                              <option value={e}>{e}</option>
                            ))}
                          </select>
                        )
                      }}
                    />
                  </div>

                  <div className='mt-2'>
                    <label htmlFor='food-free' style={{ color: 'black' }}>
                      Food Free From
                    </label>{' '}
                    <br />
                    <Controller
                      name='food_free_from'
                      control={control}
                      defaultValue={null}
                      render={({ field: { value, onChange } }) => {
                        return (
                          <select
                            value={value}
                            onChange={onChange}
                            className={`form-select ${
                              !!errors?.food_free_from && 'error_input'
                            }`}
                          >
                            <option value={''}>Select Food Free From</option>
                            {FOOD_FREE_FROM.map(e => (
                              <option value={e}>{e}</option>
                            ))}
                          </select>
                        )
                      }}
                    />
                  </div>

                  <div className='mt-2'>
                    <label htmlFor='country' style={{ color: 'black' }}>
                      Food Variety
                    </label>{' '}
                    <br />
                    <Controller
                      name='food_variety'
                      control={control}
                      defaultValue={null}
                      render={({ field }) => {
                        return (
                          <select
                            {...field}
                            className={`form-select ${
                              !!errors?.food_variety && 'error_input'
                            }`}
                          >
                            <option value={''}>Select Food Variety</option>
                            {FOOD_VARIETY.map(e => (
                              <option value={e}>{e}</option>
                            ))}
                          </select>
                        )
                      }}
                    />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor='country' style={{ color: 'black' }}>
                      Price Range
                    </label>{' '}
                    <br />
                    <select name='price_range' className='form-select'>
                      <option value=''>Price Range</option>
                      <option value='50-1000'>50-1000</option>
                      <option value='1000-2000'>1000-2000</option>
                      <option value='2000-5000'>2000-5000</option>
                      <option value='Above 5000'>Above 5000</option>
                    </select>
                  </div>

                  <div className='mt-2'>
                    <label htmlFor='country' style={{ color: 'black' }}>
                      Calorie Count Range
                    </label>{' '}
                    <br />
                    <Controller
                      name='calorie_count_range'
                      control={control}
                      defaultValue={null}
                      render={({ field: { value, onChange } }) => {
                        return (
                          <select
                            value={value}
                            onChange={onChange}
                            className={`form-select ${
                              !!errors?.calorie_count_range && 'error_input'
                            }`}
                          >
                            <option value={''}>
                              Select Calorie Count Range
                            </option>
                            {CALORIES_COUNT_RANGE.map(e => (
                              <option value={e}>{e}</option>
                            ))}
                          </select>
                        )
                      }}
                    />
                  </div>

                  <div className='mt-2'>
                    <h6>Cooking Type</h6>
                    <Controller
                      name='cooking_type'
                      control={control}
                      defaultValue={null}
                      render={({ field }) => {
                        return (
                          <select
                            {...field}
                            className={`form-select ${
                              !!errors?.food_variety && 'error_input'
                            }`}
                          >
                            <option value={null}>Calorie Count Range</option>
                            {COOKING_TYPE.map(e => (
                              <option value={e}>{e}</option>
                            ))}
                          </select>
                        )
                      }}
                    />
                  </div>

                  <div className='mt-2'>
                    <h6>Color</h6>
                    <Controller
                      name='color'
                      control={control}
                      defaultValue={null}
                      render={({ field }) => {
                        return (
                          <select
                            {...field}
                            className={`form-select ${
                              !!errors?.food_variety && 'error_input'
                            }`}
                          >
                            <option value={null}>Calorie Count Range</option>
                            {COLOR.map(e => (
                              <option value={e}>{e}</option>
                            ))}
                          </select>
                        )
                      }}
                    />
                  </div>
                  <div className='mt-2'>
                    <h6>Food Made</h6>
                    <Controller
                      name='food_made'
                      control={control}
                      defaultValue={null}
                      render={({ field }) => (
                        <div
                          className={`form-group d-flex gap-2 ${
                            !!errors?.food_made && 'error_input'
                          }`}
                        >
                          {FOOD_MADE.map((item, index) => (
                            <div key={index} className='form-check'>
                              <input
                                {...field}
                                type='radio'
                                className='form-check-input'
                                id={`food_made-${item}`}
                                value={item}
                                checked={field.value === item}
                              />
                              <label
                                className='form-check-label'
                                htmlFor={`food_made-${item}`}
                              >
                                {item}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                    />
                  </div>

                  <div className='mt-2'>
                    <h6>Seller Type</h6>
                    <Controller
                      name='seller_type'
                      control={control}
                      defaultValue={null}
                      render={({ field }) => (
                        <div
                          className={`form-group d-flex gap-2 ${
                            !!errors?.seller_type && 'error_input'
                          }`}
                        >
                          {SELER_TYPE.map((item, index) => (
                            <div key={index} className='form-check'>
                              <input
                                {...field}
                                type='radio'
                                className='form-check-input'
                                id={`seller_type-${item}`}
                                value={item}
                                checked={field.value === item}
                              />
                              <label
                                className='form-check-label'
                                htmlFor={`seller_type-${item}`}
                              >
                                {item}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                    />
                  </div>

                  <div className='mt-2'>
                    <h6>Verification</h6>
                    <Controller
                      name='verification'
                      control={control}
                      defaultValue={null}
                      render={({ field }) => (
                        <div
                          className={`form-group d-flex gap-2 ${
                            !!errors?.verification && 'error_input'
                          }`}
                        >
                          {VERIFICATION_TYPE.map(option => (
                            <div key={option} className='form-check'>
                              <input
                                {...field}
                                type='radio'
                                className='form-check-input'
                                id={`verification-${option}`}
                                value={option}
                                checked={field.value === option}
                              />
                              <label
                                className='form-check-label'
                                htmlFor={`verification-${option}`}
                              >
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                    />
                  </div>
                </div>

                <div className='d-flex gap-3 align-items-center justify-content-center mt-3'>
                  <button className='search-btn w-100'>Search</button>
                </div>
                <button onClick={resetForm} className='btn border mt-3 w-100'>
                  Remove Filter
                </button>
              </form>
            </div>
          </Collapse>
        </div>

        <div>
          <div>
            <br />
            <br />
            <div className='mt-2'>Sort By:</div>
            <Box sx={{ width: '300px' }}>
              <Controller
                name='sort_by'
                control={control}
                defaultValue={null}
                render={({ field: { value, onChange } }) => {
                  return (
                    <select
                      value={value}
                      onChange={onChange}
                      className={`form-select ${
                        !!errors?.calorie_count_range && 'error_input'
                      }`}
                    >
                      <option value={''}>Sory By</option>
                      <option value={'highToLow'}>Price high to low</option>
                      <option value={'lowToHigh'}>Price low to high</option>
                    </select>
                  )
                }}
              />
            </Box>
          </div>

          <AllProducts
            allProducts={allProducts}
            isDataFetched={isDataFetched}
            fetchProducts='all'
          />
        </div>
      </div>
    </div>
  )
}
