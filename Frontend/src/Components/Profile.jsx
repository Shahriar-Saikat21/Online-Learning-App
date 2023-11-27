import EditInfoModal from "./EditInfoModal";
import EditPicModal from "./EditPicModal";
import CreateCourseModal from "./CreateCourseModal";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const profileInfo = async () => {
  return axios.get("http://localhost:3000/instructorProfile", {
    withCredentials: true,
  });
};

const Profile = () => {
  const [showEditInfo, setEditInfo] = useState(false);
  const [showEditPic, setEditPic] = useState(false);
  const [showCreate, setshowCreate] = useState(false);

  const { data, isLoading, isError, error } = useQuery(
    "instructorProfileInfo",
    profileInfo
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="flex flex-col w-full md:w-[500px] md:h-[100vh] h-[300px] justify-start items-start px-[50px] pt-[80px] gap-3">
      <div className="flex md:flex-col gap-3">
        <div className="w-32 md:w-[400px] md:h-[300px] h-32 rounded-md ring ring-[#192655] ring-offset-2">
          <img
            src={"http://localhost:3000/Image/" + data?.data.info[0].u_pic}
            alt="profile-pic"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-primary">
            {data?.data.info[0].user_name}
          </h1>
          <h2 className="text-2xl text-primary">
            {data?.data.info[0].user_email}{" "}
          </h2>
          <h2 className="text-2xl text-primary">
            {data?.data.info[0].user_role}{" "}
          </h2>
        </div>
      </div>
      <div>
        <Link
          to="#"
          className="text-lg text-[#192655] hover:text-gray-600 cursor-pointer mr-5"
          onClick={() => setEditInfo(true)}
        >
          Edit Profile
        </Link>
        <Link
          to="#"
          className="text-lg text-[#192655] hover:text-gray-600 cursor-pointer mr-5"
          onClick={() => setEditPic(true)}
        >
          Change Picture
        </Link>

        {data?.data.info[0].user_role === "instructor" && (
          <Link
            to="#"
            className="text-lg text-[#192655] hover:text-gray-600 cursor-pointer"
            onClick={() => setshowCreate(true)}
          >
            Create Course
          </Link>
        )}
      </div>
      <EditInfoModal
        isVisible={showEditInfo}
        onClose={() => {
          setEditInfo(false);
        }}
      />
      <EditPicModal
        isVisible={showEditPic}
        onClose={() => {
          setEditPic(false);
        }}
      />
      <CreateCourseModal
        isVisible={showCreate}
        onClose={() => {
          setshowCreate(false);
        }}
      />
    </div>
  );
};

export default Profile;
