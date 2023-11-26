import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const courseList = async () => {
  if(sessionStorage.getItem("status") === "instructor"){
    return await axios.get("http://localhost:3000/courseInfo", {
      withCredentials: true,
    });
  }
  return await axios.get("http://localhost:3000/studentProfile", {
    withCredentials: true,
  });
};

const CourseCardOne = () => {
  const queryCacheName = (sessionStorage.getItem("status") === "instructor") ? "courseList" : "studentCourseList";
  const { data, isLoading, isError, error } = useQuery(
    queryCacheName,
    courseList,{
      staleTime:0
    }
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="flex flex-col justify-start items-start w-full h-auto">
      {data?.data.info.map((course) => {
        return (
          <div
            key={course.co_id}
            className="flex flex-col mb-5 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full md:flex-row"
          >
            <img
              className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={"http://localhost:3000/Image/" + course.co_pic}
              alt="course_pic"
            />
            <div className="flex flex-col justify-start p-6 bg-primary">
              <h5 className="mb-2 text-2xl font-medium text-white ">
                {course.co_title}
              </h5>
              <p className="mb-4 text-base text-white">{course.co_des}</p>
              <Link
                to={"/course/" + course.co_id}
                className=" px-6 pb-2 pt-2.5 text-lg font-medium leading-normal text-white"
              >
                Show Detail
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseCardOne;
