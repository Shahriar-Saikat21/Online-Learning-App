import CheckoutForm from "./CheckoutForm";
import { useEffect, useState } from "react";

const Payment = ({amount,title,seller,isVisible,onClose}) => {  

    const handle = (e) => {
        if (e.target.id === "wrapper") onClose();
    };

    if (!isVisible) return null;
    
    return (
        <div id="wrapper" onClick={handle}
            className="bg-black fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10"
        >
            
            <div className="flex flex-col items-start justify-center bg-white rounded-lg w-[600px] p-6">
                <h1 className="text-2xl text-[#192655] font-semibold font-primary text-center mb-4">Make Payment</h1>
                <h1 className="text-xl text-[#192655] font-semibold font-primary text-center mb-4">Course Title : {title}</h1>
                <h1 className="text-xl text-[#192655] font-semibold font-primary text-center mb-4">Amount: {amount} BDT</h1>
                <h1 className="text-xl text-[#192655] font-semibold font-primary text-center mb-4">seller: {seller} </h1>
                <CheckoutForm amount={amount} seller={seller} courseName={title}/>
            </div>
        </div>
    );
};

export default Payment;