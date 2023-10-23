import {useState} from 'react'
import { NavLink} from "react-router-dom";
import { HiOutlineBars4,HiOutlineXMark } from "react-icons/hi2";

const VisitorNavbar = () => {
  const[toggle,setToggle]=useState(false);
  const toggleHandler=()=>{setToggle(!toggle)};

  return (
    <nav className="bg-primary fixed w-full h-[60px] z-20">
      <div className=" md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-12 px-4">
        <div className='flex justify-between items-center'>
            <NavLink to={"/"} className="text-3xl font-bold text-[#ffffff] ml-2 font-primary">Learn Hub</NavLink>
        </div>
        <ul className="hidden md:flex justify-center items-center gap-4 ">
          <NavLink to={"/login"}className=" pcNav">Login</NavLink>
          <NavLink to={"/signup"}className=" pcNav">Signup</NavLink>
        </ul>
        <div className='md:hidden' onClick={toggleHandler}>
          {
            toggle?<HiOutlineXMark className=' text-3xl text-[#ffffff] cursor-pointer'/>:
              <HiOutlineBars4 className=' text-3xl text-[#ffffff] cursor-pointer'/>
          }            
        </div>
        <div className={toggle?'absolute bg-primary w-full md:hidden border-b top-[40px] left-0':'hidden'}>
          <ul className=" p-6 flex flex-col gap-2">
            <NavLink to={"/login"} className=" mobileNav">Login</NavLink>
            <NavLink to={"/signup"} className=" mobileNav">Signup</NavLink>    
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default VisitorNavbar;
