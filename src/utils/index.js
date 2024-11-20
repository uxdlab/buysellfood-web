import { useSelector } from "react-redux"
import { USER_ROLES } from "./constants"
import store from "../store/store"
import { startLoader, stopLoader } from "../store/slices/loaderSlice"



export const loader = {
    start: () => store.dispatch(startLoader()),
    stop: () => store.dispatch(stopLoader())
}

export function removeEmptyKeys(obj) {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => value != null && value !== "")
    );
}

export const isUserLoggedIn = () => {
    const s = useSelector((state) => state.auth.userData)
    return s?.role === USER_ROLES.user
}

export const isRestaurantLoggedIn = () => {
    const s = useSelector((state) => state.auth.userData)
    return s?.role === USER_ROLES.restaurant
}
export const getUserId = () => {
    const s = useSelector((state) => state.auth)
    return s?.user?.uid || null
}

export const getUserData = () => {
    const s = useSelector((state) => state.auth?.userData)
    return s
}
