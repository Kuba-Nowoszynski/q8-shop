import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'


import Button from '../button/Button'
import CartItem from '../cartItem/CartItem'
import './cart-dropdown.scss'

export default function CartDropdown (){
 const {cartItems} = useContext(CartContext)
 return  <div className='cart-dropdown-container'>
  <div className='cart-items'>
   {cartItems.map(item=> <CartItem key={item.id} cartItem={item}/>)}
  
  </div>
<Button>Go to checkout</Button> </div>
}