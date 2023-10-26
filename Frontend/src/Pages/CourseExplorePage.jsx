import SearchBar from "../Components/SearchBar";
import CourseCardHolder from "../Components/CourseCardHolder";

const CourseExplorePage = () => {
    return (
        <div className="flex flex-col w-full h-[100vh] justify-start items-center m-auto gap-3">
            <SearchBar />
            <CourseCardHolder />
        </div>
    );
};

export default CourseExplorePage;