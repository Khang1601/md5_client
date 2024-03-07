// import React, { createContext, useState } from "react";
// import all_product from "../Components/Assets/all_product";

// export const ShopContext =  createContext(null);

// const getDefaultCart = ()=>{
//     let cart = {};
//     for (let index = 0; index < all_product.length+1; index++) {
//         cart[index] = 0;
//     }
//     return cart;
// }

// const ShopContextProvider = (props) => {

//     const [cartItems,setCartItems] = useState(getDefaultCart());
    
    
//     const addToCart = (itemId) =>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
//         console.log(cartItems);
//     }

//     const removeFromCart = (itemId) =>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//     }
    
//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//           if (cartItems[item] > 0) {
//             let itemInfo = all_product.find((product) => product.id === Number(item));
//             totalAmount += cartItems[item] * itemInfo.new_price;
//           }
//         }
//         return totalAmount;
//       }

//       const getTotalCartItems = () =>{
//         let totalItem = 0;
//         for(const item in cartItems)
//         {
//             if(cartItems[item]>0)
//             {
//                 totalItem+= cartItems[item];
//             }
//         }
//         return totalItem;
//       }

//     const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }

// export default ShopContextProvider;









import React, { createContext, useState, ReactNode } from "react";
import all_product from "../Components/Assets/all_product";
export const ShopContext = createContext<null | any>(null);

interface Cart {
  [key: string]: number;
}

const getDefaultCart = (): Cart => {
  let cart: Cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index.toString()] = 0;
  }
  return cart;
}

interface ShopContextProviderProps {
  children: ReactNode;
}

const ShopContextProvider: React.FC<ShopContextProviderProps> = (props) => {
  const [cartItems, setCartItems] = useState<Cart>(getDefaultCart());

  const addToCart = (itemId: string): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  }

  const removeFromCart = (itemId: string): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.new_price;
        }
      }
    }
    return totalAmount;
  }

  const getTotalCartItems = (): number => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;


