import React, { useEffect, useState } from 'react'
import { fetchMatchingData, getCollectionData } from '../../../services/firebase/getData'
import { getUserId, loader } from '../../../utils'
import FoodItem from '../../FoodItem/FoodItem'

export const AllProducts = ({ fetchProducts }) => {

    const isUserSpecific = fetchProducts === "UserSpecific"
    const [isDataFetched, setIsDataFetched] = useState(false)
    const [AllProducts, setAllProducts] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    let userId = getUserId()

    async function fetchData() {
        try {
            setIsDataFetched(false)
            loader.start()
            let res;
            if (isUserSpecific) {
                res = await fetchMatchingData("items", "restaurantId", "==", userId)
            }
            else {
                res = await getCollectionData("items");
            }
            console.log(res)
            setAllProducts(res)

            console.log(res)
        } catch (error) {

            console.log(error)
        }
        finally {
            setIsDataFetched(true)
            loader.stop()
        }
    }

    if (isDataFetched && AllProducts.length === 0) {
        return <div className='text-center py-5'>No Items found</div>
    }

    return (
        <div>
            <div className="food-display-list">

                {AllProducts?.map((item, index) => {
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

        </div>
    )
}
