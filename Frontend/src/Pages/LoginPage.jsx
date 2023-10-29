import pic from "../assets/home-pic.jpg";

const LoginPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="absolute flex flex-col justify-center">
        <img src={pic} alt="Home pic" className="object-cover" />
      </div>
      <div className="grid-rows-span-full justify-center pt-60">
        <div className="flex justify-center">
          <div className="flex flex-row justify-right pt-40">
            <div className="relative w-[533px] h-[187px] mix-blend-difference [font-family:'Inter',Helvetica] font-black text-black text-[48px] leading-[normal]">
              Online learning &amp; <br />
              Teaching Platform
              <p className="absolute w-[533px] top-[122px] left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[16px] leading-[normal] pt-5">
                Find your desiring course and start learning.&nbsp;&nbsp;
                <br />
                We provide our best to educate you.
                <br />
                Congratulations you are just one click away from what you need
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-right">
            <div className="relative w-[600px] h-[500px] -top-px -left-px bg-white rounded-[5px] border border-solid border-[#192655] shadow-[0px_4px_4px_#00000040]">
              <p className="absolute top-[340px] left-[220px] [font-family:'Inter',Helvetica] font-normal text-transparent text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                <span className="italic text-black">Forget Password? </span>
                <a href="#" className="italic text-[#192655]">Reset</a>
              </p>
              <div className="absolute w-[470px] h-[40px] top-[150px] left-[70px]">
                <div className="relative w-[460px] h-[40px] bg-[#d9d9d9] rounded-[5px]">
                  <input type="text" className="w-full h-full px-4 py-2 [font-family:'Inter',Helvetica] font-semibold text-[#797878] text-[16px] tracking-[0] leading-[normal] bg-slate-200 whitespace-nowrap" placeholder="Enter Your Login ID"/>
                </div>
              </div>
              <div className="absolute w-[470px] h-[40px] top-[220px] left-[70px]">
                <div className="relative w-[460px] h-[40px] bg-[#d9d9d9] rounded-[5px]">
                  <input type="password" className="w-full h-full px-4 py-2 [font-family:'Inter',Helvetica] font-semibold text-[#797878] text-[16px] tracking-[0] leading-[normal] bg-slate-200 whitespace-nowrap" placeholder="Enter Password"/>
                </div>
              </div>
              <button className="absolute w-[250px] h-[40px] top-[290px] left-[180px] all-[unset] box-border">
                <div className="relative w-[250px] h-[40px] bg-[#192655] rounded-[5px]">
                  <div className="absolute w-[70px] top-[5px] left-[90px] [font-family:'Inter',Helvetica] font-semibold text-white text-[24px] tracking-[0] leading-[normal]">
                    Login
                  </div>
                </div>
              </button>
              <button className="absolute w-[460px] h-[60px] top-[380px] left-[70px] border-2 border-solid border-[#192655] rounded-[5px]">
                <div className="relative w-[250px] left-[110px] [font-family:'Inter',Helvetica] font-semibold text-[#192655] text-[32px] tracking-[0] leading-[normal]">
                  Create Account
                </div>
              </button>
              <div className="absolute top-[70px] left-[70px] [font-family:'Inter',Helvetica] font-bold text-[#192655] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                Login
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
