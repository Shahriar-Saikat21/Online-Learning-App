import {Navigate} from 'react-router-dom'

const StudentHome = () => {
    if(!localStorage.getItem("token") && sessionStorage.getItem("status")!=="student"){
        return <Navigate to='/login' />
    }
    return (
        <div className="flex w-full h-[100vh] justify-center items-center">
            Student Home
        </div>
    );
};

export default StudentHome;