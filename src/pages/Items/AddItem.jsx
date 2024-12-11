import React, { useEffect, useState } from 'react'
import 'react-country-state-city/dist/react-country-state-city.css'
import { Controller, useForm } from 'react-hook-form'
import { Input } from '../../components/Inputs/Input'
import { Button } from '../../components/Buttons/Button'
import { DragAndDropInput } from '../../components/Inputs/DragAndDropInput'
import {
  CALORIES_COUNT_RANGE,
  COLOR,
  COOKING_TYPE,
  FOOD_FREE_FROM,
  FOOD_GROUP,
  FOOD_MADE,
  FOOD_MAKE,
  FOOD_VARIETY,
  IMAGE_EXTENSION_TYPES,
  SELER_TYPE,
  VERIFICATION_TYPE
} from '../../utils/constants'
import { uploadDoc } from '../../services/apis/api'
import { addData } from '../../services/firebase/setData'
import { useSelector } from 'react-redux'
import { getUserData, getUserId, isUserPlanExpired, loader } from '../../utils'
import { City, Country, State } from 'country-state-city'
import { useUserId } from '../../hooks/useUserId'
import { Link, useNavigate } from 'react-router-dom'
import { PayPalButtonComponent } from '../../components/Paypal/PayPalButtonComponent'

