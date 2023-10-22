import { useState } from "react";

import InstructorIncome from "../Components/InstructorIncome";
import InstructorChart from "../Components/InstructorChart";
import WithdrawModal from "../Components/WithdrawModal";

const InstructorHome = () => {
    const [showWithdarwModal, setWithdarwModal] = useState(false);
    return (
        <div className="flex flex-col w-full h-auto justify-center items-center md:max-w-[1460px] m-auto gap-3">
            <InstructorIncome />
            <button className="btn" onClick={()=>{
                setWithdarwModal(true);
            }}>
              Withdraw Income
            </button>
            <InstructorChart/>
            <WithdrawModal isVisible={showWithdarwModal} onClose={()=>{setWithdarwModal(false)}}/>
        </div>
    );
};

export default InstructorHome;