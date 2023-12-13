import ShowCategory from "../Components/AdminShowAllCategory";
import AddCategory from "../Components/AdminAddCategory";
import {Navigate} from 'react-router-dom'

const AdminCategoryPage = () => {
  if(!localStorage.getItem("token") && sessionStorage.getItem("status")!=="admin"){
    return <Navigate to='/login' />
}
  return (
    <div className="flex flex-col w-full h-[100vh] justify-start items-start md:max-w-[1460px] m-auto gap-3 pt-[100px]">
      <h1 className="text-3xl font-primary font-bold mx-3 text-start px-[40px]">
        Course Category Management
      </h1>
      <AddCategory />
      <ShowCategory />
    </div>
  );
};

export default AdminCategoryPage;
