const EditPicModal = ({ isVisible, onClose }) => {

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
          Update Profile Picture
        </h1>
        <form className="w-full">
          <input
            type="file"
            placeholder="Upload a picture"
            className="border-2 border-[#192655] rounded-md p-2 w-full focus:outline-none"
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

export default EditPicModal;