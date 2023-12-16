import Logo from "../assets/symbol.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PDFFile = () => {
  const { courseId, courseTitle } = useParams();
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userID, setUserID] = useState();

  useEffect(() => {
    const data = async () => {
      const result = await axios.get(
        "http://localhost:3000/instructorProfile",
        {
          withCredentials: true,
        }
      );

      setUserName(result.data.info[0].user_name);
      setUserEmail(result.data.info[0].user_email);
      setUserID(result.data.info[0].user_id);
    };
    data();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100dvh]">
      <div className="w-32 h-32 flex justify-center items-center my-5">
        <img src={Logo} alt="Sample" className="w-full h-full" />
      </div>
      <div className="flex flex-col justify-start items-start w-full h-full">
        <h2 className="text-3xl font-primary font bold mb-5">Certificate From <br/> Learn Hub</h2>
        <p className=" text-xl font-primary">
          Course ID : {courseId}
          <br />
          Course Title : {courseTitle}
          <br />
          Completed By : {userName}
          <br />
          USER ID : {userID}
          <br />
          User Email: {userEmail}
          <br />
        </p>
      </div>
    </div>
  );
};

export default PDFFile;
