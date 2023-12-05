import axios from "axios";
import {useForm} from 'react-hook-form'

const submitEmail = async (data) => {
  try {
    const res = await axios.get(`http://localhost:3000/forgotPassword?email=${data.email}`,{
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    throw new Error("Failed to login or network problems");
  }
};

const ForgetPass = () => {

  const {register, handleSubmit, formState: {errors},reset} = useForm();

  const onSubmit = async (data) => {
    const result = await submitEmail(data);
    if(result.success){
      localStorage.setItem("resetAuth", 'ok');
      localStorage.setItem("resetEmail", data.email);
      alert(result.message);
    }else{
      alert(result.message);
    }
    reset();
  };
    return (
        <div className="w-full">
          <div className=" px-10 py-6 border-2 border-[#192655] rounded-lg w-full shadow-xl">
            <h1 className="text-4xl text-[#192655] pt-4 pr-5 font-primary mb-5">
              Forget Password
            </h1>
            <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)} noValidate>
              <input
                type="email"
                placeholder="Enter your email"
                className="formInput "
                {...register("email", {
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email address",
                  },
                  required: {
                    value: true,
                    message: "User Email is required",
                  }
                })}
              />
              <p className=" mb-2 text-red-500 font-semibold">{errors.email?.message}</p>
              <button className="btn">Send Reset Link</button>
            </form>        
          </div>
        </div>
    );
};

export default ForgetPass;