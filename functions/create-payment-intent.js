/* eslint-disable no-undef */
import "dotenv/config";
import Stripe from "stripe";
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

//import.meta.env.VITE_PUBLISHABLE_KEY
// require("dotenv").config();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    console.log("inside handler");
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
