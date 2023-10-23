import { useState } from "react";
import { FaSistrix } from "react-icons/fa6";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <div className="flex justify-center items-center w-full px-5 pt-[100px] -z-30 mb-5">
      <form className="w-full md:w-1/2 relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-4 rounded-full border-2 border-[#192655]"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-primary rounded-full text-white"
            onClick={handleClick}
          >
            <FaSistrix />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
