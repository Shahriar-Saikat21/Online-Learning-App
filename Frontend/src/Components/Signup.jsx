import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="w-full">
          <div className=" px-10  border-2 border-[#192655] rounded-lg w-full shadow-xl">
            <h1 className="text-4xl text-[#192655] pt-4 pr-5 font-primary mb-5">
              Signup
            </h1>
            <form className="flex flex-col justify-center items-center">
              <input
                type="text"
                placeholder="Enter Your User Name"
                className="formInput"
              />
              <p className=" mb-2 text-red-500 font-semibold"></p>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="formInput"
              />
              <p className=" mb-2 text-red-500 font-semibold"></p>
              <label htmlFor="accountType" className="text-lg text-[#192655]">Choose your account type</label>
              <select name="accountType" className="my-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
              </select>
              <input
                type="password"
                placeholder="Set Your Password"
                className="formInput"
              />
              <p className=" mb-2 text-red-500 font-semibold"></p>
              <input
                type="password"
                placeholder="Confirm Password"
                className="formInput"
              />
              <p className=" mb-2 text-red-500 font-semibold"></p>
              <button className="btn">Send OTP</button>
            </form>
            
            <div className="flex flex-col justify-center items-center w-full">
            <h2 className="text-sm inline-block font-primary text-[#192655] mb-2">
              Check your provided email for OTP
            </h2>
            <input
                type="text"
                placeholder="Enter OTP"
                className="formInput"
              />
              <button className="btn">Signup</button>
            </div>
            
          </div>
        </div>
      );
};

export default Signup;