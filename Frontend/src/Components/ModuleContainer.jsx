import Module from "./Module";
import axios from "axios";
import { useQuery } from "react-query";

const showAllModules = async () => {
    const id = sessionStorage.getItem("courseID");
    return await axios.get(`http://localhost:3000/getModule?courseID=${id}`, {
    withCredentials: true,
  });
};

const ModuleContainer = ({courseID}) => {
    const {data, isLoading, isError,error} = useQuery("modules", showAllModules);
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>{error.message}</div>;
      }
    return (
        <div className="flex flex-col w-full h-auto justify-start items-center p-5 gap-5">
            {data?.data.info.map((module) => {
                return <Module key={module.mo_id} module={module} />;
            })}
        </div>
    );
};

export default ModuleContainer;