import Pic from "../assets/home-pic.jpg";
const NewsTable = () => {
  return (
    <div className="w-full md:mx-w-[1460px]">
      <h1 className="text-3xl font-semibold text-[#192655] md:pl-[100px]">
        News History
      </h1>
      <div className="flex flex-col md:px-[80px] pb-[20px]">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-bold text-primary ">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      News Title
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Created At
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="font-semibold text-primary">
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-gray-300 ">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      Discount Advertizement
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">12-10-2030</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <img src={Pic} alt="" />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button type="submit" className="btn md:w-full">
                        Live Now
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button type="submit" className="btn md:w-full">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTable;
