import {useState} from 'react'
import { NavLink} from "react-router-dom";
import { HiOutlineBars4,HiOutlineXMark } from "react-icons/hi2";

const StudentNavbar = () => {
  const[toggle,setToggle]=useState(false);
  const toggleHandler=()=>{setToggle(!toggle)};

  return (
    <nav className="bg-primary fixed w-full h-[60px] ">
      <div className=" md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-12 px-4">
        <div className='flex justify-between items-center'>
            <NavLink to={"/"} className="text-3xl font-bold text-[#ffffff] ml-2 font-primary">Learn Hub</NavLink>
        </div>
        <ul className="hidden md:flex justify-center items-center gap-4 ">
          <NavLink to={"/student-home"}className=" pcNav">Home</NavLink>
          <NavLink to={"/student-profile"}className=" pcNav">Profile</NavLink>
          <NavLink to={"/"}className=" pcNav">Logout</NavLink>
        </ul>
        <div className='md:hidden' onClick={toggleHandler}>
          {
            toggle?<HiOutlineXMark className=' text-3xl text-[#ffffff] cursor-pointer'/>:
              <HiOutlineBars4 className=' text-3xl text-[#ffffff] cursor-pointer'/>
          }            
        </div>
        <div className={toggle?'absolute bg-primary w-full md:hidden border-b top-[40px] left-0':'hidden'}>
          <ul className=" p-6 flex flex-col gap-2">
            <NavLink to={"/student-home"} className=" mobileNav">Home</NavLink>
            <NavLink to={"/student-profile"} className=" mobileNav">Profile</NavLink>   
            <NavLink to={"/student-course"} className=" mobileNav">Course</NavLink>    
            <NavLink to={"/"} className=" mobileNav">Logout</NavLink>    
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default StudentNavbar;