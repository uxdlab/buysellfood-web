import { useSelector } from 'react-redux'
import { USER_ROLES } from './constants'
import store from '../store/store'
import { startLoader, stopLoader } from '../store/slices/loaderSlice'
import moment from 'moment/moment'
import { stopToast, toastaction } from '../store/slices/toastSlice'

export const loader = {
  start: () => store.dispatch(startLoader()),
  stop: () => store.dispatch(stopLoader())
}

export const toast = {
  success: msg => store.dispatch(toastaction({ type: 'success', msg })),
  error: msg => store.dispatch(toastaction({ type: 'error', msg })),
  warning: msg => store.dispatch(toastaction({ type: 'warning', msg })),
  info: msg => store.dispatch(toastaction({ type: 'info', msg })),
  stop: () => store.dispatch(stopToast())
}

export function removeEmptyKeys (obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value != null && value !== '')
  )
}

export const getAfterDate = skipedDays => {
  const today = moment()
  return today.add(skipedDays, 'days').format('YYYY-MM-DD')
}

export const isUserLoggedIn = () => {
  const s = useSelector(state => state.auth.userData)
  return s?.role === USER_ROLES.user
}
export const isLoggedIn = () => {
  const s = useSelector(state => state?.auth?.userData)
  return !!s
}

export const isRestaurantLoggedIn = () => {
  const s = useSelector(state => state.auth.userData)
  return s?.role === USER_ROLES.restaurant
}

export const getUserId = () => {
  const s = useSelector(state => state.auth)
  return s?.user?.uid || null
}

export const getUserData = () => {
  const s = useSelector(state => state.auth?.userData)
  return s
}

export function isUserPlanExpired (date) {
  console.log(date, 'ppp')
  if (!date) {
    return true // Return true if the date is not provided or is not in the correct format.
  }

  // Check if the planExpireDate is before today
  if (moment(date, 'YYYY-MM-DD').isBefore(moment(), 'day')) {
    return true // Return false if the plan has expired
  }
  return false // Return true if the plan is still valid
}

export const isFreePlanAvailable = () => {
  let userData = getUserData()
  return !userData?.isPaid
}
