import React, { useState } from 'react'
import { AllProducts } from '../../components/common/AllProducts/AllProducts'
import { Profile } from '../Profile/Profile'
import { handleSignOut } from '../../services/firebase/auth'
import { useDispatch } from 'react-redux'
import { clearUser } from '../../store/slices/authSlice'
import { AdsListing } from '../AdsListing/AdsListing'
import { UserAds } from './UserAds'
import { useNavigate } from 'react-router-dom'

export const MyAds = () => {

    const [activePage, setActivePage] = useState("myAccount")
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const logout = async () => {
        navigate("/")
        await handleSignOut()
        dispatch(clearUser());
    };

    return (

        <div>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-12">
                    <h2>My Account</h2>
                    <br />
                    <div className={`pointer ${activePage==="myAccount"&& "my_add_active_tab"}`} onClick={() => setActivePage("myAccount")}>My Ads</div>
                    <div className={`my-1 pointer ${activePage==="settings"&& "my_add_active_tab"}`} onClick={() => setActivePage("settings")}>Settings</div>
                    <div className={`pointer`} onClick={logout}>Log Out</div>
                </div>
                <div className="col-lg-9 col-md-8 col-12">

                    {activePage === "settings" && <Profile />}
                    {activePage === "myAccount" && <UserAds />}



                </div>

            </div>


        </div>

    )
}
