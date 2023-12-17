import { useMutation } from "react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const withdrawReq = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/withdrawRequest",
      data,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to send withdraw request or network problems");
  }
};

const useWithDrawReq = () => {
  return useMutation(withdrawReq, {
    onSuccess: (data) => {
      alert(data.message);     
    },
    onError: (error) => {
      alert(error.message || "An error is occured");
    },
  });
};

const WithdrawModal = ({ isVisible, onClose }) => {
  const [amount,setAmount] = useState();
  const navigate = useNavigate();
  const { mutate, isError, isLoading, error } = useWithDrawReq();

  const submit = (e) => {
    e.preventDefault();
    const withdrawdata = { amount };
    withdrawdata.amount = amount;
    mutate(withdrawdata);
    onClose();
    navigate("/instructor-home");
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
          Send Withdraw Request
        </h1>
        <form className="w-full" onSubmit={submit}>
          <input
            type="text"
            placeholder="Enter Withdraw Amount"
            className="border-2 border-[#192655] rounded-md p-2 w-full focus:outline-none mb-3"
            required
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="flex justify-center items-center gap-2">
            <button type="submit" className="btn inline-block">
              Transfer Request
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

export default WithdrawModal;