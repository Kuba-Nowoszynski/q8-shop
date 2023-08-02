import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import Button from "../button/Button";
import CartItem from "../cartItem/CartItem";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown-styles";

export default function CartDropdown() {
  const navigate = useNavigate();
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const goToCheckOutHandler = () => {
    setIsCartOpen(!isCartOpen);
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckOutHandler}>Go to checkout</Button>{" "}
    </CartDropdownContainer>
  );
}
