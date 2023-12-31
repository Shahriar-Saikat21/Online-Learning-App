import ReactPlayer from "react-player";

const Module = ({ module,status,role }) => {
  return (
    <div className="flex flex-col justify-start items-start bg-slate-100 w-1/2 h-auto p-5 shadow-md">
      <h1 className="text-2xl font-primary mb-3">
        {module.mo_serial + ". " + module.mo_title}
      </h1>
      {status && (role==="instructor" || role==="student" || role==="admin") && 
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
