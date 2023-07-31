import { createContext,useState,useEffect } from "react";

const addCartItem = (cartItems,productToAdd)=>{
const existingCartItem = cartItems.find(item=>item.id===productToAdd.id)
if(existingCartItem){return cartItems.map(item=>item.id===productToAdd.id?{...item,quantity:item.quantity+1}:item)}
 return [...cartItems, {...productToAdd, quantity:1}]
}


export const CartContext = createContext(null)

export const CartProvider = ({children})=>{
 const [isCartOpen,setIsCartOpen] = useState(false)
 const [cartItems,setCartItems] = useState([])
 const [cartCount,setCartCount]=useState(0)
 useEffect(() => {
   setCartCount(cartItems.reduce((total,item)=>total+item.quantity,0))
 }, [cartItems])
 
 const addItemToCart=(productToAdd)=>setCartItems(addCartItem(cartItems,productToAdd))


 const value={isCartOpen,setIsCartOpen, addItemToCart, cartItems,cartCount}
 return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}