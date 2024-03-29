import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";
import PaymentForm from "../../components/paymentForm/PaymentForm";

import "./checkout.scss";

export default function Checkout() {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <span className="total">Total: ${totalPrice}</span>
      <PaymentForm />
    </div>
  );
}
