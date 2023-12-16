import {useQuery} from 'react-query'
import axios from 'axios'

const studentCart = async () => {
  return axios.get('http://localhost:3000/studentCart',{
    withCredentials: true,
  })
}

async function downloadCertificate(id,picLink){
    // const data = await axios.get(`http://localhost:3000/deleteNews/${id}/${picLink}`,{
    //   withCredentials: true,
    // })
    // alert(data.data.message);
    console.log("Download Certificate")
}

const StudentPurchaseHistory = () => {
    const {data, isLoading, isError, error} = useQuery('studentCart', studentCart )

    if (isLoading) {
        return <div>Loading..</div>
    }

    if (isError) {
        return <div>Error Occured: {error.message}</div>
    }

    return (
        <div className="w-full md:mx-w-[1460px]">
      <h1 className="text-3xl font-semibold text-[#192655] md:pl-[100px]">Purchase History</h1>
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
                      Purchase Date
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Purchase ID
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Purchase Amount
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="font-semibold text-primary">
                  {data?.data.info.map((item,i) => {
                    return <tr key={i} className="border-b transition duration-300 ease-in-out hover:bg-gray-300 ">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {item.co_title}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{item.p_date}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.p_id}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.p_amount} BDT</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button type="submit" className="btn md:w-full" onClick={()=>downloadCertificate()}>
                        Download Certificate
                      </button>
                    </td>
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

export default StudentPurchaseHistory;