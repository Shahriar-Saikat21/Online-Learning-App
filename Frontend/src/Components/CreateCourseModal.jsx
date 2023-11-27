import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useState,useEffect } from "react";

const submitCourse = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/createCourse",
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to create new course or network problems");
  }
};

const useUploadCourse = () => {
  return useMutation(submitCourse, {
    onSuccess: (data) => {
      alert(data.message);
    },
    onError: (error) => {
      alert(error.message || "An error is occured");
    },
  });
};

const CreateCourseModal = ({ isVisible, onClose }) => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [option, setOption] = useState([]);
  const navigate = useNavigate();
  const { mutate, isError, isLoading, error } = useUploadCourse();

  const submit = (e) => {
    e.preventDefault();
    const coursedata = { title, description, price,image };
    coursedata.title = title;
    coursedata.description = description;
    coursedata.price = price;
    coursedata.category = category;
    coursedata.image = image;
    mutate(coursedata);
    onClose();
    navigate("/instructor-profile");
  };

    useEffect(() => {
        const c=[]
        axios.get("http://localhost:3000/instructorCategory",{
          withCredentials: true,
        })
        .then((res) => {
          res.data.map(item=>{
            c.push({label: item.cat_name, value: item.cat_id})
          })
          setOption(c);
        }).catch((err) => {
          console.log(err)
        });
      }, [option]);

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
          />
          <input
            type="text"
            placeholder="Give a short description of the course"
            required
            className="border-2 border-[#192655] rounded-md p-2 w-full focus:outline-none mb-3"
            onChange={(e) => {
                setDescription(e.target.value);
              }}
          />
          <input
            type="text"
            placeholder="Sale Price of this course"
            required
            className="border-2 border-[#192655] rounded-md p-2 w-full focus:outline-none mb-3"
            onChange={(e) => {
                setPrice(e.target.value);
              }}
          />
          <p className="text-md text-left text-[#192655] font-semibold font-primary mb-4">Secet Course Category</p>
          <select
            name="accountType"
            className="my-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) => {
                setCategory(e.target.value);
              }}
          >
            {option.map((option) => {
                 return <option key={option.value} value={option.value}>{option.label}</option>
            })}
            
          </select>
          <input
            type="file"
            placeholder="Upload a picture"
            required
            accept=".png, .jpg, .jpeg"
            className="border-2 border-[#192655] rounded-md p-2 w-full focus:outline-none"
            onChange={(e) => {
                setImage(e.target.files[0]);
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

export default CreateCourseModal;
