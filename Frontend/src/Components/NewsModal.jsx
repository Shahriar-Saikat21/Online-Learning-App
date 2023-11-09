import { useMutation } from "react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";

const UploadNews = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/uploadNews",
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to upload new news or network problems");
  }
};

const useUploadNews = () => {
  const navigate = useNavigate();
  return useMutation(UploadNews, {
    onSuccess: (data) => {
      alert(data.message);
      navigate("/admin-news");
    },
    onError: (error) => {
      alert(error.message || "An error is occured");
      navigate("/admin-news");
    },
  });
};

const NewsModal = ({ isVisible, onClose }) => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const { mutate, isError, isLoading, error } = useUploadNews();

  const submit = (e) => {
    e.preventDefault();
    const newsdata = { title, image };
    newsdata.title = title;
    newsdata.image = image;
    mutate(newsdata);
  };

  const handle = (e) => {
    if (e.target.id === "wrapper") onClose();
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
          Add new news
        </h1>
        <form className="w-full" onSubmit={submit}>
          <input
            type="text"
            placeholder="Give a title"
            required
            className="border-2 border-[#192655] rounded-md p-2 w-full focus:outline-none mb-3"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          {/* <p className=" mb-2 text-red-600 font-semibold">{(titleRequired)?"Title is Required":""}</p> */}
          <input
            type="file"
            placeholder="Upload News Image"
            accept=".png, .jpg, .jpeg"
            required
            className="border-2 border-[#192655] rounded-md p-2 w-full focus:outline-none mb-3"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          {/* <p className=" mb-2 text-red-600 font-semibold">{(imageRequired)?"Image is Required":""}</p> */}
          <div className="flex justify-center items-center gap-2">
            <button type="submit" className="btn inline-block" >
              Add
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

export default NewsModal;
