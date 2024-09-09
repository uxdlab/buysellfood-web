import { createContext, useContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = 'http://localhost:4000';
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if(token){
            await axios.post(`${url}/api/cart/add`, { itemId }, { headers: {token} });
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if(token){
            await axios.post(`${url}/api/cart/remove`, { itemId }, { headers: {token} });
        }    
    }

   
    const addItem = (item) => {
        setSelectedItem((prev) => [...prev, item]);
      };
      
      const removeItem = (itemRemove) => {
        setSelectedItem((prev) =>
          prev.filter((item) => item !== itemRemove)
        );
      };
    



    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        const response = await axios.get(`${url}/api/food/list`);
        setFoodList(response.data.data);
    }

    const loadCartData = async (token) => {
        const response = await axios.post(`${url}/api/cart/get`,{}, { headers: {token} });
        if(response.data.success) {
            setCartItems(response.data.cartData);
        }
    }

    
    useEffect(() => {   
        async function loadData() {
            await fetchFoodList();
            if(localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }

        loadData();
    }, []);
    
    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
        fetchFoodList,
        addItem,
        removeItem,
        selectedItem
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
