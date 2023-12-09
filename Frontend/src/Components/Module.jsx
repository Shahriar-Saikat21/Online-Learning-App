import ReactPlayer from "react-player";

const Module = ({ module }) => {
  return (
    <div className="flex flex-col justify-start items-start bg-slate-100 w-1/2 h-auto p-5">
      <h1 className="text-2xl font-primary mb-3">
        {module.mo_serial + ". " + module.mo_title}
      </h1>
      {sessionStorage.getItem("status") === "instructor" && 
        <ReactPlayer
        url={"http://localhost:3000/Video/" + module.mo_video}
        width="100%"
        height="100%"
        controls
    />
      }
    </div>
  );
};

export default Module;
