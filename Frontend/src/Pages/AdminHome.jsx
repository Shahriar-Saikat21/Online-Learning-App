import AdminLink from "../Components/AdminLink";
import AdminIncome from "../Components/AdminIncome";
import AdminCategoryChart from "../Components/AdminCategoryChart";
import AdminSaleChart from "../Components/AdminSaleChart";

const AdminHome = () => {
    return (
        <div className="flex flex-col w-full h-auto justify-center items-start md:max-w-[1460px] m-auto gap-3 ">
            <AdminLink />
            <h1 className="text-3xl font-primary font-bold mx-3 text-start px-[40px]">Dashboard</h1>
            <AdminIncome />
            <div className="flex  w-full h-auto py-10 flex-col md:justify-center px-[20px] md:items-center gap-4">
                <AdminCategoryChart />
                <AdminSaleChart />
            </div>
        </div>
    );
};

export default AdminHome;