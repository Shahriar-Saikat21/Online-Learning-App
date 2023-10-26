

const AdminIncome = () => {
    return (
        <div className="flex flex-col justify-start items-center md:flex-row  md:justify-center md:items-start w-full gap-5 pt-3 pb-5">
            <div className="w-[300px] h-50 border-l-4 border-[#192655] rounded-md p-5 shadow-xl">
                <h3 className="text-[36px] font-bold">Total Sell</h3>
                <h4 className="text-[#5E5E5E] text-[25px]">BDT 100000</h4>
            </div>
            <div className="w-[300px] h-50 border-l-4 border-[#192655] rounded-md p-5 shadow-xl">
                <h3 className="text-[36px] font-bold">Balance</h3>
                <h4 className="text-[#5E5E5E] text-[25px]">BDT 100000</h4>
            </div>
            <div className="w-[300px] h-50 border-l-4 border-[#192655] rounded-md p-5 shadow-xl">
                <h3 className="text-[36px] font-bold">Courses</h3>
                <h4 className="text-[#5E5E5E] text-[25px]">90 </h4>
            </div>
            <div className="w-[300px] h-50 border-l-4 border-[#192655] rounded-md p-5 shadow-xl">
                <h3 className="text-[36px] font-bold">Instructor</h3>
                <h4 className="text-[#5E5E5E] text-[25px]">100</h4>
            </div>
            <div className="w-[300px] h-50 border-l-4 border-[#192655] rounded-md p-5 shadow-xl">
                <h3 className="text-[36px] font-bold">Student</h3>
                <h4 className="text-[#5E5E5E] text-[25px]">100</h4>
            </div>
        </div>
    );
};

export default AdminIncome;