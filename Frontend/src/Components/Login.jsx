import React from "react";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full">
      <div className=" px-10 py-6 border-2 border-[#192655] rounded-lg w-full shadow-xl">
        <h1 className="text-4xl text-[#192655] pt-4 pr-5 font-primary mb-5">
          Login
        </h1>
        <form className="flex flex-col justify-center items-center ">
          <input
            type="text"
            placeholder="Enter Your User Name or Email"
            className="formInput mb-5"
          />
          <p className=" mb-2 text-red-500 font-semibold"></p>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="formInput"
          />
          <p className=" mb-2 text-red-500 font-semibold"></p>
          <button className="btn">Login</button>
        </form>

        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-sm inline-block font-primary">
            Forget Password?
            <Link
              to={"/forgetPassword"}
              className="text-xl text-[#192655] underline font-primary ml-3"
            >
              Reset Password
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
