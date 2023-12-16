import {Navigate} from 'react-router-dom'
import StudentPurchaseHistory from '../Components/StudentPurchaseHistory';

const StudentHome = () => {
    if(!localStorage.getItem("token") && sessionStorage.getItem("status")!=="student"){
        return <Navigate to='/login' />
    }
    return (
        <div className="flex w-full h-[100dvh] justify-start items-start pt-[80px]">
            <StudentPurchaseHistory />
        </div>
    );
};

export default StudentHome;