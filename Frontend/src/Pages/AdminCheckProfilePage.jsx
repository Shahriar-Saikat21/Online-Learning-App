import SearchBar from "./../Components/SearchBar";
import ProfileCard from "../Components/ProfileCard";
import CourseLink from "../Components/CourseLink";
import {Navigate} from 'react-router-dom'

const AdminCheckProfilePage = () => {
  if(!localStorage.getItem("token") && sessionStorage.getItem("status")!=="admin"){
    return <Navigate to='/login' />
}
  return (
    <div className="flex flex-col w-full h-[100vh] justify-start items-center md:max-w-[1460px] m-auto gap-2">
      <SearchBar />
      <div className="flex md:flex-row flex-col justify-start items-center w-full md:w-auto h-auto  gap-3 border-2 border-[#192655] p-5 rounded-xl">
        <div className="flex flex-col">
          <ProfileCard />
        </div>
        <CourseLink />
      </div>
    </div>
  );
};

export default AdminCheckProfilePage;
