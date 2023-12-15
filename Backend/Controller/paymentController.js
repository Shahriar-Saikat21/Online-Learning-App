import connection from "../Middleware/dbConnect.js";
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51ON8UXGsc4CuULH4I6fugQamaDEq6wHVRDo1ibw9F8oQNK9tMBJJKUPOEthXqmDq5Y4IqxX67XG9Ru7HCIFS49gW00GJfwNY8n');

export const createCheckoutSession = async (req, res) => {
    const {product} = req.body;
    
    const lineItems = product.map((product)=>({
        price_data:{
            currency:"usd",
            product_data:{
                name:product.productName,

            },
            unit_amount:product.price * 100,
        },
        quantity:1
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/sucess",
        cancel_url:"http://localhost:3000/cancel",
    });

    res.json({id:session.id})

};