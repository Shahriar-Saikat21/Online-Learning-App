import EditCourseTitle from "../Components/EditCourseTitle";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const courseInfo = async () => {
  const id = sessionStorage.getItem("courseID");
  return axios.get(`http://localhost:3000/getCourseHead?id=${id}`, {
    withCredentials: true,
  });
};

const CourseHead = ({ courseID }) => {
  const status = sessionStorage.getItem("status");
  const [showCreate, setshowCreate] = useState(false);
  const { data, isLoading, isError, error } = useQuery(
    "courseHead",
    courseInfo 
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="flex flex-col justify-start items-start bg-slate-100 w-1/2 h-auto p-5">
      <h1 className="text-3xl font-primary">{data.data[0].co_title}</h1>
      <h2 className="text-2xl font-primary">{data.data[0].user_name}</h2>
      <p className="text-md font-primary text-justify">
        {data.data[0].co_des}
      </p>
      <h2>{data.data[0].co_price} BDT</h2>
      {status === "instructor" && (
        <Link
          to="#"
          className="text-lg text-[#486ced] hover:text-gray-600 cursor-pointer"
          onClick={() => setshowCreate(true)}
        >
          Edit Course
        </Link>
      )}
      <EditCourseTitle
        isVisible={showCreate}
        onClose={() => {
          setshowCreate(false);
        }}
        name={data.data[0].co_title}
        prices={data.data[0].co_price}
        des={data.data[0].co_des}
        courseID={courseID }
      />
    </div>
  );
};

export default CourseHead;
