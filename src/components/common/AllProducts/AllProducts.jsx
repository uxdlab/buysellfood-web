import React, { useEffect, useState } from 'react'
import { fetchMatchingData, getCollectionData } from '../../../services/firebase/getData'

import FoodItem from '../../FoodItem/FoodItem'

export const AllProducts = ({ allProducts, isDataFetched }) => {



    if (isDataFetched && allProducts?.length === 0) {
        return <div className='text-center py-5'>No Items found</div>
    }

    return (
        <div>
            <div className="food-display-list">

                {allProducts?.map((item, index) => {
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
