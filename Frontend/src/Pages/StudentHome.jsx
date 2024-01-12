import {Navigate} from 'react-router-dom'
import StudentPurchaseHistory from '../Components/StudentPurchaseHistory';
import {useSelector} from 'react-redux';

const StudentHome = () => {
    const isLogin = useSelector((state) => state.logAuth.status);
    if(isLogin!=="student"){
        return <Navigate to='/login' />
    }
    return (
        <div className="flex w-full h-[100dvh] justify-start items-start pt-[80px]">
            <StudentPurchaseHistory />
        </div>
    );
};

export default StudentHome;