import {useQuery} from 'react-query'
import axios from 'axios'

import CourseCardTwo from "./CourseCardTwo";

const seePopularCourse = async () => {
  return axios.get('http://localhost:3000/seePopularCourse',{
    withCredentials: true,
  })
}

const CourseCardHolder = () => {
  const {data, isLoading, isError, error} = useQuery('popularCourse', seePopularCourse )

  if (isLoading) {
    return <div>Loading..</div>
  }

  if (isError) {
    return <div>Error Occured: {error.message}</div>
  }
  return (
    <div className="flex flex-col items-start justify-start w-full h-auto my-5 bg-slate-300 md:px-[80px] px-10">
      <h2 className="text-3xl font-primary font-semibold text-[#192655] pt-5 mb-5">
        Popular Courses
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-10">
        {
          data.data.data.map((item) => {
            return (
              <CourseCardTwo
                key={item.CourseID}
                info = {item}
              />
            );
          })

        }
      </div>
    </div>
  );
};

export default CourseCardHolder;
