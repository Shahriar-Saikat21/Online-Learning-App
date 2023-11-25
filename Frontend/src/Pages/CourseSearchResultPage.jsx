import SearchBar from "../Components/SearchBar";
import CourseList from '../Components/CourseCardOne';

const CourseSearchResultPage = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] justify-start items-center m-auto gap-3">
      <SearchBar />
      <div className="flex flex-col w-full h-auto justify-center items-start mt-5 px-[80px]">
        <h2 className="text-xl font-primary font-semibold text-[#192655] mb-5">
          Your Search Results :
        </h2>
        <div className="flex flex-col justify-center items-center w-full h-auto gap-3">
          <div className="flex flex-col justify-center items-center md:w-[70%]">
          <CourseList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSearchResultPage;
