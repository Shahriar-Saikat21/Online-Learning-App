import axios from "axios";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";


const addModule = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/addModule",
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to create module or network problems");
  }
};

const useAddModule = () => {
  return useMutation(addModule, {
    onSuccess: (data) => {
      alert(data.message);
    },
    onError: (error) => {
      alert(error.message || "An error is occured");
    },
  });
};

const AddModule = ({ isVisible, onClose,courseID }) => {
  const { mutate, isError, isLoading, error } = useAddModule();
  const [video, setVideo] = useState();
  const [name, setName] = useState();
  const [serial, setSerial] = useState();
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    const profileImage = { video,name,serial,courseID };
    profileImage.video = video;
    profileImage.name = name;
    profileImage.serial = serial;
    profileImage.courseID = courseID;
    mutate(profileImage);
    onClose();
    navigate(`/course/${courseID}`);
  };

    const handle = (e) => {
        if(e.target.id === "wrapper")
            onClose();
    };

  if (!isVisible) return null;

  return (
    <div
      id="wrapper"
      onClick={handle}
      className="bg-black fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10"
    >
      <div className="flex flex-col items-start justify-center bg-white rounded-lg w-[600px] p-6">
        <h1 className="text-xl text-[#192655] font-semibold font-primary text-center mb-4">
          Add New Module to this Course
        </h1>
        <form className="w-full" onSubmit={submit}>
        <input
            type="text"
            placeholder="Module Name"
            className="border-2 border-[#192655] rounded-md p-2 w-full focus:outline-none mb-3"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        <input
            type="text"
            placeholder="Module Serial Number"
            className="border-2 border-[#192655] rounded-md p-2 w-full focus:outline-none mb-3"
            onChange={(e) => {
              setSerial(e.target.value);
            }}
          />
          <input
            type="file"
            placeholder="Upload a video"
            required
            accept=".mp4"
            className="border-2 border-[#192655] rounded-md p-2 w-full focus:outline-none"
            onChange={(e) => {
                setVideo(e.target.files[0]);
            }}
          />
          <div className="flex justify-center items-center gap-2">
            <button type="submit" className="btn inline-block">
              Create
            </button>
            <button className="btn inline-block" onClick={() => onClose()}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModule;