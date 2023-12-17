import {useQuery} from 'react-query'
import axios from 'axios'

const withdrawCart = async () => {
  return axios.get('http://localhost:3000/withdarwHistory',{
    withCredentials: true,
  })
}

const InstructorWithdrawHistory = () => {
    const {data, isLoading, isError, error} = useQuery('instructorWithdarwHistory', withdrawCart )

  if (isLoading) {
    return <div>Loading..</div>
  }

  if (isError) {
    return <div>Error Occured: {error.message}</div>
  }

  return (
    
    <div className="w-full md:mx-w-[1460px]">
      <h1 className="text-3xl font-semibold text-[#192655] md:pl-[100px]">Withdraw History</h1>
      <div className="flex flex-col md:px-[80px] pb-[20px]">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-bold text-primary ">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Withdraw Request ID
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Request Date
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Requested Amount
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Request Status
                    </th>
                  </tr>
                </thead>
                <tbody className="font-semibold text-primary">
                  {data?.data.info.map((item,i) => {
                    return <tr key={i} className="border-b transition duration-300 ease-in-out hover:bg-gray-300 ">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {item.w_id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{item.w_date}</td>
                    <td className="whitespace-nowrap px-6 py-4">BDT {item.w_amount}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.w_status}</td>
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

export default InstructorWithdrawHistory;