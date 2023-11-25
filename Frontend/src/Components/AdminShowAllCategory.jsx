import { useQuery } from "react-query";
import axios from "axios";

const showAllCategory = async () => {
  return axios.get("http://localhost:3000/showCategory",{
    withCredentials: true,
  });
};

const AdminShowAllCategory = () => {
  const { data, isLoading, isError, error } = useQuery(
    "allCategory",
    showAllCategory
  );

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (isError) {
    return <div>Error Occured: {error.message}</div>;
  }
  return (
    <div className="px-[50px]">
      <h2 className="text-xl font-primary font-semibold">
        Added Course Category
      </h2>
      <ul className="pt-5 px-5">
        {data?.data?.map((item) => {
            return (
                <li key={item.cat_id} className="text-lg font-primary">{item.cat_name}</li>
            );
        })}
      </ul>
    </div>
  );
};

export default AdminShowAllCategory;
