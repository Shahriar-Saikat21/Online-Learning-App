import Pic from "../assets/home-pic.jpg";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto w-full justify-start items-start md:items-center md:pt-[90px] pt-[20px] pl-10 gap-5 md:px-[60px] mb-5">
      <div className="flex flex-col h-full w-1/2 justify-center items-start pt-[90px] md:pt-0">
        <h1 className="text-6xl font-bold font-primary text-[#192655]">
          Online learning & Teaching Platform
        </h1>
        <p className="text-2xl font-bold mt-5 font-primary text-[#192655]">
          Congratulations... <br />
          you are just one click away from what you need
        </p>
        <Link
          to="/allCourse"
          className="btn mt-5 text-center"
        >
          Explore Courses
        </Link>
      </div>
      <div className="hidden md:block">
        <img src={Pic} alt="home_pic" className="h-full w-full object-cover"/>
      </div>
    </div>
  );
};

export default Hero;
