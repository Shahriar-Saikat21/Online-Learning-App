import { useState } from "react";
import { FaSistrix } from "react-icons/fa6";
import axios from 'axios'
import { Link } from "react-router-dom";

const searchCourse = async (name) => {
  return await axios.get(`http://localhost:3000/serachCourse?course=${name}`,{
    withCredentials: true,
  })
}

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [course, setCourse] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setSearch("");
    const result = await searchCourse(search);
    if(result.data.info.length > 0){
      setCourse(result.data.info);
    }else{
      alert("No course found");
      setCourse(result.data.info);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full px-5 pt-[100px] mb-5 gap-5">
      <form className="w-full md:w-1/2 relative" onSubmit={handleClick}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 rounded-full border-2 border-[#192655]"
            onChange={handleChange}
            value={search}
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-primary rounded-full text-white text-[15px]"
          >
            <FaSistrix />
          </button>
        </div>
      </form>
      <div className="w-1/2 flex flex-col h-auto">

      
      {course.length > 0 ?
       ( 
        course.map((item) => {
          return <div
            key={item.co_id}
            className="flex flex-col mb-5 rounded-lg bg-slate-600 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-full md:flex-row"
          >
            <img
              className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={"http://localhost:3000/Image/" + item.co_pic}
              alt="course_pic"
            />
            <div className="flex flex-col justify-start p-6 bg-primary w-full">
              <h5 className="mb-2 text-2xl font-medium text-white ">
                {item.co_title}
              </h5>
              <p className="mb-4 text-base text-white">{item.co_des}</p>
              <Link
                to={"/course/" + item.co_id}
                className=" px-6 pb-2 pt-2.5 text-lg font-medium leading-normal text-white"
              >
                Show Detail
              </Link>
            </div>
          </div>
        })
       ): null}
       </div>
    </div>
  );
};

export default SearchBar;
