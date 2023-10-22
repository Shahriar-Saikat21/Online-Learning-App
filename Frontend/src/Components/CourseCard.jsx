import {Link} from 'react-router-dom'

import pic from "../assets/home-pic.jpg";

const CourseCard = () => {
  return (
    <div className="flex flex-col rounded-lg bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:flex-row w-full">
      <img
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={pic}
        alt="course_pic"
      />
      <div className="flex flex-col justify-start p-6">
        <h5 className="mb-2 text-xl font-primary font-medium text-neutral-800 dark:text-neutral-50">
          Course Title
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <Link
          to="/course/:courseId"
          className="text-lg text-[#ffffff] cursor-pointer"
        >
          See Detail
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
