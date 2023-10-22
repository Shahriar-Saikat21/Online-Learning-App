const InstructorChart = () => {
  return (
    <div className="w-full md:mx-w-[1460px]">
      <h1 className="text-3xl font-semibold text-[#192655] md:pl-[100px]">Course History</h1>
      <div className="flex flex-col md:px-[80px] pb-[20px]">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-bold text-primary ">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Created At
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Enrolled
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Income
                    </th>
                  </tr>
                </thead>
                <tbody className="font-semibold text-primary">
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-gray-300 ">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                    Data Structure & Algorithm
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">12-10-2030</td>
                    <td className="whitespace-nowrap px-6 py-4">27</td>
                    <td className="whitespace-nowrap px-6 py-4">30000 BDT</td>
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

export default InstructorChart;
