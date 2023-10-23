const AdminCategoryPage = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] justify-start items-start md:max-w-[1460px] m-auto gap-3 pt-[100px]">
      <h1 className="text-3xl font-primary font-bold mx-3 text-start px-[40px]">
        Course Category Management
      </h1>
      <div className="flex justify-center items-center w-full">
        <form className="flex md:flex-row flex-col justify-center items-center gap-3 p-5 w-full md:w-1/2">
          <input
            type="text"
            placeholder="Add a new course category"
            className="md:w-[500px] h-[50px] rounded-xl border-2 border-[#192655] outline-none px-3 w-full"
          />
          <button type="submit" className="btn">
            Add
          </button>
        </form>
      </div>
      <div className="px-[50px]">
        <h2 className="text-xl font-primary font-semibold">Added Course Category</h2>
        <ul className="pt-5 px-5">
            <li className="text-lg font-primary">Computer Science</li>
            <li className="text-lg font-primary">Data Science</li>
            <li className="text-lg font-primary">Business Studies</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminCategoryPage;
