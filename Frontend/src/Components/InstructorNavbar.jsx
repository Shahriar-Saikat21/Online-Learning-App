import {useState} from 'react'
import { NavLink,useNavigate} from "react-router-dom";
import { HiOutlineBars4,HiOutlineXMark } from "react-icons/hi2";
import axios from 'axios';

const logout = async ()=>{
  await axios.get('http://localhost:3000/logout',{
    withCredentials:true
  });
  sessionStorage.removeItem('status');
}

const InstructorNavbar = () => {
  const[toggle,setToggle]=useState(false);
  const toggleHandler=()=>{setToggle(!toggle)};
  const navigate = useNavigate();

  return (
    <nav className="bg-primary fixed w-full h-[60px] z-20">
      <div className=" md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-12 px-4">
        <div className='flex justify-between items-center'>
            <NavLink to={"/"} className="text-3xl font-bold text-[#ffffff] ml-2 font-primary">Learn Hub</NavLink>
        </div>
        <ul className="hidden md:flex justify-center items-center gap-4 ">
          <NavLink to={"/instructor-home"}className=" pcNav">Home</NavLink>
          <NavLink to={"/instructor-profile"}className=" pcNav">Profile</NavLink>
          <NavLink to={"/createCourse"}className=" pcNav">Create</NavLink>
          <button className=" pcNav"  onClick={async ()=>{
              await logout(); 
              navigate('/');              
            }}>Logout</button>
        </ul>
        <div className='md:hidden' onClick={toggleHandler}>
          {
            toggle?<HiOutlineXMark className=' text-3xl text-[#ffffff] cursor-pointer'/>:
              <HiOutlineBars4 className=' text-3xl text-[#ffffff] cursor-pointer'/>
          }            
        </div>
        <div className={toggle?'absolute bg-primary w-full md:hidden border-b top-[40px] left-0':'hidden'}>
          <ul className=" p-6 flex flex-col gap-2">
            <NavLink to={"/instructor-home"} className=" mobileNav">Home</NavLink>
            <NavLink to={"/instructor-profile"} className=" mobileNav">Profile</NavLink>   
            <NavLink to={"/instructor-course"} className=" mobileNav">Course</NavLink>    
            <button className=" mobileNav"  onClick={async ()=>{
              await logout(); 
              navigate('/');              
            }}>Logout</button>    
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default InstructorNavbar;