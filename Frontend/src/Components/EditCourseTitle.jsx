import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useState} from "react";

const submitCourse = async (data) => {
  try {
    const response = await axios.put(
      "http://localhost:3000/editCourseHead",
      data,
      {
        // headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to edit course head or network problems");
  }
};

const useEditCourse = () => {
  return useMutation(submitCourse, {
    onSuccess: (data) => {
      alert(data.message);
    },
    onError: (error) => {
      alert(error.message || "An error is occured");
    },
  });
};


const EditCourseTitle = ({ isVisible, onClose, name, prices, des, courseID }) => {
  const [title, setTitle] = useState(name);
  const [description, setDescription] = useState(des);
  const [price, setPrice] = useState(prices);
  const navigate = useNavigate();
  const { mutate, isError, isLoading, error } = useEditCourse();

  const submit = (e) => {
    e.preventDefault();
    const coursedata = { title, description, price, courseID };
    coursedata.title = title;
    coursedata.description = description;
    coursedata.price = price;
    coursedata.courseID = courseID;
    mutate(coursedata);
    onClose();
    navigate(`/course/${courseID}`);
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
          Create a new course
        </h1>
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Give a title of the course"
            required
            className="border-2 border-[#192655] rounded-md p-2 w-full focus:outline-none mb-3"
            onChange={(e) => {
                setTitle(e.target.value);
              }}
              defaultValue={name}
          />
          <textarea
            type="text"
            placeholder="Give a short description of the course"
            required
            className="border-2 border-[#192655] rounded-md p-2 w-full focus:outline-none mb-3"
            onChange={(e) => {
                setDescription(e.target.value);
              }}
              defaultValue={des}
          />
          <input
            type="text"
            placeholder="Sale Price of this course"
            required
            className="border-2 border-[#192655] rounded-md p-2 w-full focus:outline-none mb-3"
            onChange={(e) => {
                setPrice(e.target.value);
              }}
              defaultValue={prices}
          />
          <div className="flex justify-center items-center gap-2">
            <button type="submit" className="btn inline-block">
              Update
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

export default EditCourseTitle;