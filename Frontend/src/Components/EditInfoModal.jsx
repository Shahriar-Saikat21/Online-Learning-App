const EditInfoModal = ({ isVisible, onClose }) => {

    const handle = (e) => {
        if(e.target.id === "wrapper")
            onClose();
    };

  if (!isVisible) return null;

  return (
    <div
      id="wrapper"
      onClick={handle}
      className="bg-black fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="flex flex-col items-start justify-center bg-white rounded-lg w-[600px] p-6">
        <h1 className="text-xl text-[#192655] font-semibold font-primary text-center mb-4">
          Update Account Settings
        </h1>
        <form>
          <input
            type="text"
            placeholder="Update Your Name"
            className="border-2 border-[#192655] rounded-md p-2 w-full focus:outline-none mb-3"
          />
          <input
            type="text"
            placeholder="Update Your Email"
            className="border-2 border-[#192655] rounded-md p-2 w-full focus:outline-none mb-3"
          />
          <input
            type="password"
            placeholder="Update Your Password"
            className="border-2 border-[#192655] rounded-md p-2 w-full focus:outline-none mb-3"
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