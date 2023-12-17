import { useState } from "react";
import {Navigate} from 'react-router-dom'

import InstructorIncome from "../Components/InstructorIncome";
import InstructorChart from "../Components/InstructorChart";
import WithdrawModal from "../Components/WithdrawModal";
import InstructorSaleCart from "../Components/InstructorSaleCart";
import InstructorWithdrawHistory from "../Components/InstructorWithdrawHistory";

const InstructorHome = () => {
    const [showWithdarwModal, setWithdarwModal] = useState(false);
    if(!localStorage.getItem("token") && sessionStorage.getItem("status")!=="instructor"){
        return <Navigate to='/login' />
    }
    return (
        <div className="flex flex-col w-full h-auto justify-center items-center md:max-w-[1460px] m-auto gap-3">
            <InstructorIncome />
            <button className="btnTwo" onClick={()=>{
                setWithdarwModal(true);
            }}>
              Withdraw Income
            </button>
            <InstructorChart/>
            <InstructorSaleCart/>
            <WithdrawModal isVisible={showWithdarwModal} onClose={()=>{setWithdarwModal(false)}}/>
            <InstructorWithdrawHistory/>
        </div>
    );
};

export default InstructorHome;