import CourseCardTwo from "./CourseCardTwo";

const CourseCardHolder = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-auto my-5 bg-slate-300 md:px-[80px] px-10">
      <h2 className="text-3xl font-primary font-semibold text-[#192655] pt-5 mb-5">
        Popular Courses
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-10">
        <CourseCardTwo />
        <CourseCardTwo />
        <CourseCardTwo />
        <CourseCardTwo />
        <CourseCardTwo />
      </div>
    </div>
  );
};

export default CourseCardHolder;
