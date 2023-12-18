import AdminLink from "../Components/AdminLink";
import AdminIncome from "../Components/AdminIncome";
import AdminCategoryChart from "../Components/AdminCategoryChart";
import AdminSaleChart from "../Components/AdminSaleChart";
import AdminWithdrawChart from "../Components/AdminWithdrawChart";
import {Navigate} from 'react-router-dom'

const AdminHome = () => {
    if(!localStorage.getItem("token") && sessionStorage.getItem("status")!=="admin"){
        return <Navigate to='/login' />
    }
    return (
        <div className="flex flex-col w-full h-auto justify-center items-start md:max-w-[1460px] m-auto gap-3 ">
            <AdminLink />
            <h1 className="text-3xl font-primary font-bold mx-3 text-start px-[40px]">Dashboard</h1>
            <AdminIncome />
            <div className="flex  w-full h-auto py-10 flex-col md:justify-center px-[20px] md:items-center gap-4">
                <AdminCategoryChart />
                <AdminSaleChart />
                <AdminWithdrawChart />
            </div>
        </div>
    );
};

export default AdminHome;