export const AddItem = () => {
  const userData = useSelector(state => state.auth)
  const userId = useUserId()
  const navigate = useNavigate()
  const [allCountries, setAllCountries] = useState([])
  const [allStates, setAllStates] = useState([])
  const [allCities, setAllCities] = useState([])
  const [isPlanExpired, setIsPlanExpired] = useState(false)

  // const getUserId = () => {
  //     return userData?.user?.uid || null
  // }

  const {
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    formState: { errors }
  } = useForm({
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
      currency: '',
      cooking_type: '',
      color: '',
      food_made: FOOD_MADE[0],
      seller_type: SELER_TYPE[0],
      verification: VERIFICATION_TYPE[0]
    }
  })

  const countryId = watch('countryId')
  const stateId = watch('stateId')

  async function addItem (dd) {
    try {
      loader.start()
      let file = dd?.image?.[0]?.file
      let docData = await uploadDoc([file])
      let image = docData.data.data[0]
      let data = {
        ...dd,
        price: parseInt(dd.price),
        restaurantId: userId,
        image
      }
      console.log(data)
      await addData('items', data)
      navigate('/')
      console.log('Item added added')
    } catch (err) {
      console.log(err)
    } finally {
      loader.stop()
    }
  }

  useEffect(() => {
    let d = Country.getAllCountries()
    setAllCountries(d)
  }, [])

  useEffect(() => {
    if (countryId) {
      setValue('stateId', '')
      setValue('cityId', '')
      setValue(
        'currency',
        allCountries?.find(e => e.isoCode === countryId)?.currency
      )
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

  let userFullData = getUserData()

  function checkUserPaymentStatus () {
    let date = userFullData?.planExpireDate

    let ddd = isUserPlanExpired(date)
    setIsPlanExpired(ddd)
    
  }

  useEffect(() => {
    checkUserPaymentStatus()
  }, [userFullData])

  return (
    <div>
      <h3 className='text-center mt-3'>Add Item</h3>

      <br />
      <form onSubmit={handleSubmit(addItem)}>
        <div className='row mx-md-5 px-0 px-md-5 px-0'>
          <div className='col-12 mt-3'>
            <h6>
              Product Image<span className='text-danger'>*</span>
            </h6>
            <Controller
              name='image'
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
                    onChange={e => {
                      onChange(e)
                    }}
                  />
                )
              }}
            />
          </div>
          <div className='col-12 mt-3'>
            <h6>
              All Country <span className='text-danger'>*</span>
            </h6>
            <Controller
              name='countryId'
              rules={{ required: true }}
              control={control}
              render={({ field: { value, onChange } }) => (
                <select
                  className={`${
                    errors?.countryId && 'error_input rounded'
                  } form-select`}
                  value={value}
                  onChange={e => {
                    onChange(e.target.value)
                  }}
                >
                  <option disabled value={''}>
                    Select Country
                  </option>
                  {allCountries.map(e => (
                    <option value={e.isoCode}>{e.name}</option>
                  ))}
                </select>
              )}
            />
          </div>
          <div className='col-12 mt-3'>
            <h6>
              State <span className='text-danger'>*</span>
            </h6>
            <Controller
              name='stateId'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <select
                  className={`${
                    errors?.countryId && 'error_input rounded'
                  } form-select`}
                  value={value}
                  onChange={onChange}
                >
                  <option disabled value={''}>
                    Select State
                  </option>
                  {allStates.map(e => (
                    <option value={e.isoCode}>{e.name}</option>
                  ))}
                </select>
              )}
            />
          </div>
          <div className='col-12 mt-3'>
            <h6>
              City <span className='text-danger'>*</span>
            </h6>
            <Controller
              name='cityId'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <select
                  className={`${
                    errors?.countryId && 'error_input rounded'
                  } form-select`}
                  value={value}
                  onChange={onChange}
                >
                  <option disabled value={''}>
                    Select City
                  </option>
                  {allCities.map(e => (
                    <option value={e.isoCode}>{e.name}</option>
                  ))}
                </select>
              )}
            />
          </div>

          <div className='col-12 mt-3'>
            <h6>
              Food Group <span className='text-danger'>*</span>
            </h6>
            <Controller
              name='food_group'
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <select
                    {...field}
                    className={`form-select ${
                      !!errors?.food_group && 'error_input'
                    }`}
                  >
                    <option disabled value={null}>
                      Select Food Group
                    </option>
                    {FOOD_GROUP.map(e => (
                      <option value={e}>{e}</option>
                    ))}
                  </select>
                )
              }}
            />
          </div>
          <div className='col-12 mt-3'>
            <h6>
              Food Make <span className='text-danger'>*</span>
            </h6>
            <Controller
              name='food_make'
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <select
                    {...field}
                    className={`form-select ${
                      !!errors?.food_make && 'error_input'
                    }`}
                  >
                    <option disabled value={''}>
                      Select Food Make
                    </option>
                    {FOOD_MAKE.map(e => (
                      <option value={e}>{e}</option>
                    ))}
                  </select>
                )
              }}
            />
          </div>

          <div className='col-12 mt-3'>
            <h6>
              Food Free From <span className='text-danger'>*</span>
            </h6>
            <Controller
              name='food_free_from'
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <select
                    {...field}
                    className={`form-select ${
                      !!errors?.food_free_from && 'error_input'
                    }`}
                  >
                    <option disabled value={''}>
                      Select Food Free From
                    </option>
                    {FOOD_FREE_FROM.map(e => (
                      <option value={e}>{e}</option>
                    ))}
                  </select>
                )
              }}
            />
          </div>
          <div className='col-12 mt-3'>
            <h6>
              Calorie Count Range <span className='text-danger'>*</span>
            </h6>
            <Controller
              name='calorie_count_range'
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <select
                    {...field}
                    className={`form-select ${
                      !!errors?.food_variety && 'error_input'
                    }`}
                  >
                    <option disabled value={''}>
                      Calorie Count Range
                    </option>
                    {CALORIES_COUNT_RANGE.map(e => (
                      <option value={e}>{e}</option>
                    ))}
                  </select>
                )
              }}
            />
          </div>
          <div className='col-12 mt-3'>
            <h6>
              Cooking Type <span className='text-danger'>*</span>
            </h6>
            <Controller
              name='cooking_type'
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <select
                    {...field}
                    className={`form-select ${
                      !!errors?.food_variety && 'error_input'
                    }`}
                  >
                    <option disabled value={''}>
                      Select Cooking Type
                    </option>
                    {COOKING_TYPE.map(e => (
                      <option value={e}>{e}</option>
                    ))}
                  </select>
                )
              }}
            />
          </div>

          <div className='col-12 mt-3'>
            <h6>
              Color <span className='text-danger'>*</span>
            </h6>
            <Controller
              name='color'
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <select
                    {...field}
                    className={`form-select ${
                      !!errors?.food_variety && 'error_input'
                    }`}
                  >
                    <option disabled value={''}>
                      Select Color
                    </option>
                    {COLOR.map(e => (
                      <option value={e}>{e}</option>
                    ))}
                  </select>
                )
              }}
            />
          </div>
          <div className='col-12 mt-3'>
            <h6>
              Food Made <span className='text-danger'>*</span>
            </h6>
            <Controller
              name='food_made'
              control={control}
              defaultValue={null}
              rules={{ required: true }}
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
                  {errors?.food_made && (
                    <p className='error-message'>This field is required</p>
                  )}
                </div>
              )}
            />
          </div>

          <div className='col-12 mt-3'>
            <h6>
              Seller Type <span className='text-danger'>*</span>
            </h6>
            <Controller
              name='seller_type'
              control={control}
              defaultValue={null}
              rules={{ required: true }}
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
                  {errors?.seller_type && (
                    <p className='error-message'>This field is required</p>
                  )}
                </div>
              )}
            />
          </div>

          <div className='col-12 mt-3'>
            <h6>
              Verification <span className='text-danger'>*</span>
            </h6>
            <Controller
              name='verification'
              control={control}
              defaultValue={null}
              rules={{ required: true }}
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
                  {errors?.verification && (
                    <p className='error-message'>This field is required</p>
                  )}
                </div>
              )}
            />
          </div>
          {/* currency currency currency  */}

          <div className='col-12 mt-3'>
            <h6>
              Currency <span className='text-danger'>*</span>
            </h6>
            <Controller
              name='currency'
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => {
                return (
                  <Input
                    value={value}
                    error={errors.currency}
                    disabled
                    onChange={onChange}
                    placeholder='Currency'
                  />
                )
              }}
            />
          </div>

          <div className='col-12 mt-3'>
            <h6>
              Price <span className='text-danger'>*</span>
            </h6>
            <Controller
              name='price'
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <Input
                    {...field}
                    error={errors.price}
                    type='number'
                    className='form-control'
                    placeholder='Price'
                  />
                )
              }}
            />
          </div>

          <div className='col-12 mt-3'>
            <h6>
              Item Name <span className='text-danger'>*</span>
            </h6>
            <Controller
              name='name'
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => {
                return (
                  <Input
                    value={value}
                    error={errors.name}
                    onChange={onChange}
                    placeholder='Item Name'
                  />
                )
              }}
            />
          </div>

          <div className='col-12 mt-3'>
            <h6>
              Food Variety <span className='text-danger'>*</span>
            </h6>
            <Controller
              name='food_variety'
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <select
                    {...field}
                    className={`form-select ${
                      !!errors?.food_variety && 'error_input'
                    }`}
                  >
                    <option value={null}>Select Food Variety</option>
                    {FOOD_VARIETY.map(e => (
                      <option value={e}>{e}</option>
                    ))}
                  </select>
                )
              }}
            />
          </div>

          <div className='col-12 mt-3'>
            <h6>Description</h6>
            <Controller
              name='description'
              control={control}
              defaultValue={null}
              render={({ field }) => {
                return (
                  <textarea
                    {...field}
                    className='form-control'
                    placeholder='Description'
                  ></textarea>
                )
              }}
            />
          </div>

          <div className='d-flex justify-content-end gap-3 mt-4'>
            <Link to={'/pay-pal'}>
              <Button primary title='Choose Plans (for paypal)' />
            </Link>
            <Button secondary type='button' title={'Cancel'} />
            <Button
              disabled={isPlanExpired}
              primary
              type='submit'
              title={'Submit'}
            />
          </div>

          {isPlanExpired && (
            <div className='text-end text-danger mt-3 fw-bold'>
              Buy Any Plan to proceed
            </div>
          )}
        </div>
      </form>
    </div>
  )
}
