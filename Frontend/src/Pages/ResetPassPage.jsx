import ResetPass from '../Components/ResetPAss'

const ResetPassPage = () => {
    return (
        <div className="flex flex-col w-full h-[100vh] justify-center items-center">
      <h1 className="text-2xl md:text-4xl text-[#192655] mb-[50px] pt-4 pr-5 font-bold font-primary">
        Welcome to Learn Hub
      </h1>
      <div className="flex justify-center items-center md:mx-4 ">
        <ResetPass />
      </div>
    </div>
    );
};

export default ResetPassPage;