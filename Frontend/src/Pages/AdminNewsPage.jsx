import { Link } from "react-router-dom";
import { useState } from "react";
import {Navigate} from 'react-router-dom'

import NewsModal from "../Components/NewsModal";
import NewsTable from "../Components/NewsTable";

const AdminNewsPage = () => {
  const [addNewsModal, setAddNewsModal] = useState(false);
  if(!localStorage.getItem("token") && sessionStorage.getItem("status")!=="admin"){
    return <Navigate to='/login' />
}
  return (
    <div className="flex flex-col w-full h-[100vh] justify-start items-start md:max-w-[1460px] m-auto gap-3 pt-[90px]">
      <h1 className="text-3xl font-primary font-bold mx-3 text-start px-[40px]">
        News Segment Controll Panel
      </h1>
      <Link
        to="#"
        className="text-lg text-[#4968db] hover:text-gray-600 cursor-pointer px-[50px]"
        onClick={() => setAddNewsModal(true)}
      >
        Add News
      </Link>
      <NewsTable />
      <NewsModal isVisible={addNewsModal} onClose={()=>{setAddNewsModal(false)}}/>
    </div>
    
  );
};

export default AdminNewsPage;
