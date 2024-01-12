import Profile from "../Components/Profile";
import CourseList from '../Components/CourseCardOne';
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux';

const InstructorProfile = () => {
  const isLogin = useSelector((state) => state.logAuth.status);
  if(isLogin!=="instructor"){
    return <Navigate to='/login' />
  }
  return (
    <div className="flex flex-col md:flex-row w-full h-[100vh] justify-start items-center md:max-w-[1460px] m-auto">
      <Profile />
      <div className="flex flex-col w-full h-[100vh] justify-start items-start px-[50px] md:pt-[80px] mb-5 pb-5">
        <h1 className="text-3xl font-primary text-primary font-bold mb-5">
          Your Courses
        </h1>
        <CourseList />
      </div>
    </div>
  );
};

export default InstructorProfile;
