import { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../button/Button";
import { buttonTypeClasses } from "../button/Button";

import { PaymentFormContainer, FormContainer } from "./payment-styles.jsx";

export default function PaymentForm() {
  const { currentUser } = useContext(UserContext);
  const { totalPrice: amount } = useContext(CartContext);
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }), //in cents
    }).then((res) => res.json());
    const clientSecret = response.paymentIntent.client_secret;
    console.log("update");
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.paymentIntent.status === "succeeded")
      alert("Payment Successful");
    else if (paymentResult.error) alert(paymentResult.error);
    else
      alert(
        "An unknown error has ocurred. Please contact support for further information"
      );
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button
          isLoading={isProcessingPayment}
          buttonType={buttonTypeClasses.inverted}
          style={{ margin: "1rem auto" }}
        >
          Pay now
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
}
