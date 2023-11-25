import { useForm } from "react-hook-form";
import { useMutation} from "react-query";
import axios from "axios";

const addCategory = async (data) => {
    try {
        const response = await axios.post('http://localhost:3000/addCategory', data,{
          withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to create account or network problems');
    }
};

const AdminAddCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { mutate, isError, isLoading, error } = useMutation(addCategory,{
    onSuccess: (data)=>{
      alert(data.message);
    },
    onError : (error)=>{
      alert(error.message||"An error is occured");
    }
  }); 

  const useSubmit = (data) => {
    mutate(data);
    reset();
  };
  return (
    <div className="flex justify-center items-center w-full">
      <form
        className="flex md:flex-row flex-col justify-center items-center gap-3 p-5 w-full md:w-1/2"
        onSubmit={handleSubmit(useSubmit)}
        noValidate
      >
        <input
          type="text"
          placeholder="Add a new course category"
          className="md:w-[500px] h-[50px] rounded-xl border-2 border-[#192655] outline-none px-3 w-full"
          {...register("cat_name", {
            required: {
              value: true,
              message: "Category name is required",
            },
          })}
        />
        <p className=" mb-2 text-red-600 font-semibold">
          {errors.cat_name?.message}
        </p>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AdminAddCategory;
