import { Link } from "react-router-dom";

const CourseLink = () => {
  return (
    <div className="my-5 flex flex-col gap-2 items-start justify-start w-full h-full p-3">
      <h1 className="text-lg font-primary text-[#192655]">Courses: </h1>
      <Link
        to="/course/:courseId"
        className="text-lg text-[#192655] font-primary font-bold cursor-pointer"
      >
        Data Structure & Algorithm
      </Link>
      <Link
        to="/course/:courseId"
        className="text-lg text-[#192655] font-primary font-bold cursor-pointer"
      >
        Software Engineering
      </Link>
    </div>
  );
};

export default CourseLink;
