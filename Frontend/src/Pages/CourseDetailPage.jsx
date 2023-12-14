import CourseHead from "../Components/CourseHead";
import AddModule from "../Components/AddModule";
import ModuleContainer from "../Components/ModuleContainer";
import { Link,useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const courseStatusGet =async (courseId) => {
  const status = sessionStorage.getItem("status");
  if(status==="instructor"){
    return await axios.get(`http://localhost:3000/getCourseStatusInstructor?id=${courseId}`, {
      withCredentials: true,
    });
  }else if(status==="student"){
    return await axios.get(`http://localhost:3000/getCourseStatusStudent?id=${courseId}`, {
      withCredentials: true,
    });
  }else if(status===null || status === undefined){
    return {data:{success:false,role:"visitor"}}
  }else if(status==='admin'){
    return {data:{success:true,role:"admin"}}
  }

};


const CourseDetailPage = () => {
  const [showCreate, setshowCreate] = useState(false);
  const [status,setStatus] = useState();
  const [role,setRole] = useState();
  const {courseId} = useParams();
  const { data, isLoading, isError, error } = useQuery(['courseStatus',courseId],()=>courseStatusGet(courseId),{
    onSuccess:(dataRetrieved)=>{
      setStatus(dataRetrieved.data.success);
      setRole(dataRetrieved.data.role);
    }
  });
  return (
    <div className="flex flex-col w-full h-[100vh] justify-start items-center pt-[70px] gap-5">
      <CourseHead status={status} role={role}/> 
      {status && role==='instructor' && (
        <Link
          to="#"
          className="text-lg text-[#486ced] hover:text-gray-600 cursor-pointer font-primary font-bold"
          onClick={() => setshowCreate(true)}
        >
          Create Module
        </Link>
      )}
      <AddModule
        isVisible={showCreate}
        onClose={() => {
          setshowCreate(false);
        }}
        courseID={courseId}
      />
      <ModuleContainer courseID={courseId} status={status} role={role}/>
    </div>
  );
};

export default CourseDetailPage;
