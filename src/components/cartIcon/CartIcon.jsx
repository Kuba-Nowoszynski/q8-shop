import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import ShopIcon from "/public/shopping-bag.svg";
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon-styles.jsx";

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  return (
    <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
      <ShoppingIcon src={ShopIcon} alt="Cart icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
