import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useState} from "react";

const submitProfileInfo = async (data) => {
  try {
    const response = await axios.put(
      "http://localhost:3000/editProfileInfo",
      data,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to edit profile info or network problems");
  }
};

const useEditProfile = () => {
  return useMutation(submitProfileInfo , {
    onSuccess: (data) => {
      alert(data.message);
    },
    onError: (error) => {
      alert(error.message || "An error is occured");
    },
  });
};

const EditInfoModal = ({ isVisible, onClose, name, email }) => {
  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { mutate, isError, isLoading, error } = useEditProfile();

  const submit = (e) => {
    e.preventDefault();
    const profiledata = { userName, userEmail, password };
    profiledata.userName = userName;
    profiledata.userEmail = userEmail;
    profiledata.password = password;
    mutate(profiledata);
    onClose();
    navigate(`/instructor-profile`);
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
          Update Account Settings
        </h1>
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Update Your Name"
            className="border-2 border-[#192655] rounded-md p-2 w-full focus:outline-none mb-3"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            defaultValue={name}
          />
          <input
            type="email"
            placeholder="Update Your Email"
            className="border-2 border-[#192655] rounded-md p-2 w-full focus:outline-none mb-3"
            defaultValue={email}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Update Your Password"
            className="border-2 border-[#192655] rounded-md p-2 w-full focus:outline-none mb-3"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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

export default EditInfoModal;