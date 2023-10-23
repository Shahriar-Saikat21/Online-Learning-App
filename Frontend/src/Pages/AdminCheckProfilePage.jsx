import SearchBar from "./../Components/SearchBar";
import ProfileCard from "../Components/ProfileCard";
import CourseLink from "../Components/CourseLink";

const AdminCheckProfilePage = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] justify-start items-center md:max-w-[1460px] m-auto gap-2">
      <SearchBar />
      <div className="flex md:flex-row flex-col justify-start items-center w-full md:w-auto h-auto  gap-3 border-2 border-[#192655] p-5 rounded-xl">
        <div className="flex flex-col">
          <ProfileCard />
          <button className="btn inline-block" onClick={() => {}}>
            Block Account
          </button>
        </div>
        <CourseLink />
      </div>
    </div>
  );
};

export default AdminCheckProfilePage;
