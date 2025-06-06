import React, { createContext, useState, useEffect } from 'react';
import { food_list } from '../assets/assets/frontend_assets/assets';
export const StoreContext = createContext(null);

const StoreProvider = (props) => {

const[cartItems, setCartItems] = useState({});

const addToCart = (itemId) => {
  if(!cartItems[itemId]){
    setCartItems((prev) => ({
      ...prev,
      [itemId]: 1
    }))
  }
  else{
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1
    }))
  }
}
const removeFromCart = (itemId) => {
  setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))

}



const getTotalCartAmount = () => {
  let total = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = food_list.find((product) =>product._id === item);
      total += itemInfo.price * cartItems[item];
    }
   
  }
  return total;
}


    const contextValue = {
      food_list,
      cartItems,
      addToCart,
      removeFromCart,
      setCartItems,
      getTotalCartAmount,
    };
  
    return (
      <StoreContext.Provider value={contextValue}>  
        {props.children}
      </StoreContext.Provider>
    );
  };

export default StoreProvider;