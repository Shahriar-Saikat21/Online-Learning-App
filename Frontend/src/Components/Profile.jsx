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
      
    </div>
  );
};

export default Profile;
