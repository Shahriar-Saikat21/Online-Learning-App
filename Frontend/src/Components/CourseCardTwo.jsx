import { Link } from "react-router-dom";

const CourseCardTwo = ({ info }) => {
  return (
    <div className="block rounded-lg bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:w-[270px] md:overflow-hidden">
      <div className="md:relative md:w-[270px] md:h-[200px]">
        <img
          className="rounded-t-lg md:absolute inset-0 w-full h-full object-cover"
          src={"http://localhost:3000/Image/" + info.co_pic}
          alt="course_pic"
        />
      </div>

      <div className="p-6">
        <div className=" h-16 overflow-hidden">
        <h5 className="mb-2 text-xl font-medium leading-tight text-white ">
          {info.co_title}
        </h5>
        </div>
        <div className="h-24 overflow-hidden mb-3">
          <p className="mb-4 text-base text-white italic">{info.co_des}</p>
        </div>
        
        <p className="mb-4 text-base text-white ">
          Created by : {info.user_name}
        </p>
        <p className="mb-4 text-base text-white ">
          Price : {info.co_price} BDT
        </p>

        <Link
          to={"/course/" + info.CourseID}
          className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-lg font-medium leading-normal text-[#192655] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Show Detail
        </Link>
      </div>
    </div>
  );
};

export default CourseCardTwo;
