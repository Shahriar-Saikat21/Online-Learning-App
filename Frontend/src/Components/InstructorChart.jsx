import {useQuery} from 'react-query'
import axios from 'axios'

const instructorCart = async () => {
  return axios.get('http://localhost:3000/instructorCart')
}

const InstructorChart = () => {

  const {data, isLoading, isError, error} = useQuery('instructorCart', instructorCart )

  if (isLoading) {
    return <div>Loading..</div>
  }

  if (isError) {
    return <div>Error Occured: {error.message}</div>
  }

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
                  {data?.data.map((item,i) => {
                    return <tr key={i} className="border-b transition duration-300 ease-in-out hover:bg-gray-300 ">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {item.TITLE}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{item.CREATED}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.ENROLLED}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.SELL} BDT</td>
                  </tr> 
                  })}
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
