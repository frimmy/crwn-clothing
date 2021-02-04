import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
// import {
//   CardElement,
//   Elements,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe("pk_test_A3BV4nKGdoo2a6ZDXzLbprGJ00FBvTsq9E");

const StripeCheckOutButton = ({ price }) => {
  // const stripe = useStripe();
  // const elements = useElements();
  const priceForStripe = price * 1000;
  const publishableKey = "pk_test_A3BV4nKGdoo2a6ZDXzLbprGJ00FBvTsq9E";

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const { error, paymentMethod } = await stripe.createPaymentMethod({
  //     type: "card",
  //     card: elements.getElement(CardElement),
  //   });

  //   if (error) {
  //     console.log('[error]', error);
  //   } else {
  //     console.log('[PaymentMethod]', paymentMethod);
  //   }
  // };
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((respons) => {
        alert("payment successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment, please use the provided credit card"
        );
      });
  };

  // stripePromise ? (
  //   <Elements stripe={stripePromise}>
  //     <form onSubmit={handleSubmit}>
  //       <CardElement />
  //       <button type="submit" disabled={!stripe}>
  //         Pay
  //       </button>
  //     </form>
  //   </Elements>
  // ) : (
  return (
    <StripeCheckout
      label="Pay Now"
      name="FRIMMY Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckOutButton;
