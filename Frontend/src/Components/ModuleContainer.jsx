import Module from "./Module";
import axios from "axios";
import { useQuery } from "react-query";

const showAllModules = async (courseID) => {
    return await axios.get(`http://localhost:3000/getModule?courseID=${courseID}`, {
    withCredentials: true,
  });
};

const ModuleContainer = ({courseID,status,role}) => {
    const {data, isLoading, isError,error} = useQuery(["modules",courseID],()=>showAllModules(courseID));
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>{error.message}</div>;
      }
    return (
        <div className="flex flex-col w-full h-auto justify-start items-center p-5 gap-5">
            {data?.data.info.map((module) => {
                return <Module key={module.mo_id} module={module} status={status} role={role}/>;
            })}
        </div>
    );
};

export default ModuleContainer;