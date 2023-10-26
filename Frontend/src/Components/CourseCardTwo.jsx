import Pic from "../assets/home-pic.jpg";

import { Link } from "react-router-dom";

const CourseCardTwo = () => {
  return (
    <div className="block rounded-lg bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <img className="rounded-t-lg" src={Pic} alt="course_pic" />

      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Big Data Analysis
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </p>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Created by : Shahriar Saikat
        </p>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Price : 1000 BDT
        </p>

        <Link
          to="/course/:courseId"
          className="inline-block rounded bg-white px-6 pb-2 pt-2.5 text-lg font-medium leading-normal text-[#192655] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Show Detail
        </Link>
      </div>
    </div>
  );
};

export default CourseCardTwo;
