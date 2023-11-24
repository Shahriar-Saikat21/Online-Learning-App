import {useQuery} from 'react-query'
import axios from 'axios'

const getAdminIncome = async () => {
    return await axios.get('http://localhost:3000/adminIncome',{
        withCredentials: true,
      })
}

const AdminIncome = () => {

    const {data, isLoading, isError, error} = useQuery('adminIncome', getAdminIncome)

    if (isLoading) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <div>{error.message}</div>
    }
    return (
        <div className="flex flex-col justify-start items-center md:flex-row  md:justify-center md:items-start w-full gap-5 pt-3 pb-5">
            <div className="w-[300px] h-50 border-l-4 border-[#192655] rounded-md p-5 shadow-xl">
                <h3 className="text-[36px] font-bold">Total Sell</h3>
                <h4 className="text-[#5E5E5E] text-[25px]">{data?.data[0].TOTAL_SELL}</h4>
            </div>
            <div className="w-[300px] h-50 border-l-4 border-[#192655] rounded-md p-5 shadow-xl">
                <h3 className="text-[36px] font-bold">Balance</h3>
                <h4 className="text-[#5E5E5E] text-[25px]">{
                    data?.data[0].SELL_AMOUNT/2 - data?.data[0].WITHDRAW_AMOUNT
                }</h4>
            </div>
            <div className="w-[300px] h-50 border-l-4 border-[#192655] rounded-md p-5 shadow-xl">
                <h3 className="text-[36px] font-bold">Courses</h3>
                <h4 className="text-[#5E5E5E] text-[25px]">{data?.data[0].TOTAL_COURSE}</h4>
            </div>
            <div className="w-[300px] h-50 border-l-4 border-[#192655] rounded-md p-5 shadow-xl">
                <h3 className="text-[36px] font-bold">Instructor</h3>
                <h4 className="text-[#5E5E5E] text-[25px]">{data?.data[0].TOTAL_INSTRUCTOR}</h4>
            </div>
            <div className="w-[300px] h-50 border-l-4 border-[#192655] rounded-md p-5 shadow-xl">
                <h3 className="text-[36px] font-bold">Student</h3>
                <h4 className="text-[#5E5E5E] text-[25px]">{data?.data[0].TOTAL_STUDENT}</h4>
            </div>
        </div>
    );
};

export default AdminIncome;