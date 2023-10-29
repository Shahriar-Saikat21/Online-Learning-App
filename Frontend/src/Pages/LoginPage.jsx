import pic from "../assets/home-pic.jpg";

const LoginPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="absolute flex flex-col justify-center">
        <img src={pic} alt="Home pic" className="object-cover" />
      </div>
      <div className="grid-rows-span-full justify-center pt-40">
        <div className="flex justify-center">
          <div className="flex flex-row justify-right">
            <div className="relative w-[533px] h-[187px] mix-blend-difference [font-family:'Inter',Helvetica] font-black text-black text-[48px]  tracking-[0] leading-[normal]">
              Online learning &amp; <br />
              Teaching Platform
            </div>
          </div>
          <div className="flex flex-col justify-right">
            <div className="relative w-[600px] h-[500px] -top-px -left-px bg-white rounded-[5px] border border-solid border-[#192655] shadow-[0px_4px_4px_#00000040]">
              <p className="absolute top-[340px] left-[200px] [font-family:'Inter',Helvetica] font-normal text-transparent text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                <span className="italic text-black">Forget Password?</span>
                <span className="italic text-[#0f6fc5]">Reset</span>
              </p>
              <div className="absolute w-[470px] h-[40px] top-[150px] left-[60px]">
                <div className="relative w-[460px] h-[40px] bg-[#d9d9d9] rounded-[5px]">
                  <div className="absolute top-[10px] left-[10px] [font-family:'Inter',Helvetica] font-semibold text-[#797878] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Enter Your Login ID
                  </div>
                </div>
              </div>
              <div className="absolute w-[470px] h-[40px] top-[220px] left-[60px]">
                <div className="relative w-[460px] h-[40px] bg-[#d9d9d9] rounded-[5px]">
                  <div className="absolute top-[10px] left-[10px] [font-family:'Inter',Helvetica] font-semibold text-[#797878] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Enter Password
                  </div>
                </div>
              </div>
              <button className="absolute w-[250px] h-[40px] top-[290px] left-[160px] all-[unset] box-border">
                <div className="relative w-[250px] h-[40px] bg-[#192655] rounded-[5px]">
                  <div className="absolute w-[70px] top-[5px] left-[90px] [font-family:'Inter',Helvetica] font-semibold text-white text-[24px] tracking-[0] leading-[normal]">
                    Login
                  </div>
                </div>
              </button>
              <div className="absolute w-[460px] h-[60px] top-[400px] left-[60px]">
                <div className="relative w-[460px] h-[60px] top-[-10px] left-[-10px] bg-white rounded-[5px] border-2 border-solid border-[#192655]">
                  <div className="absolute w-[250px] top-[10px] left-[110px] [font-family:'Inter',Helvetica] font-semibold text-[#192655] text-[32px] tracking-[0] leading-[normal]">
                    Create Account
                  </div>
                </div>
              </div>
              <div className="absolute top-[70px] left-[60px] [font-family:'Inter',Helvetica] font-bold text-[#192655] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
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
