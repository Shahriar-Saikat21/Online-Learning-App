import pic from "../assets/home-pic.jpg";

const ProfileCard = () => {
  return (
    <div className="my-5">
      <div className="flex md:flex-col gap-3">
        <div className="w-32 md:w-[400px] md:h-[300px] h-32 rounded-md ring ring-[#192655] ring-offset-2">
          <img
            src={pic}
            alt="profile-pic"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-primary">
            Shahriar Imtiaz Saikat
          </h1>
          <h2 className="text-2xl text-primary">saikatbass@gmail.com</h2>
          <h2 className="text-2xl text-primary">Student</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
