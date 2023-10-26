import Hero from "../Components/Hero";
import CourseCardHolder from "../Components/CourseCardHolder";
import NewsCard from "../Components/NewsCard";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] justify-start items-center m-auto gap-3">
      <Hero />
      <CourseCardHolder />
      <NewsCard />
      <div className="bg-primary flex w-full">
        <h3 className="text-2xl px-12 py-8 text-white font-bold font-primary">
          For any quary or report issues : <br />
          learn_hub@abc.com
        </h3>
      </div>
    </div>
  );
};

export default HomePage;
