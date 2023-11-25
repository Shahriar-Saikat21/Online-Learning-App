import EditInfoModal from "./EditInfoModal";
import EditPicModal from "./EditPicModal";

import { Link } from "react-router-dom";
import { useState } from "react";
import {useQuery} from 'react-query'
import axios from 'axios'

const profileInfo = async () => {
  return axios.get('http://localhost:3000/instructorProfile',{
      withCredentials: true,
    });
};

const Profile = () => {
  const [showEditInfo, setEditInfo] = useState(false);
  const [showEditPic, setEditPic] = useState(false);

  const {data,isLoading,isError,error} = useQuery("instructorProfileInfo", profileInfo);

    if(isLoading){
        return <div>Loading...</div>
    }

    if(isError){
        return <div>{error.message}</div>
    }

  return (
    <div className="flex flex-col w-full md:w-[500px] md:h-[100vh] h-[300px] justify-start items-start px-[50px] pt-[80px] gap-3">
      <div className="flex md:flex-col gap-3">
        <div className="w-32 md:w-[400px] md:h-[300px] h-32 rounded-md ring ring-[#192655] ring-offset-2">
          <img
            src={pic}
            alt="profile-pic"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-primary">
            Shahriar Imtiaz Saikat
          </h1>
          <h2 className="text-2xl text-primary">saikatbass@gmail.com</h2>
          <h2 className="text-2xl text-primary">Student</h2>
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
          className="text-lg text-[#192655] hover:text-gray-600 cursor-pointer"
          onClick={() => setEditPic(true)}
        >
          Change Picture
        </Link>
      </div>
      <EditInfoModal isVisible={showEditInfo} onClose={()=>{
        setEditInfo(false);
      }}/>
      <EditPicModal isVisible={showEditPic} onClose={()=>{
        setEditPic(false);
      }}/>
    </div>
  );
};

export default Profile;
