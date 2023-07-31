import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

import ShopIcon from "/public/shopping-bag.svg"
import "./cart-icon.scss"

export default function CartIcon (){
 const {setIsCartOpen, cartCount}=useContext(CartContext)
 return <div className="cart-icon-container" onClick={()=>setIsCartOpen(prev=>!prev)}>
  <img src={ShopIcon} alt="" className='shopping-icon'/><span className="item-count">{cartCount}</span></div>
}