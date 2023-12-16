import connection from "../Middleware/dbConnect.js";
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51ON8UXGsc4CuULH4I6fugQamaDEq6wHVRDo1ibw9F8oQNK9tMBJJKUPOEthXqmDq5Y4IqxX67XG9Ru7HCIFS49gW00GJfwNY8n');

export const createCheckoutSession = async (req, res) => {
    const {product} = req.body;

    
    const lineItems = product.map((product)=>({
        price_data:{
            currency:"bdt",
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
        success_url:`http://localhost:5173/payemntSuccess/${product[0].courseID}/${product[0].sellBy}/${product[0].price}`,
        cancel_url:"http://localhost:5173/cancel",
    });

    res.json({id:session.id})

};

export const sellSucess = async (req, res) => {
    try {
        const query = `INSERT INTO purchase(p_id,p_date,p_amount,co_id,buyer_id,seller_id) VALUES ('',CURRENT_TIMESTAMP(),?,?,?,?)`;
        connection.query(query, [req.body.productPrice,req.body.courseId,req.userId,req.body.sellerId], function (err, rows) {
          if (err) throw err;
          res.json({ success: true, message: "Purchase Successfully" });
        });
      } catch (err) {
        res.status(200).json({ message: err.message, success: false });
      }
};