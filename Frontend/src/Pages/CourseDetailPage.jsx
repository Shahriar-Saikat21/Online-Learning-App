import CourseHead from "../Components/CourseHead";
import AddModule from "../Components/AddModule";
import ModuleContainer from "../Components/ModuleContainer";
import { Link } from "react-router-dom";
import { useState } from "react";

const CourseDetailPage = () => {
  const courseID = sessionStorage.getItem("courseID");
  const [showCreate, setshowCreate] = useState(false);
  return (
    <div className="flex flex-col w-full h-[100vh] justify-start items-center pt-[70px] gap-5">
      <CourseHead courseID={courseID} />
      {sessionStorage.getItem("status") === "instructor" && (
        <Link
          to="#"
          className="text-lg text-[#486ced] hover:text-gray-600 cursor-pointer"
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
        courseID={courseID}
      />
      <ModuleContainer courseID={courseID} />
    </div>
  );
};

export default CourseDetailPage;
