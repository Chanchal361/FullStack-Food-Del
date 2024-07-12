import { createContext, useState, useEffect } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((pre) => ({ ...pre, [itemId]: 1 }));
    } else {
      setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] + 1 }));
    }
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const removeFromCart = (itemId) => {
    setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] - 1 }));
  };

  // const addToCart=(item,quantity)=>{
  //     setCartItems({...cartItems,[item.id]:{...cartItems[item.id],quantity:cartItems[item.id]?.quantity+quantity||quantity}});
  // }

  const getTotoalFromCart = () => {
    let totlaAmount = 0;
    for (let item in cartItems) 
      {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totlaAmount += itemInfo.price * cartItems[item];
      }
    }
    return totlaAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
    getTotoalFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
