import EditCourseTitle from "../Components/EditCourseTitle";
import { Link,useNavigate, useParams} from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const courseInfo =async (courseId) => {
  return await axios.get(`http://localhost:3000/getCourseHead?id=${courseId}`, {
    withCredentials: true,
  });
};

const deleteCourseFunc = async (courseID) => {
  // return await axios.get(`http://localhost:3000/deleteCourse?id=${courseID}`, {
  //   withCredentials: true,
  // });
  
};

const CourseHead = ({status,role}) => {
  const {courseId} = useParams();
  const navigate = useNavigate();
  const [showCreate, setshowCreate] = useState(false);
  const { data, isLoading, isError, error } = useQuery(['courseHead',courseId],()=>courseInfo(courseId));

  const deleteCourse = async (courseID) => {
    // const result = await deleteCourseFunc(courseID);
    // if(result.success){
    //   alert("Course deleted successfully");
    //   navigate("/instructor-profile");
    // }else{
    //   alert("Course deletion failed");
    //   navigate("/instructor-profile");
    // }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="flex flex-col justify-start items-start bg-slate-100 w-full md:w-1/2 h-auto p-5 shadow-md ">
      <div className="w-32 md:w-full md:h-[300px] h-32 rounded-md mb-3">
          <img
            src={"http://localhost:3000/Image/" + data?.data[0].co_pic}
            alt="profile-pic"
            className="h-full w-full object-cover rounded-md"
          />
      </div>
      <h1 className="text-3xl font-primary mb-2 font-bold">{data?.data[0].co_title}</h1>
      <h2 className="text-2xl font-primary mb-2">{data?.data[0].user_name}</h2>
      <p className="text-md font-primary text-justify mb-2">{data?.data[0].co_des}</p>
      <h2 className="text-xl font-primary font-bold">{data?.data[0].co_price} BDT</h2>

      {status && role==="instructor" && (
        <>
          <Link
            to="#"
            className="text-lg text-[#486ced] hover:text-gray-600 cursor-pointer"
            onClick={() => setshowCreate(true)}
          >
            Edit Course
          </Link>
          <Link
            to="#"
            className="text-lg text-[#486ced] hover:text-gray-600 cursor-pointer"
            onClick={() => deleteCourse(courseId)}
          >
            Delete Course
          </Link>
        </>
      )}
      <EditCourseTitle
        isVisible={showCreate}
        onClose={() => {
          setshowCreate(false);
        }}
        name={data?.data[0].co_title}
        prices={data?.data[0].co_price}
        des={data?.data[0].co_des}
        courseID={courseId}
      />
    </div>
  );
};

export default CourseHead;
