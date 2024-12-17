import React, { useEffect, useState } from 'react'
import { fetchMatchingData } from '../../services/firebase/getData'
import { useGetUserId, loader } from '../../utils'
import { AllProducts } from '../../components/common/AllProducts/AllProducts'

export const UserAds = () => {

    const [allProducts, setAllProducts] = useState([])
    const [isDataFetched, setIsDataFetched] = useState(false)

    let userId = useGetUserId()

    useEffect(() => {
        if (userId) {
            getData()
        }
    }, [userId])



    async function getData() {
        try {
            setIsDataFetched(false)
            loader.start()
            let res = await fetchMatchingData("items", "restaurantId", "==", userId)
            console.log(res)
            setAllProducts(res)
        } catch (error) {
            console.log(error)
        }
        finally {
            setIsDataFetched(true)
            loader.stop()
        }
    }








    return (
        <div >
            <h3 className='text-center mt-3'>My Ads</h3>
            <AllProducts
                allProducts={allProducts}
                isDataFetched={isDataFetched}
                fetchProducts="all" />


        </div>
    )
}
