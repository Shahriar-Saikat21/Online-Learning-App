import {useQuery} from 'react-query'
import axios from 'axios'

const newsAllView = async () => {
  return axios.get('http://localhost:3000/adminAllNews')
}

async function updateStatus(id,status){
  const formData = {id: id, status: status};
  console.log(formData)
  const data = await axios.put('http://localhost:3000/updateNewsStatus',formData)
  alert(data.data.message);

}

async function deleteNews(id){
  const data = await axios.get(`http://localhost:3000/deleteNews/${id}`)
  alert(data.data.message);
}

const NewsTable = () => {
  const {data, isLoading, isError, error} = useQuery('newsAllItems', newsAllView )

  if (isLoading) {
    return <div>Loading..</div>
  }

  if (isError) {
    return <div>Error Occured: {error.message}</div>
  }

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
                      Created By
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
                  {data?.data.map((item) => {
                    return <tr key = {item.news_id} className="border-b transition duration-300 ease-in-out hover:bg-gray-300 ">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {item.news_title}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{item.news_date}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.user_name}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <img src={"http://localhost:3000/Image/"+item.news_pic} alt="news_pic" />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button type="submit" className="btn md:w-full" onClick={()=>updateStatus(item.news_id,item.news_status)}>
                        {item.news_status === "Live" ? "Down Now" : "Live Now"}
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button type="submit" className="btn md:w-full" onClick={()=>deleteNews(item.news_id)}>
                        Delete
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

export default NewsTable;
