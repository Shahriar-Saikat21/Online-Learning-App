import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';

const makePayment = async (amount,seller,courseId,courseName) => {
  const stripe = await loadStripe("pk_test_51ON8UXGsc4CuULH4VV360uREc0M98onDneai7L46o0XX3UF9WHaM7DZz4HxO4XPwuLP3XB0jIPC94Hfzk2x9PjWO00gw7zVOa5");

        const body = {
            product :[{price:amount, sellBy : seller, courseID : courseId, productName:courseName}]
        }

        const response = await axios.post("http://localhost:3000/create-checkout-session",body,{
          withCredentials: true,
        });

        const result = stripe.redirectToCheckout({
            sessionId:response.data.id
        });
        
        if(result.error){
            console.log(result.error);
        }
};

const CheckoutForm = ({ amount,seller,courseName }) => {
  const {courseId} = useParams();

  return (
    <>
        <h1>Amount {amount} </h1>
        <h1>course {courseId} </h1>
        <h1>seller {seller} </h1>
        <button className="btnTwo" type="button" onClick={()=>{makePayment(amount,seller,courseId,courseName)}}>
            Pay Now
          </button>
    </>
    
  );
};
export default CheckoutForm;